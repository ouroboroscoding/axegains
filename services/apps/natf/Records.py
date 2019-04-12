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
			"eightyone": 0, "supernatural": 0, "natural": 0, "unnatural": 0,
			"clutches": {"attempts": 0, "drops": 0, "hits": 0},
			"regular": {"attempts": 0, "drops": 0, "five": 0, "three": 0, "one": 0, "zero": 0},
			"bigaxe": {
				"matches": 0,
				"wins": 0, "losses": 0,
				"clutches": {"attempts": 0, "drops": 0, "hits": 0},
				"paint": {"attempts": 0, "drops": 0, "hits": 0},
				"points": {"attempts": 0, "drops": 0, "fives": 0, "threes": 0, "ones": 0, "zeros": 0}
			}
		}

		# Opponent is opposite of _is
		sO = _is == 't' and 'o' or 'i'

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

				# Increase the type of throw
				if self._dRecord['games'][g]['i'][t] == 'd':
					dStruct['regular']['drops'] += 1
				elif self._dRecord['games'][g]['i'][t] == 5:
					dStruct['regular']['fives'] += 1
				elif self._dRecord['games'][g]['i'][t] == 3:
					dStruct['regular']['threes'] += 1
				elif self._dRecord['games'][g]['i'][t] == 1:
					dStruct['regular']['ones'] += 1
				elif self._dRecord['games'][g]['i'][t] == 0:
					dStruct['regular']['zeros'] += 1

			# Add the points for throw 5
			if self._dRecord['games'][g]['i']['5'] != 'd':
				dPoints['i'] += self._dRecord['games'][g]['i']['5'].value
			if self._dRecord['games'][g]['o']['5'] != 'd':
				dPoints['o'] += self._dRecord['games'][g]['o']['5'].value

			# If it's a clutch
			if self._dRecord['games'][g]['i']['5'].clutch:
				dStats['clutches']['attempts'] += 1

				# If it's a drop
				if self._dRecord['games'][g]['i']['5'].value == 'd':
					dStats['clutches']['drops'] += 1

				# Else if it's a 7
				elif self._dRecord['games'][g]['i']['5'].value == 7:
					dStats['clutches']['hits'] += 1

			# Else it's a regular throw
			else:
				dStruct['regular']['attempts'] += 1

				# Increase the type of throw
				if self._dRecord['games'][g]['i']['5'] == 'd':
					dStruct['regular']['drops'] += 1
				elif self._dRecord['games'][g]['i']['5'] == 5:
					dStruct['regular']['fives'] += 1
				elif self._dRecord['games'][g]['i']['5'] == 3:
					dStruct['regular']['threes'] += 1
				elif self._dRecord['games'][g]['i']['5'] == 1:
					dStruct['regular']['ones'] += 1
				elif self._dRecord['games'][g]['i']['5'] == 0:
					dStruct['regular']['zeros'] += 1

			# If the points are 27
			if dPoints[_is] == 27:
				dStats['supernaturals'] += 1

			# Else if the points are 25
			elif dPoints[_is] == 25:

				# If we got a clutch
				if self._dRecord['games'][g][_is]['5'].clutch:
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
			dStats['eightyone'] = 1

		# If the thrower won
		if dWins[_is] > dWins[sO]:
			dStats['wins'] += 1

		# Else if the thrower lost
		elif dWins[_is] < dWins[sO]:
			dStats['losses'] +=1

		# Else, go to big axe
		else:
			pass

		return {}

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

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Up to the table
			t = Record_ReDB.r.db(dStruct['db']).table(dStruct['table'])

			# Generate the rethink query
			dRes = Record_ReDB.r.branch(
				t.get(thrower).ne(None),
				t.get(thrower).update().run(oCon),
				t.insert().run(oCon)
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
					"clutches": {
						"attempts": Record_ReDB.r.row['clutches']['attempts'] + stats['clutches']['attempts'],
						"hits": Record_ReDB.r.row['clutches']['hits'] + stats['clutches']['hits']
					},
					"points": {
						"target": Record_ReDB.r.row['points']['target'] + stats['points']['target'],
						"total": Record_ReDB.r.row['points']['total'] + stats['points']['total']
					},
					"throws": {
						"attempts": Record_ReDB.r.row['throws']['attempts'] + stats['throws']['attempts'],
						"drops": Record_ReDB.r.row['throws']['drops'] + stats['throws']['drops'],
						"hits": Record_ReDB.r.row['throws']['hits'] + stats['throws']['hits']
					}
				}).run(oCon),
				t.insert({
					"_thrower": thrower,
					"clutches": {
						"attempts": stats['clutches']['attempts'],
						"hits": stats['clutches']['hits']
					},
					"points": {
						"target": stats['points']['target'],
						"total": stats['points']['total']
					},
					"throws": {
						"attempts": stats['throws']['attempts'],
						"drops": stats['throws']['drops'],
						"hits": stats['throws']['hits']
					}
				}).run(oCon)
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
