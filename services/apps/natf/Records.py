# coding=utf8
""" NATF Records

Handles the record structures for the natf service
"""

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2019-03-24"

# Pip imports
from FormatOC import Tree
from RestOC import Conf, Record_ReDB

# Match structure and config
_mdMatchConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/natf/match.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# MatchStats structure and config
_mdMatchStatsConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/natf/match_stats.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# Practice structure and config
_mdPracticeConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/natf/practice.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# PracticeStats structure and config
_mdPracticeStatsConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/natf/practice_stats.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

class Match(Record_ReDB.Record):
	"""Match

	Represents a match

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdMatchConf

	@classmethod
	def addBigAxe(cls, _type, _id):
		"""Add Big Axe

		Adds a section to the existing match

		Arguments:

			_type {str} -- The type of section to add, either 'points' or
							'target'
			_id {str} -- The UUID of the match

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to add the big axe section
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"bigaxe": {
							_type: {
								"finished": {"i": False, "o": False},
								"i": [],
								"o": []
							}
						}
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	@classmethod
	def calculated(cls, _id, state=True):
		"""Calculated

		Marks the match as calculated

		Arguments:
			_id {str} -- The UUID of the match
			state {bool} -- The value to set finished to

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to update the games_finished field
			#	atomically
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"calculated": state
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	def calculateStats(self, _is):
		"""Calculate Stats

		Calculates the stats for either the initiator or the opponent and
		returns them

		Arguments:
			_is {str} -- The thrower, either 'i' or 'o'

		Returns:
			dict
		"""

		# Init the stats
		dStats = {
			"matches": 1,
			"points": 0,
			"wins": 0, "losses": 0,
			"eightyones": 0, "supernaturals": 0, "naturals": 0, "unnaturals": 0,
			"clutches": {"attempts": 0, "drops": 0, "hits": 0},
			"regular": {"attempts": 0, "drops": 0, "fives": 0, "threes": 0, "ones": 0, "zeros": 0},
			"bigaxe": {
				"matches": 0,
				"wins": 0, "losses": 0,
				"paint": {"attempts": 0, "drops": 0, "hits": 0},
				"points": {
					"clutches": {"attempts": 0, "drops": 0, "hits": 0},
					"regular": {"attempts": 0, "drops": 0, "fives": 0, "threes": 0, "ones": 0, "zeros": 0}
				}
			}
		}

		# Opponent is opposite of _is
		sO = (_is == 'i' and 'o' or 'i')

		# Init the game wins
		dWins = {'i': 0, 'o': 0}

		# Go through each game
		for g in ['1', '2', '3']:

			# Init the points for this game
			dPoints = {"i": 0, "o": 0}

			# Go through each throw from 1 to 4
			for t in ['1', '2', '3', '4']:

				# Add the points
				if self._dRecord['games'][g]['i'][t] != 'd':
					dPoints['i'] += self._dRecord['games'][g]['i'][t]
				if self._dRecord['games'][g]['o'][t] != 'd':
					dPoints['o'] += self._dRecord['games'][g]['o'][t]

				# Increase the attempts
				dStats['regular']['attempts'] += 1

				# Increase the type of throw
				if self._dRecord['games'][g][_is][t] == 'd':
					dStats['regular']['drops'] += 1
				elif self._dRecord['games'][g][_is][t] == 5:
					dStats['regular']['fives'] += 1
				elif self._dRecord['games'][g][_is][t] == 3:
					dStats['regular']['threes'] += 1
				elif self._dRecord['games'][g][_is][t] == 1:
					dStats['regular']['ones'] += 1
				elif self._dRecord['games'][g][_is][t] == 0:
					dStats['regular']['zeros'] += 1

			# Add the points for throw 5
			if self._dRecord['games'][g]['i']['5']['value'] != 'd':
				dPoints['i'] += self._dRecord['games'][g]['i']['5']['value']
			if self._dRecord['games'][g]['o']['5']['value'] != 'd':
				dPoints['o'] += self._dRecord['games'][g]['o']['5']['value']

			# If it's a clutch
			if self._dRecord['games'][g][_is]['5']['clutch']:
				dStats['clutches']['attempts'] += 1

				# If it's a drop
				if self._dRecord['games'][g][_is]['5']['value'] == 'd':
					dStats['clutches']['drops'] += 1

				# Else if it's a 7
				elif self._dRecord['games'][g][_is]['5']['value'] == 7:
					dStats['clutches']['hits'] += 1

			# Else it's a regular throw
			else:
				dStats['regular']['attempts'] += 1

				# Increase the type of throw
				if self._dRecord['games'][g][_is]['5']['value'] == 'd':
					dStats['regular']['drops'] += 1
				elif self._dRecord['games'][g][_is]['5']['value'] == 5:
					dStats['regular']['fives'] += 1
				elif self._dRecord['games'][g][_is]['5']['value'] == 3:
					dStats['regular']['threes'] += 1
				elif self._dRecord['games'][g][_is]['5']['value'] == 1:
					dStats['regular']['ones'] += 1
				elif self._dRecord['games'][g][_is]['5']['value'] == 0:
					dStats['regular']['zeros'] += 1

			# If the points are 27
			if dPoints[_is] == 27:
				dStats['supernaturals'] += 1

			# Else if the points are 25
			elif dPoints[_is] == 25:

				# If we got a clutch
				if self._dRecord['games'][g][_is]['5']['clutch']:
					dStats['unnaturals'] += 1
				else:
					dStats['naturals'] += 1

			# Add the points
			dStats['points'] += dPoints[_is]

			# Add to the winner (if there is one)
			if dPoints['i'] > dPoints['o']:
				dWins['i'] += 1
			elif dPoints['i'] < dPoints['o']:
				dWins['o'] += 1

		# If we got 81 points
		if dStats['points'] == 81:
			dStats['eightyones'] = 1

		# If the thrower won
		if dWins[_is] > dWins[sO]:
			dStats['wins'] += 1

		# Else if the thrower lost
		elif dWins[_is] < dWins[sO]:
			dStats['losses'] +=1

		# Else, go to big axe
		else:

			# Increase the bigaxe matches played
			dStats['bigaxe']['matches'] += 1

			# Init the points per thrower
			dPoints = {'i': 0, 'o': 0}

			# Go through every target (paint) throw
			for i in range(len(self._dRecord['bigaxe']['target'][_is])):

				# Update the points
				if self._dRecord['bigaxe']['target']['i'][i] == 1:
					dPoints['i'] += 1
				if self._dRecord['bigaxe']['target']['o'][i] == 1:
					dPoints['o'] += 1

				# Increase attempts
				dStats['bigaxe']['paint']['attempts'] += 1

				# If we got a drop
				if self._dRecord['bigaxe']['target'][_is][i] == 'd':
					dStats['bigaxe']['paint']['drops'] += 1

				# If we got a hit
				if self._dRecord['bigaxe']['target'][_is][i] == 1:
					dStats['bigaxe']['paint']['hits'] += 1

			# If the thrower won
			if dPoints[_is] > dPoints[sO]:
				dStats['wins'] += 1
				dStats['bigaxe']['wins'] += 1

			# If the thrower lost
			elif dPoints[_is] < dPoints[sO]:
				dStats['losses'] += 1
				dStats['bigaxe']['losses'] += 1

			# Else, no winner yet, check points
			else:

				# Init the points per thrower
				dPoints = {'i': 0, 'o': 0}

				# Go through every points throw
				for i in range(len(self._dRecord['bigaxe']['points'][_is])):

					# Update the points
					if self._dRecord['bigaxe']['points']['i'][i]['value'] != 'd':
						dPoints['i'] += self._dRecord['bigaxe']['points']['i'][i]['value']
					if self._dRecord['bigaxe']['points']['o'][i]['value'] != 'd':
						dPoints['o'] += self._dRecord['bigaxe']['points']['o'][i]['value']

					# If it's a clutch
					if self._dRecord['bigaxe']['points'][_is][i]['clutch']:

						# Increase attempts
						dStats['bigaxe']['points']['clutches']['attempts'] += 1

						# If it's a drop
						if self._dRecord['bigaxe']['points'][_is][i]['value'] == 'd':
							dStats['bigaxe']['points']['clutches']['drops'] += 1

						# If it's a hit
						if self._dRecord['bigaxe']['points'][_is][i]['value'] == 7:
							dStats['bigaxe']['points']['clutches']['hits'] += 1

					# Else it's a regular throw
					else:

						# Increase attempts
						dStats['bigaxe']['points']['regular']['attempts'] += 1

						# Increase the type of throw
						if self._dRecord['bigaxe']['points'][_is][i]['value'] == 'd':
							dStats['bigaxe']['points']['regular']['drops'] += 1
						elif self._dRecord['bigaxe']['points'][_is][i]['value'] == 5:
							dStats['bigaxe']['points']['regular']['fives'] += 1
						elif self._dRecord['bigaxe']['points'][_is][i]['value'] == 3:
							dStats['bigaxe']['points']['regular']['threes'] += 1
						elif self._dRecord['bigaxe']['points'][_is][i]['value'] == 1:
							dStats['bigaxe']['points']['regular']['ones'] += 1
						elif self._dRecord['bigaxe']['points'][_is][i]['value'] == 0:
							dStats['bigaxe']['points']['regular']['zeros'] += 1

				# Who won?
				if dPoints[_is] > dPoints[sO]:
					dStats['wins'] += 1
					dStats['bigaxe']['wins'] += 1
				elif dPoints[_is] < dPoints[sO]:
					dStats['losses'] += 1
					dStats['bigaxe']['losses'] += 1

		# Return the calculated stats
		return dStats

	@classmethod
	def finishBigAxe(cls, _type, _id, _is):
		"""Finish Big Axe

		Updates the bigaxe.[_type].finished int by ORing with the flag passed

		Arguments:
			_type {str} -- The type to finish, 'points' or 'target'
			_id {str} -- The UUID of the match
			_is {str} -- The thrower, either 'i' or 'o'

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to update the big axe finished field
			#	atomically
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"bigaxe": {
							_type: {
								"finished": {
									_is: True
								}
							}
						}
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	@classmethod
	def finishBigAxeReset(cls, _type, _id):
		"""Finish Big Axe reset

		Updates the bigaxe.[_type].finished int to zero

		Arguments:
			_type {str} -- The type to reset, 'points' or 'target'
			_id {str} -- The UUID of the match

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to update the games_finished field
			#	atomically
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"bigaxe": {
							_type: {
								"finished": {
									"i": False,
									"o": False
								}
							}
						}
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	@classmethod
	def finished(cls, _id, state=True):
		"""Finished

		Marks a match as finished and thus unchangeable

		Arguments:
			_id {str} -- The UUID of the match
			state {bool} -- The value to set finished to

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to update the games_finished field
			#	atomically
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"finished": state
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	@classmethod
	def finishGames(cls, _id, _is):
		"""Finish Games

		Updates the games_finished int by ORing with the flag passed

		Arguments:
			_id {str} -- The UUID of the match
			_is {str} -- The thrower, either 'i' or 'o'

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to update the games_finished field
			#	atomically
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"games_finished": {
							_is: True
						}
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	@classmethod
	def unfinished(cls, thrower):
		"""Unfinished

		Fetches all unfinished (`finished` = False) matches where thrower is
		initiator or opponent

		Arguments:
			thrower {str} -- The UUID of the thrower

		Returns:
			list
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to find all unfinished matches and
			#	then filter them by thrower
			itRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get_all(False, index='finished') \
					.filter((Record_ReDB.r.row['initiator'] == thrower) | \
						(Record_ReDB.r.row['opponent'] == thrower)) \
					.pluck('_id', 'initiator', 'opponent') \
					.default(None) \
					.run(oCon)

			# Return the records found
			return [d for d in itRes]

	@classmethod
	def updateBigAxe(cls, _type, _id, _is, data):
		"""Update Big Axe

		Updates or adds a target/points throw to the big axe section

		Arguments:
			_type {str} -- The type to update, 'points' or 'target'
			_id {str} -- The UUID of the match
			_is {str} -- The thrower to update, i or o
			data {dict} -- The current data in the big axe section for the type

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to update the games_finished field
			#	atomically
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"bigaxe": {
							_type: {
								"finished": {"i": False, "o": False},
								_is: data[_is]
							}
						}
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	@classmethod
	def updateThrow(cls, _id, game, _is, throw, value):
		"""Update Throw

		Updates a single data point in the game record

		Arguments:
			_id {str} -- The UUID of the match to update
			game {str} -- The game within the match to update
			_is {str} -- The thrower to update, i or o
			throw {str} -- The throw to update, 1 to 5
			value {mixed} -- The value to set for the throw

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query to update the throw
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({"games": {
						game: {
							_is: {
								throw: value
							}
						}
					}}) \
					.run(oCon)

			# Return true if something was updated
			return dRes['replaced'] == 1

class MatchStats(Record_ReDB.Record):
	"""Match Stats

	Represents stats for all a thrower's matches

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def add(cls, thrower, stats):
		"""Add

		Adds stats from a match to the totals in this table

		Arguments:
			thrower {str} -- The UUID of the thrower
			stats {dict} -- The stats to add to the existing stats

		Returns:
			bool
		"""

		# Add the thrower to the stats
		stats['_thrower'] = thrower

		# Get the structure
		dStruct = cls.struct()

		# Simplify
		r = Record_ReDB.r

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Up to the table
			t = r.db(dStruct['db']).table(dStruct['table'])

			# Generate the rethink query
			dRes = r.branch(
				t.get(thrower).ne(None),
				t.get(thrower).update({
					"matches": r.row['matches'] + stats['matches'],
					"points": r.row['points'] + stats['points'],
					"wins": r.row['wins'] + stats['wins'],
					"losses": r.row['losses'] + stats['losses'],
					"eightyones": r.row['eightyones'] + stats['eightyones'],
					"supernaturals": r.row['supernaturals'] + stats['supernaturals'],
					"naturals": r.row['naturals'] + stats['naturals'],
					"unnaturals": r.row['unnaturals'] + stats['unnaturals'],
					"clutches": {
						"attempts": r.row['clutches']['attempts'] + stats['clutches']['attempts'],
						"drops": r.row['clutches']['drops'] + stats['clutches']['drops'],
						"hits": r.row['clutches']['hits'] + stats['clutches']['hits']
					},
					"regular": {
						"attempts": r.row['regular']['attempts'] + stats['regular']['attempts'],
						"drops": r.row['regular']['drops'] + stats['regular']['drops'],
						"fives": r.row['regular']['fives'] + stats['regular']['fives'],
						"threes": r.row['regular']['threes'] + stats['regular']['threes'],
						"ones": r.row['regular']['ones'] + stats['regular']['ones'],
						"zeros": r.row['regular']['zeros'] + stats['regular']['zeros']
					},
					"bigaxe": {
						"matches": r.row['bigaxe']['matches'] + stats['bigaxe']['matches'],
						"wins": r.row['bigaxe']['wins'] + stats['bigaxe']['wins'],
						"losses": r.row['bigaxe']['losses'] + stats['bigaxe']['losses'],
						"paint": {
							"attempts": r.row['bigaxe']['paint']['attempts'] + stats['bigaxe']['paint']['attempts'],
							"drops": r.row['bigaxe']['paint']['drops'] + stats['bigaxe']['paint']['drops'],
							"hits": r.row['bigaxe']['paint']['hits'] + stats['bigaxe']['paint']['hits']
						},
						"points": {
							"clutches": {
								"attempts": r.row['bigaxe']['points']['clutches']['attempts'] + stats['bigaxe']['points']['clutches']['attempts'],
								"drops": r.row['bigaxe']['points']['clutches']['drops'] + stats['bigaxe']['points']['clutches']['drops'],
								"hits": r.row['bigaxe']['points']['clutches']['hits'] + stats['bigaxe']['points']['clutches']['hits']
							},
							"regular": {
								"attempts": r.row['bigaxe']['points']['regular']['attempts'] + stats['bigaxe']['points']['regular']['attempts'],
								"drops": r.row['bigaxe']['points']['regular']['drops'] + stats['bigaxe']['points']['regular']['drops'],
								"fives": r.row['bigaxe']['points']['regular']['fives'] + stats['bigaxe']['points']['regular']['fives'],
								"threes": r.row['bigaxe']['points']['regular']['threes'] + stats['bigaxe']['points']['regular']['threes'],
								"ones": r.row['bigaxe']['points']['regular']['ones'] + stats['bigaxe']['points']['regular']['ones'],
								"zeros": r.row['bigaxe']['points']['regular']['zeros'] + stats['bigaxe']['points']['regular']['zeros']
							}
						}
					}
				}).run(oCon),
				t.insert(stats).run(oCon)
			)

			# Return true if something was updated
			return dRes['replaced'] == 1 or dRes['inserted'] == 1

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdMatchStatsConf

class Practice(Record_ReDB.Record):
	"""Practice

	Represents a single practice

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdPracticeConf

class PracticeStats(Record_ReDB.Record):
	"""Practice Stats

	Represents practice stats by thrower

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def add(cls, thrower, stats):
		"""Add

		Adds stats from a practice to the totals in this table

		Arguments:
			thrower {str} -- The UUID of the thrower
			stats {dict} -- The stats to add to the existing stats

		Returns:
			bool
		"""

		# Add the version and thrower
		stats['_version'] = 2
		stats['thrower'] = thrower

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Up to the table
			t = Record_ReDB.r.db(dStruct['db']).table(dStruct['table'])

			# Generate the rethink query
			dRes = Record_ReDB.r.branch(
				t.get(thrower).ne(None),
				t.get(thrower).update({
					"bigaxe": {
						"clutches": {
							"attempts": Record_ReDB.r.row['bigaxe']['clutches']['attempts'] + stats['bigaxe']['clutches']['attempts'],
							"drops": Record_ReDB.r.row['bigaxe']['clutches']['drops'] + stats['bigaxe']['clutches']['drops'],
							"hits": Record_ReDB.r.row['bigaxe']['clutches']['hits'] + stats['bigaxe']['clutches']['hits'],
							"points": Record_ReDB.r.row['bigaxe']['clutches']['points'] + stats['bigaxe']['clutches']['points']
						},
						"regular": {
							"attempts": Record_ReDB.r.row['bigaxe']['regular']['attempts'] + stats['bigaxe']['regular']['attempts'],
							"drops": Record_ReDB.r.row['bigaxe']['regular']['drops'] + stats['bigaxe']['regular']['drops'],
							"fives": Record_ReDB.r.row['bigaxe']['regular']['fives'] + stats['bigaxe']['regular']['fives'],
							"threes": Record_ReDB.r.row['bigaxe']['regular']['threes'] + stats['bigaxe']['regular']['threes'],
							"ones": Record_ReDB.r.row['bigaxe']['regular']['ones'] + stats['bigaxe']['regular']['ones'],
							"zeros": Record_ReDB.r.row['bigaxe']['regular']['zeros'] + stats['bigaxe']['regular']['zeros'],
							"hits": Record_ReDB.r.row['bigaxe']['regular']['hits'] + stats['bigaxe']['regular']['hits'],
							"points": Record_ReDB.r.row['bigaxe']['regular']['points'] + stats['bigaxe']['regular']['points']
						}
					},
					"standard": {
						"clutches": {
							"attempts": Record_ReDB.r.row['standard']['clutches']['attempts'] + stats['standard']['clutches']['attempts'],
							"drops": Record_ReDB.r.row['standard']['clutches']['drops'] + stats['standard']['clutches']['drops'],
							"hits": Record_ReDB.r.row['standard']['clutches']['hits'] + stats['standard']['clutches']['hits'],
							"points": Record_ReDB.r.row['standard']['clutches']['points'] + stats['standard']['clutches']['points']
						},
						"regular": {
							"attempts": Record_ReDB.r.row['standard']['regular']['attempts'] + stats['standard']['regular']['attempts'],
							"drops": Record_ReDB.r.row['standard']['regular']['drops'] + stats['standard']['regular']['drops'],
							"fives": Record_ReDB.r.row['standard']['regular']['fives'] + stats['standard']['regular']['fives'],
							"threes": Record_ReDB.r.row['standard']['regular']['threes'] + stats['standard']['regular']['threes'],
							"ones": Record_ReDB.r.row['standard']['regular']['ones'] + stats['standard']['regular']['ones'],
							"zeros": Record_ReDB.r.row['standard']['regular']['zeros'] + stats['standard']['regular']['zeros'],
							"hits": Record_ReDB.r.row['standard']['regular']['hits'] + stats['standard']['regular']['hits'],
							"points": Record_ReDB.r.row['standard']['regular']['points'] + stats['standard']['regular']['points']
						}
					}
				}).run(oCon),
				t.insert(stats).run(oCon)
			)

			# Return true if something was updated
			return dRes['replaced'] == 1 or dRes['inserted'] == 1

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdPracticeStatsConf
