# coding=utf8
""" WATL Service

Handles all WATL requests
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
from .Records import Match, MatchStats, Practice, PracticePattern, PracticeStats

class Watl(Services.Service):
	"""WATL Service class

	Service for WATL practices and matches

	Extends: shared.Services.Service
	"""

	_install = [Match, MatchStats, Practice, PracticePattern, PracticeStats]
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
				"game_finished": {"i": False, "o": False},
				"game": {
					"i": {},
					"o": {}
				}
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
		if not dMatch:
			return Services.Effect(error=(1104, 'watl_match:%s' % data['id']))

		# If the thrower is neither the initiator or opponent, or the match is
		#	already marked finished
		if (dMatch['initiator'] != sesh['thrower']['_id'] and \
			dMatch['opponent'] != sesh['thrower']['_id']) or \
			dMatch['finished']:
			return Services.Effect(error=1000)

		# Else, attempt to delete the record
		Match.deleteGet(data['id'])

		# Notify anyone watching the match
		Sync.push('watl', 'match-%s' % data['id'], {
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
			return Services.Effect(error=(1104, 'watl_match:%s' % data['id']))

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

	def matchOvertime_update(self, data, sesh):
		"""Match Overtime

		Takes a new throw for overtime and records it, then notifies the opponent

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
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent', 'overtime'])
		if not dMatch:
			return Services.Effect(error=(1104, 'watl_match:%s' % data['id']))

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
		if dMatch['overtime']['finished'][sIs]:
			return Services.Effect(error=1002)

		# If the value doesn't exist
		if len(dMatch['overtime'][sIs]) == data['throw']:
			dMatch['overtime'][sIs].append(data['value'])

		# Else, overwrite it
		else:
			dMatch['overtime'][sIs][data['throw']] = data['value'];

		# Store the changes
		Match.updateOvertime(
			data['id'],
			sIs,
			dMatch['overtime']
		)

		# Notify anyone listening
		Sync.push('watl', 'match-%s' % data['id'], {
			"type": "overtime",
			"subtype": "throw",
			"thrower": sIs,
			"throw": data['throw'],
			"value": data['value']
		})

		# Return OK
		return Services.Effect(True)

	def matchFinishOvertime_update(self, data, sesh):
		"""Match Finish Overtime

		Marks the overtime part as finished. If both throwers are finished,
		verifies and notifies if the game is over

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
		dMatch = Match.get(data['id'], raw=['finished', 'initiator', 'opponent', 'overtime'])
		if not dMatch:
			return Services.Effect(error=(1104, 'watl_match:%s' % data['id']))

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
		if dMatch['overtime']['finished'][sIs]:
			return Services.Effect(True)

		# Update the finished state
		Match.finishOvertime(data['id'], sIs)

		# Fetch the updated data
		dMatch = Match.get(data['id'], raw=['overtime'])

		# If both sides are done
		if dMatch['overtime']['finished'] == {'i': True, 'o': True}:

			# If the lengths don't match
			if len(dMatch['overtime']['i']) != len(dMatch['overtime']['o']):

				# Reset finished
				Match.finishOvertimeReset(data['id'])

				# Notify throwers we aren't finished
				Sync.push('watl', 'match-%s' % data['id'], {
					"type": "overtime",
					"subtype": "notfinished"
				})

				# Return failure
				return Services.Effect(False)

			# Init the consecutive successes
			iCons = 0

			# Count up until we have a clear winner or loser
			for i in range(len(dMatch['overtime']['i'])):

				# If we got a drop, consider it a zero
				if dMatch['overtime']['i'][i] == 'd':
					dMatch['overtime']['i'][i] = 0
				if dMatch['overtime']['o'][i] == 'd':
					dMatch['overtime']['o'][i] = 0

				# If they aren't the same
				if dMatch['overtime']['i'][i] != dMatch['overtime']['o'][i]:

					# Mark as finished
					Match.finished(data['id'])

					# Notify throwers
					Sync.push('watl', 'match-%s' % data['id'], {
						"type": "winner",
						"is": dMatch['overtime']['i'][i] > dMatch['overtime']['o'][i] and 'i' or 'o'
					})

					# Break out of the loop
					break;

			# If we didn't get a winner, something is wrong
			else:

				# Reset finished
				Match.finishOvertimeReset(data['id'])

				# Notify throwers we aren't finished
				Sync.push('watl', 'match-%s' % data['id'], {
					"type": "overtime",
					"subtype": "notfinished"
				})

				# Return failure
				return Services.Effect(False)

		# Return OK
		return Services.Effect(True)

	def matchFinishGame_update(self, data, sesh):
		"""Match Finish Game

		Marks the game as finished. If both throwers are finished, calculates
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
		dMatch = Match.get(data['id'], raw=['finished', 'game_finished', 'initiator', 'opponent'])
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
		if dMatch['game_finished'][sIs]:
			return Services.Effect(True)

		# Update the finished state
		Match.finishGame(data['id'], sIs)

		# Fetch the updated data
		dMatch = Match.get(data['id'], raw=['game', 'game_finished'])

		# If both sides are done
		if dMatch['game_finished']['i'] and dMatch['game_finished']['o']:

			# Calculate the stats
			dPoints = {"i": 0, "o": 0}
			for w in ["i", "o"]:
				for t in ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]:
					if t in ['5', '10']:
						if dMatch['game'][w][t]['value'] != 'd':
							dPoints[w] += dMatch['game'][w][t]['value']
					else:
						if dMatch['game'][w][t] != 'd':
							dPoints[w] += dMatch['game'][w][t]

			# If we don't have a winner
			if dPoints['i'] == dPoints['o']:

				# Add the overtime section
				Match.addOvertime(data['id'])

				# Start overtime mode
				Sync.push('watl', 'match-%s' % data['id'], {
					"type": "overtime",
					"subtype": "start"
				})

			# Else, send back the winner
			else:

				# Mark as finished
				Match.finished(data['id'])

				# Notify the throwers
				Sync.push('watl', 'match-%s' % data['id'], {
					"type": "winner",
					"is": dPoints['i'] > dPoints['o'] and 'i' or 'o'
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
		try: DictHelper.eval(data, ['id', 'throw', 'value'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Get the match
		dMatch = Match.get(data['id'], raw=['finished', 'game_finished', 'initiator', 'opponent'])
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
		if dMatch['game_finished'][sIs]:
			return Services.Effect(error=1002)

		# If the throw is not a valid value
		if data['throw'] not in ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']:
			return Services.Effect(error=(1001, [('throw', 'invalid')]))

		# Validate the value
		dStruct = Match.struct()
		if not dStruct['tree']['game'][sIs][data['throw']].valid(data['value']):
			return Services.Effect(error=(1001, [('value', 'invalid data.value')]))

		# If it's throw 5, and clutch is set, but we didn't get 'd', 0, or 7
		if data['throw'] in ['5', '10']:
			if data['value']['killshot'] != '0':
				if data['value']['value'] not in ['d', 0, 8]:
					return Services.Effect(error=(1001, [('value', 'invalid data.value.value')]))

		# Update the throw
		Match.updateThrow(data['id'], sIs, data['throw'], data['value'])

		# Notify anyone listening
		Sync.push('watl', 'match-%s' % data['id'], {
			"type": "throw",
			"thrower": sIs,
			"throw": data['throw'],
			"value": data['value']
		})

		# Return OK
		return Services.Effect(True)

	def matchStats_read(self, data, sesh):
		"""Match Stats

		Fetches the total stats for all WATL matches

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
			"data": [],
			"thrower": sesh['thrower']['_id'],
			"stats": {
				"ksLeft": {
					"attempts": 0,
					"drops": 0,
					"hits": 0,
					"points": 0
				},
				"ksRight": {
					"attempts": 0,
					"drops": 0,
					"hits": 0,
					"points": 0
				},
				"regular": {
					"attempts": 0,
					"sixes": 0,
					"fours": 0,
					"threes": 0,
					"twos": 0,
					"ones": 0,
					"zeros": 0,
					"drops": 0,
					"hits": 0,
					"points": 0
				}
			}
		}

		# Go through every set
		for l in data['points']:

			# If it's a killshot
			if l[0] == 'L':

				# Increase the attempts
				dData['stats']['ksLeft']['attempts'] += 1

				# If it's a drop
				if l[1] == 'd':
					dData['stats']['ksLeft']['drops'] += 1

				# If it's a hit
				elif l[1] == 8:
					dData['stats']['ksLeft']['hits'] += 1
					dData['stats']['ksLeft']['points'] += 8

				# Add the points
				else:
					dData['stats']['ksLeft']['points'] += l[1]

			elif l[0] == 'R':

				# Increase the attempts
				dData['stats']['ksRight']['attempts'] += 1

				# If it's a drop
				if l[1] == 'd':
					dData['stats']['ksRight']['drops'] += 1

				# If it's a hit
				elif l[1] == 8:
					dData['stats']['ksRight']['hits'] += 1
					dData['stats']['ksRight']['points'] += 8

				# Add the points
				else:
					dData['stats']['ksRight']['points'] += l[1]

			# Else it's a standard throw
			else:

				# Increase the attempts
				dData['stats']['regular']['attempts'] += 1

				# Increase the appropriate value
				if l[1] == 'd':
					dData['stats']['regular']['drops'] += 1
				elif l[1] == 6:
					dData['stats']['regular']['sixes'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 5
				elif l[1] == 4:
					dData['stats']['regular']['fours'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 5
				elif l[1] == 3:
					dData['stats']['regular']['threes'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 3
				elif l[1] == 2:
					dData['stats']['regular']['twos'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 3
				elif l[1] == 1:
					dData['stats']['regular']['ones'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 1
				elif l[1] == 0:
					dData['stats']['regular']['zeros'] += 1

			# Append the set
			dData['data'].append({
				"killshot": l[0],
				"value": l[1]
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
			return Services.Effect(error=(1104, 'practice:%s' % data['id']))

		# Return the data
		return Services.Effect(dPractice)

	def practicePattern_create(self, data, sesh):
		"""Practice Pattern (Create)

		Creates a new Practice Pattern for the current thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['title', 'descr', 'throws'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Create the instance
		try:
			oPattern = PracticePattern({
				"_created": int(time()),
				"thrower": sesh['thrower']['_id'],
				"title": data['title'],
				"descr": data['descr'],
				"throws": data['throws']
			})
		except ValueError as e:
			return Services.Effect(error=(1001, e.args[0]))

		# Store the instance
		if not oPattern.create():
			return Services.Effect(error=1100)

		# Return the new ID
		return Services.Effect(oPattern['_id'])

	def practicePattern_delete(self, data, sesh):
		"""Practice Pattern (Delete)

		Deletes an existing Practice Pattern for the current thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the pattern
		oPattern = PracticePattern.get(data['id'])
		if not oPattern:
			return Services.Effect(error=(1104, 'practice_pattern:%s' % data['id']))

		# If the user has no rights
		if oPattern['thrower'] != sesh['thrower']['_id']:
			return Services.Effect(error=1000)

		# Delete the pattern
		if not oPattern.delete():
			return Services.Effect(False)

		# Return OK
		return Services.Effect(True)

	def practicePattern_update(self, data, sesh):
		"""Practice Pattern (Update)

		Replaces an existing Practice Pattern for the current thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['_id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the pattern
		oPattern = PracticePattern.get(data['_id'])
		if not oPattern:
			return Services.Effect(error=(1104, 'practice_pattern:%s' % data['_id']))

		# If the user has no rights
		if oPattern['thrower'] != sesh['thrower']['_id']:
			return Services.Effect(error=1000)

		# Remove fields that can't be changed
		del data['_id']
		if '_created' in data: del data['_created']
		if 'thrower' in data: del data['thrower']

		# Update whatever is left, catch any invalid values
		lErrors = []
		for k in data:
			try: oPattern[k] = data[k]
			except ValueError as e: lErrors.extend(e.args[0])

		# If there's any errors
		if lErrors:
			return Services.Effect(error=(103, lErrors))

		# Update the pattern
		oPattern.save()

		# Return OK
		return Services.Effect(True)

	def practicePatterns_read(self, data, sesh):
		"""Practice Patterns

		Fetches the list of patterns beloning to the logged in thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Fetch all patterns for the current thrower and return them
		return Services.Effect(
			PracticePattern.get(sesh['thrower']['_id'], index='thrower', raw=True, orderby='title')
		)

	def practiceStats_read(self, data, sesh):
		"""Practice Stats

		Fetches the total stats for all WATL practices

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

		# Fetch the stats for the last ten practices
		lGraphs = Practice.get(data['thrower'], index='thrower', raw=['_created', 'stats'], orderby='!_created', limit=10)

		# Fetch the overall stats
		dOverall = PracticeStats.get(data['thrower'], raw=True)

		# Return both
		return Services.Effect({
			"graphs": lGraphs,
			"overall": dOverall,
			"practices": lPractices
		})
