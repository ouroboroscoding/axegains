# coding=utf8
""" NATF Service

Handles all NATF requests
"""

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2019-03-24"

# Python imports
import re
from time import time

# Pip imports
from RestOC import Conf, DictHelper, Errors, Record_ReDB, Services, Sesh

# Project imports
from shared import Sync

# Service imports
from .Records import Match, MatchStats, Practice, PracticeStats

class Natf(Services.Service):
	"""NATF Service class

	Service for NATF practices and matches

	Extends: shared.Services.Service
	"""

	_install = [Match, Practice, PracticeStats]
	"""Record types called in install"""

	def initialise(self):
		"""Initialise

		Initialises the instance and returns itself for chaining

		Returns:
			Auth
		"""

		# Init the sync module
		Sync.init(Conf.get(('redis', 'sync'), {
			"host": "localhost",
			"port": 6379,
			"db": 1
		}))

	@classmethod
	def install(cls):
		"""Install

		The service's install method, used to setup storage or other one time
		install configurations

		Returns:
			bool
		"""

		# Go through each Record type
		for o in cls._install:

			# Install the table
			if not o.tableCreate():
				print("Failed to create `%s` table" % o.tableName())

	def match_create(self, data, sesh):
		"""Match (Create)

		Creates a new match and returns its ID

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['_internal_', 'initiator', 'opponent'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Verify the key, remove it if it's ok
		if not Services.internalKey(data['_internal_']):
			return Services.Effect(error=Errors.SERVICE_INTERNAL_KEY)
		del data['_internal_']

		# Create a new match instance
		try:
			oMatch = Match({
				"_created": int(time()),
				"finished": False,
				"calculated": False,
				"initiator": data['initiator'],
				"opponent": data['opponent'],
				"games": {
					"1": {},
				},
				"games_finished": {"i": False, "o": False}
			})
		except ValueError as e:
			return Services.Effect(error=(1001, e.args[0]))

		# Store the instance
		if not oMatch.create():
			return Services.Effect(error=1100)

		# Return the ID
		return Services.Effect(oMatch['_id'])

	def match_delete(self, data, sesh):
		"""Match (Delete)

		Deletes an existing match, can only be done if it's not finished

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Get the match
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent'])

		# If the thrower is neither the initiator or opponent, or the match is
		#	already marked finished
		if (dMatch['initiator'] != sesh['thrower']['_id'] and \
			dMatch['opponent'] != sesh['thrower']['_id']) or \
			dMatch['finished']:
			return Services.Effect(error=1000)

		# Else, attempt to delete the record
		Match.deleteGet(data['id'])

		# Notify anyone watching the match
		Sync.push('natf', 'match-%s' % data['id'], {
			"type": "deleted"
		})

		# Return OK
		return Services.Effect(True)

	def match_read(self, data, sesh):
		"""Match (Read)

		Fetches and returns the stats from an existing match

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the match
		dMatch = Match.get(data['id'], raw=True)
		if not dMatch:
			return Services.Effect(error=(1104, 'natf_match:%s' % data['id']))

		# Get the aliases of both throwers
		oEffect = Services.read('auth', 'thrower/aliases', {
			"_internal_": Services.internalKey(),
			"ids": [dMatch['opponent'], dMatch['initiator']]
		})
		if oEffect.errorExists():
			return oEffect

		# Add the aliases
		dMatch['initiator_alias'] = oEffect.data[dMatch['initiator']]
		dMatch['opponent_alias'] = oEffect.data[dMatch['opponent']]

		# Else return the match
		return Services.Effect(dMatch)

	def matchBigaxePoints_update(self, data, sesh):
		"""Match Big Axe Points

		Takes a new throw for points and records it, then notifies the opponent

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id', 'throw', 'clutch', 'value'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# If the throw is not an int
		if not isinstance(data['throw'], int):
			return Services.Effect(error=(1001, [('throw', 'not an int')]))

		# If the clutch is not a bool
		if not isinstance(data['clutch'], bool):
			return Services.Effect(error=(1001, [('clutch', 'not a bool')]))

		# If clutch is true but we didn't get 'd', 0, or 7
		if data['clutch']:
			if data['value'] not in ['d', 0, 7]:
				return Services.Effect(error=(1001, [('value', 'invalid')]))

		# Get the match
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent', 'bigaxe'])
		if not dMatch:
			return Services.Effect(error=(1104, 'natf_match:%s' % data['id']))

		# If the match is already finished
		if dMatch['finished']:
			return Services.Effect(error=1002)

		# Is the thrower the initiator or the opponent?
		if sesh['thrower']['_id'] == dMatch['initiator']:
			sIs = 'i'
		elif sesh['thrower']['_id'] == dMatch['opponent']:
			sIs = 'o'
		else:
			return Services.Effect(error=1000)

		# If the thrower already marked the section as finished
		if dMatch['bigaxe']['points']['finished'][sIs]:
			return Services.Effect(error=1002)

		# If the value doesn't exist
		if len(dMatch['bigaxe']['points'][sIs]) == data['throw']:
			dMatch['bigaxe']['points'][sIs].append({"clutch": data['clutch'], "value": data['value']})

		# Else, overwrite it
		else:
			dMatch['bigaxe']['points'][sIs][data['throw']] = {"clutch": data['clutch'], "value": data['value']}

		# Store the changes
		Match.updateBigAxe(
			'points',
			data['id'],
			sIs,
			dMatch['bigaxe']['points'],
		)

		# Notify anyone listening
		Sync.push('natf', 'match-%s' % data['id'], {
			"type": "bigaxe_points",
			"subtype": "throw",
			"thrower": sIs,
			"throw": data['throw'],
			"clutch": data['clutch'],
			"value": data['value']
		})

		# Return OK
		return Services.Effect(True)

	def matchBigaxeTarget_update(self, data, sesh):
		"""Match Big Axe Target

		Takes a new throw for in the pain and records it, then notifies the
		opponent

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id', 'throw', 'value'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# If the throw is not an int
		if not isinstance(data['throw'], int):
			return Services.Effect(error=(1001, [('throw', 'not an int')]))

		# If the value is anything other than 'd', 0, or 1
		if data['value'] not in ['d', 0, 1]:
			return Services.Effect(error=(1001, [('value', 'invalid')]))

		# Get the match
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent', 'bigaxe'])
		if not dMatch:
			return Services.Effect(error=(1104, 'natf_match:%s' % data['id']))

		# If the match is already finished
		if dMatch['finished']:
			return Services.Effect(error=1002)

		# Is the thrower the initiator or the opponent?
		if sesh['thrower']['_id'] == dMatch['initiator']:
			sIs = 'i'
		elif sesh['thrower']['_id'] == dMatch['opponent']:
			sIs = 'o'
		else:
			return Services.Effect(error=1000)

		# If the thrower already marked the section as finished
		if dMatch['bigaxe']['target']['finished'][sIs]:
			return Services.Effect(error=1002)

		# If the value doesn't exist
		if len(dMatch['bigaxe']['target'][sIs]) == data['throw']:
			dMatch['bigaxe']['target'][sIs].append(data['value'])

		# Else, overwrite it
		else:
			dMatch['bigaxe']['target'][sIs][data['throw']] = data['value'];

		# Store the changes
		Match.updateBigAxe(
			'target',
			data['id'],
			sIs,
			dMatch['bigaxe']['target']
		)

		# Notify anyone listening
		Sync.push('natf', 'match-%s' % data['id'], {
			"type": "bigaxe_target",
			"subtype": "throw",
			"thrower": sIs,
			"throw": data['throw'],
			"value": data['value']
		})

		# Return OK
		return Services.Effect(True)

	def matchFinishBigaxePoints_update(self, data, sesh):
		"""Match Finish Big Axe Points

		Marks the points part of big axe as finished. If both throwers are
		finished, verifies and notifies if the game is over.

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Get the match
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent', 'bigaxe'])
		if not dMatch:
			return Services.Effect(error=(1104, 'natf_match:%s' % data['id']))

		# If the match is already finished
		if dMatch['finished']:
			return Services.Effect(error=1002)

		# Is the thrower the initiator or the opponent?
		if sesh['thrower']['_id'] == dMatch['initiator']:
			sIs = 'i'
		elif sesh['thrower']['_id'] == dMatch['opponent']:
			sIs = 'o'
		else:
			return Services.Effect(error=1000)

		# If the thrower already marked the match as finished
		if dMatch['bigaxe']['points']['finished'][sIs]:
			return Services.Effect(True)

		# Update the finished state
		Match.finishBigAxe('points', data['id'], sIs)

		# Fetch the updated data
		dMatch = Match.get(data['id'], raw=['bigaxe'])

		# If both sides are done
		if dMatch['bigaxe']['points']['finished'] == {'i': True, 'o': True}:

			# If the lengths don't match
			if len(dMatch['bigaxe']['points']['i']) != len(dMatch['bigaxe']['points']['o']):

				# Reset finished
				Match.finishBigAxeReset('points', data['id'])

				# Notify throwers we aren't finished
				Sync.push('natf', 'match-%s' % data['id'], {
					"type": "bigaxe_points",
					"subtype": "notfinished"
				})

				# Return failure
				return Services.Effect(False)

			# Count up until we have a clear winner or loser
			for i in range(len(dMatch['bigaxe']['points']['i'])):

				# If we got a drop, consider it a zero
				if dMatch['bigaxe']['points']['i'][i]['value'] == 'd':
					dMatch['bigaxe']['points']['i'][i]['value'] = 0
				if dMatch['bigaxe']['points']['o'][i]['value'] == 'd':
					dMatch['bigaxe']['points']['o'][i]['value'] = 0

				# If they aren't the same
				if dMatch['bigaxe']['points']['i'][i]['value'] != dMatch['bigaxe']['points']['o'][i]['value']:

					# Mark as finished
					Match.finished(data['id'])

					# Notify throwers
					Sync.push('natf', 'match-%s' % data['id'], {
						"type": "winner",
						"is": dMatch['bigaxe']['points']['i'][i]['value'] > dMatch['bigaxe']['points']['o'][i]['value'] and 'i' or 'o'
					})

					# Break out of the loop
					break;

			# If we didn't get a winner, something is wrong
			else:

				# Reset finished
				Match.finishBigAxeReset('points', data['id'])

				# Notify throwers we aren't finished
				Sync.push('natf', 'match-%s' % data['id'], {
					"type": "bigaxe_points",
					"subtype": "notfinished"
				})

				# Return failure
				return Services.Effect(False)

		# Return OK
		return Services.Effect(True)

	def matchFinishBigaxeTarget_update(self, data, sesh):
		"""Match Finish Big Axe Target

		Marks the target part of big axe as finished. If both throwers are
		finished, verifies and notifies if the game is over or points should
		start

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Get the match
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent', 'bigaxe'])
		if not dMatch:
			return Services.Effect(error=(1104, 'natf_match:%s' % data['id']))

		# If the match is already finished
		if dMatch['finished']:
			return Services.Effect(error=1002)

		# Is the thrower the initiator or the opponent?
		if sesh['thrower']['_id'] == dMatch['initiator']:
			sIs = 'i'
		elif sesh['thrower']['_id'] == dMatch['opponent']:
			sIs = 'o'
		else:
			return Services.Effect(error=1000)

		# If the thrower already marked the match as finished
		if dMatch['bigaxe']['target']['finished'][sIs]:
			return Services.Effect(True)

		# Update the finished state
		Match.finishBigAxe('target', data['id'], sIs)

		# Fetch the updated data
		dMatch = Match.get(data['id'], raw=['bigaxe'])

		# If both sides are done
		if dMatch['bigaxe']['target']['finished'] == {'i': True, 'o': True}:

			# If the lengths don't match
			if len(dMatch['bigaxe']['target']['i']) != len(dMatch['bigaxe']['target']['o']):

				# Reset finished
				Match.finishBigAxeReset('target', data['id'])

				# Notify throwers we aren't finished
				Sync.push('natf', 'match-%s' % data['id'], {
					"type": "bigaxe_target",
					"subtype": "notfinished"
				})

				# Return failure
				return Services.Effect(False)

			# Init the consecutive successes
			iCons = 0

			# Count up until we have a clear winner or loser
			for i in range(len(dMatch['bigaxe']['target']['i'])):

				# If both are 0 or drops
				if (dMatch['bigaxe']['target']['i'][i] == 0 or \
					dMatch['bigaxe']['target']['i'][i] == 'd') and \
					(dMatch['bigaxe']['target']['o'][i] == 0 or \
					dMatch['bigaxe']['target']['o'][i] == 'd'):

					# Reset the consecutive and continue
					iCons = 0

				# If they're both 1
				elif dMatch['bigaxe']['target']['i'][i] == 1 and \
					dMatch['bigaxe']['target']['o'][i] == 1:

					# Increase the consecutive successes
					iCons += 1

					# If it's hit 3
					if iCons == 3:

						# Add the section
						Match.addBigAxe("points", data['id'])

						# Notify that we're going to points
						Sync.push('natf', 'match-%s' % data['id'], {
							"type": "bigaxe_points",
							"subtype": "start"
						})

						# Break out of the loop
						break

				# Else we have a winner
				else:

					# Mark as finished
					Match.finished(data['id'])

					# Notify throwers
					Sync.push('natf', 'match-%s' % data['id'], {
						"type": "winner",
						"is": dMatch['bigaxe']['target']['i'][i] == 1 and 'i' or 'o'
					})

					# Break out of the loop
					break

			# If we didn't get a winner or a jump to points, something is wrong
			else:

				# Reset finished
				Match.finishBigAxeReset('target', data['id'])

				# Notify throwers we aren't finished
				Sync.push('natf', 'match-%s' % data['id'], {
					"type": "bigaxe_target",
					"subtype": "notfinished"
				})

				# Return failure
				return Services.Effect(False)

		# Return OK
		return Services.Effect(True)

	def matchFinishGames_update(self, data, sesh):
		"""Match Finish Games

		Marks all games as finished. If both throwers are finished, calculates
		if there's a winner or it's a tie

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Get the match
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent', 'games_finished'])
		if not dMatch:
			return Services.Effect(error=(1104, 'natf_match:%s' % data['id']))

		# If the match is already finished
		if dMatch['finished']:
			return Services.Effect(error=1002)

		# Is the thrower the initiator or the opponent?
		if sesh['thrower']['_id'] == dMatch['initiator']:
			sIs = 'i'
		elif sesh['thrower']['_id'] == dMatch['opponent']:
			sIs = 'o'
		else:
			return Services.Effect(error=1000)

		# If the thrower already marked the match as finished
		if dMatch['games_finished'][sIs]:
			return Services.Effect(True)

		# Update the finished state
		Match.finishGames(data['id'], sIs)

		# Fetch the updated data
		dMatch = Match.get(data['id'], raw=['games', 'games_finished'])

		# If both sides are done
		if dMatch['games_finished'] == {'i': True, 'o': True}:

			# Init the games won
			dWon = {"i": 0, "o": 0}

			# Calculate the stats
			for g in ["1", "2", "3"]:
				dPoints = {"i": 0, "o": 0}
				for w in ["i", "o"]:
					for t in ["1", "2", "3", "4", "5"]:
						if t == '5':
							if dMatch['games'][g][w][t]['value'] != 'd':
								dPoints[w] += dMatch['games'][g][w][t]['value']
						else:
							if dMatch['games'][g][w][t] != 'd':
								dPoints[w] += dMatch['games'][g][w][t]
				if dPoints['i'] > dPoints['o']:
					dWon['i'] += 1
				elif dPoints['i'] < dPoints['o']:
					dWon['o'] += 1

			# If we don't have a winner
			if dWon['i'] == dWon['o']:

				# Add the bigaxe section
				Match.addBigAxe("target", data['id'])

				# Start big axe mode
				Sync.push('natf', 'match-%s' % data['id'], {
					"type": "bigaxe_target",
					"subtype": "start"
				})

			# Else, send back the winner
			else:

				# Mark as finished
				Match.finished(data['id'])

				# Notify the throwers
				Sync.push('natf', 'match-%s' % data['id'], {
					"type": "winner",
					"is": dWon['i'] > dWon['o'] and 'i' or 'o'
				})

		# Return OK
		return Services.Effect(True)

	def matchGame_update(self, data, sesh):
		"""Match Game Update

		Takes a new throw value and stores it, then notifies the opponent

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id', 'game', 'throw', 'value'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Get the match
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent', 'games_finished'])
		if not dMatch:
			return Services.Effect(error=(1104, 'natf_match:%s' % data['id']))

		# If the match is already finished
		if dMatch['finished']:
			return Services.Effect(error=1002)

		# Is the thrower the initiator or the opponent?
		if sesh['thrower']['_id'] == dMatch['initiator']:
			sIs = 'i'
		elif sesh['thrower']['_id'] == dMatch['opponent']:
			sIs = 'o'
		else:
			return Services.Effect(error=1000)

		# If the thrower already marked the match as finished
		if dMatch['games_finished'][sIs]:
			return Services.Effect(error=1002)

		# If the game is not a valid value
		if data['game'] not in ['1', '2', '3']:
			return Service.Effect(error=(1001, [('game', 'not 1 to 3')]))

		# If the throw is not a valid value
		if data['throw'] not in ['1', '2', '3', '4', '5']:
			return Services.Effect(error=(1001, [('throw', 'not 1 to 5')]))

		# Validate the value
		dStruct = Match.struct()
		if not dStruct['tree']['games'].child()[sIs][data['throw']].valid(data['value']):
			return Services.Effect(error=(1001, [('value', 'invalid data.value')]))

		# If it's throw 5, and clutch is set, but we didn't get 'd', 0, or 7
		if data['throw'] == '5':
			if data['value']['clutch']:
				if data['value']['value'] not in ['d', 0, 7]:
					return Services.Effect(error=(1001, [('value', 'invalid data.value.value')]))

		# Update the throw
		Match.updateThrow(data['id'], data['game'], sIs, data['throw'], data['value'])

		# Notify anyone listening
		Sync.push('natf', 'match-%s' % data['id'], {
			"type": "games_throw",
			"game": data['game'],
			"thrower": sIs,
			"throw": data['throw'],
			"value": data['value']
		})

		# Return OK
		return Services.Effect(True)

	def matchStats_read(self, data, sesh):
		"""Match Stats

		Fetches the total stats for all NATF matches

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# If the thrower is not passed, assume the logged in thrower
		if 'thrower' not in data:
			data['thrower'] = sesh['thrower']['_id']

		# Fetch the total stats for the thrower and return them
		return Services.Effect(
			MatchStats.get(data['thrower'], raw=True)
		)

	def matchUnfinished_read(self, data, sesh):
		"""Match Unfinished

		Returns any unfinished matches the thrower is involved in

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Find all unfinished matches the thrower is involved in
		lMatches = Match.unfinished(sesh['thrower']['_id'])

		# If there's none
		if not lMatches:
			return Services.Effect([])

		# Get the other throwers
		lThrowers = []
		for d in lMatches:
			lThrowers.append(
				d['initiator'] == sesh['thrower']['_id'] and d['opponent'] or d['initiator']
			)

		# If there's any throwers
		dAliases = {}
		if lThrowers:
			oEffect = Services.read('auth', 'thrower/aliases', {
				"_internal_": Services.internalKey(),
				"ids": list(set(lThrowers))
			})
			if oEffect.errorExists():
				return oEffect
			dAliases = oEffect.data

		# Add the aliases to each record
		for d in lMatches:
			s = d['initiator'] == sesh['thrower']['_id'] and d['opponent'] or d['initiator']
			d['alias'] = s in dAliases and dAliases[s] or 'N/A'

		# Return the matches
		return Services.Effect(lMatches)

	def practice_create(self, data, sesh):
		"""Practice Create

		Stores the details of a practice session

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['points'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Make sure the value is a list of data points
		if not isinstance(data['points'], list):
			return Services.Effect(error=(1001, [('points', 'must be a list')]))

		# Init the stored structure
		dData = {
			"_created": int(time()),
			"_version": 2,
			"data": [],
			"thrower": sesh['thrower']['_id'],
			"stats": {
				"bigaxe": {
					"clutches": {
						"attempts": 0,
						"drops": 0,
						"hits": 0,
						"points": 0
					},
					"regular": {
						"attempts": 0,
						"fives": 0,
						"threes": 0,
						"ones": 0,
						"zeros": 0,
						"drops": 0,
						"hits": 0,
						"points": 0
					}
				},
				"standard": {
					"clutches": {
						"attempts": 0,
						"drops": 0,
						"hits": 0,
						"points": 0
					},
					"regular": {
						"attempts": 0,
						"fives": 0,
						"threes": 0,
						"ones": 0,
						"zeros": 0,
						"drops": 0,
						"hits": 0,
						"points": 0
					}
				},
			}
		}

		# Go through every set
		for l in data['points']:

			# If it's a big axe
			name = l[0] and 'bigaxe' or 'standard'

			# If it's a clutch
			if l[1]:

				# Increase the attempts
				dData['stats'][name]['clutches']['attempts'] += 1

				# If it's a drop
				if l[2] == 'd':
					dData['stats'][name]['clutches']['drops'] += 1

				# If it's a hit
				elif l[2] == 7:
					dData['stats'][name]['clutches']['hits'] += 1
					dData['stats'][name]['clutches']['points'] += 7

			# Else it's a standard throw
			else:

				# Increase the attempts
				dData['stats'][name]['regular']['attempts'] += 1

				# Increase the appropriate value
				if l[2] == 'd':
					dData['stats'][name]['regular']['drops'] += 1
				elif l[2] == 5:
					dData['stats'][name]['regular']['fives'] += 1
					dData['stats'][name]['regular']['hits'] += 1
					dData['stats'][name]['regular']['points'] += 5
				elif l[2] == 3:
					dData['stats'][name]['regular']['threes'] += 1
					dData['stats'][name]['regular']['hits'] += 1
					dData['stats'][name]['regular']['points'] += 3
				elif l[2] == 1:
					dData['stats'][name]['regular']['ones'] += 1
					dData['stats'][name]['regular']['hits'] += 1
					dData['stats'][name]['regular']['points'] += 1
				elif l[2] == 0:
					dData['stats'][name]['regular']['zeros'] += 1

			# Append the set
			dData['data'].append({
				"bigaxe": l[0],
				"clutch": l[1],
				"value": l[2]
			})

		# Create a new instance of the practice
		try:
			oPractice = Practice(dData)
		except ValueError as e:
			return Services.Effect(error=(1001, e.args[0]))

		# Store the instance
		if not oPractice.create():
			return Services.Effect(error=1100)

		# Update the total stats
		PracticeStats.add(sesh['thrower']['_id'], dData['stats'])

		# Return OK
		return Services.Effect(True)

	def practiceData_read(self, data, sesh):
		"""Practice Data

		Returns all the data points associated with a practice session

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Fetch the practice data
		dPractice = Practice.get(data['id'], raw=['data', 'stats'])
		if not dPractice:
			return Services.Effect(error=(1104, data['id']))

		# Return the data
		return Services.Effect(dPractice)

	def practiceStats_read(self, data, sesh):
		"""Practice Stats

		Fetches the total stats for all NATF practices

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# If the thrower is not passed, assume the logged in thrower
		if 'thrower' not in data:
			data['thrower'] = sesh['thrower']['_id']

		# Fetch the ids and created dates of all practices
		lPractices = Practice.get(data['thrower'], index='thrower', raw=['_id', '_created'], orderby='!_created')

		# Fetch the overall stats
		dOverall = PracticeStats.get(data['thrower'], raw=True)

		# Return both
		return Services.Effect({
			"overall": dOverall,
			"practices": lPractices
		})
