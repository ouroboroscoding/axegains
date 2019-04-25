# coding=utf8
""" WATL Records

Handles the record structures for the watl service
"""

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2019-04-18"

# Pip imports
from FormatOC import Tree
from RestOC import Conf, Record_ReDB

# Match structure and config
_mdMatchConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/watl/match.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# MatchStats structure and config
_mdMatchStatsConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/watl/match_stats.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# Practice structure and config
_mdPracticeConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/watl/practice.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# PracticePattern structure and config
_mdPracticePatternConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/watl/practice_pattern.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# PracticeStats structure and config
_mdPracticeStatsConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/watl/practice_stats.json'),
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
	def addOvertime(cls, _type, _id):
		"""Add Overtime

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
						"overtime": {
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
			"sixtyfours": 0,
			"ksLeft": {"attempts": 0, "drops": 0, "hits": 0},
			"ksRight": {"attempts": 0, "drops": 0, "hits": 0},
			"regular": {"attempts": 0, "drops": 0, "sixes": 0, "fours": 0, "threes": 0, "twos": 0, "ones": 0, "zeros": 0},
		}

		# Opponent is opposite of _is
		sO = (_is == 'i' and 'o' or 'i')

		# Init the points for this game
		dPoints = {"i": 0, "o": 0}

		# Go through each throw from 1 to 4
		for t in ['1', '2', '3', '4', '6', '7', '8', '9']:

			# Add the points
			if self._dRecord['i'][t] != 'd':
				dPoints['i'] += self._dRecord['i'][t]
			if self._dRecord['o'][t] != 'd':
				dPoints['o'] += self._dRecord['o'][t]

			# Increase the attempts
			dStats['regular']['attempts'] += 1

			# Increase the type of throw
			if self._dRecord[_is][t] == 'd':
				dStats['regular']['drops'] += 1
			elif self._dRecord[_is][t] == 6:
				dStats['regular']['sixes'] += 1
			elif self._dRecord[_is][t] == 4:
				dStats['regular']['fours'] += 1
			elif self._dRecord[_is][t] == 3:
				dStats['regular']['threes'] += 1
			elif self._dRecord[_is][t] == 2:
				dStats['regular']['twos'] += 1
			elif self._dRecord[_is][t] == 1:
				dStats['regular']['ones'] += 1
			elif self._dRecord[_is][t] == 0:
				dStats['regular']['zeros'] += 1

		# Add the points for throw 5 and 10
		for t in ['5', '10']:

			if self._dRecord['i'][t]['value'] != 'd':
				dPoints['i'] += self._dRecord['i'][t]['value']
			if self._dRecord['o'][t]['value'] != 'd':
				dPoints['o'] += self._dRecord['o'][t]['value']

			# If it's a killshot
			if self._dRecord[_is][t]['killshot']:

				# Is it left or right?
				w = self._dRecord[_is][t]['clutch'] == 'L' and 'ksLeft' or 'ksRight'

				# Increase the attempts
				dStats[w]['attempts'] += 1

				# If it's a drop
				if self._dRecord[_is][t]['value'] == 'd':
					dStats[w]['drops'] += 1

				# Else if it's a 7
				elif self._dRecord[_is][t]['value'] == 7:
					dStats[w]['hits'] += 1

			# Else it's a regular throw
			else:
				dStats['regular']['attempts'] += 1

				# Increase the type of throw
				if self._dRecord[_is][t]['value'] == 'd':
					dStats['regular']['drops'] += 1
				elif self._dRecord[_is][t]['value'] == 6:
					dStats['regular']['sixes'] += 1
				elif self._dRecord[_is][t]['value'] == 4:
					dStats['regular']['fours'] += 1
				elif self._dRecord[_is][t]['value'] == 3:
					dStats['regular']['threes'] += 1
				elif self._dRecord[_is][t]['value'] == 2:
					dStats['regular']['twos'] += 1
				elif self._dRecord[_is][t]['value'] == 1:
					dStats['regular']['ones'] += 1
				elif self._dRecord[_is][t]['value'] == 0:
					dStats['regular']['zeros'] += 1

		# Add the points
		dStats['points'] += dPoints[_is]

		# If we got 64 points
		if dStats['points'] == 64:
			dStats['sixtyfours'] = 1

		# If the thrower won
		if dPoints['i'] > dPoints['o']:
			dStats['wins'] += 1

		# Else if the thrower lost
		elif dPoints['i'] < dPoints['o']:
			dStats['losses'] +=1

		# Else, go to overtime
		else:

			# Init the points per thrower
			dPoints = {'i': 0, 'o': 0}

			# Go through every target throw
			for i in range(len(self._dRecord['overtime'][_is])):

				# Update the points
				if self._dRecord['overtime']['i'][i] == 1:
					dPoints['i'] += 1
				if self._dRecord['overtime']['o'][i] == 1:
					dPoints['o'] += 1

			# If the thrower won
			if dPoints[_is] > dPoints[sO]:
				dStats['wins'] += 1

			# If the thrower lost
			elif dPoints[_is] < dPoints[sO]:
				dStats['losses'] += 1

		# Return the calculated stats
		return dStats

	@classmethod
	def finishOvertime(cls, _id, _is):
		"""Finish Overtime

		Updates the overtime.[_type].finished bool

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

			# Generate the rethink query to update the big axe finished field
			#	atomically
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"overtime": {
							"finished": {
								_is: True
							}
						}
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	@classmethod
	def finishOvertimeReset(cls, _id):
		"""Finish Overtime reset

		Updates the bigaxe.finished object to false/false

		Arguments:
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
						"overtime": {
							"finished": {
								"i": False,
								"o": False
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
	def finishGame(cls, _id, _is):
		"""Finish Game

		Updates the finished bool

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
						_is: {
							"finished": True
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
	def updateOvertime(cls, _id, _is, data):
		"""Update Overtime

		Updates or adds a throw to the overtime section

		Arguments:
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

			# Generate the rethink query to add or update an overtime throw
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(_id) \
					.update({
						"overtime": {
							"finished": {"i": False, "o": False},
							_is: data[_is]
						}
					}) \
					.run(oCon)

			# Return based on whether anything was replaced
			return dRes['replaced'] == 1

	@classmethod
	def updateThrow(cls, _id, _is, throw, value):
		"""Update Throw

		Updates a single data point in the game record

		Arguments:
			_id {str} -- The UUID of the match to update
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
						_is: {
							throw: value
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
					"sixtyfours": r.row['sixtyfours'] + stats['sixtyfours'],
					"ksLeft": {
						"attempts": r.row['ksLeft']['attempts'] + stats['ksLeft']['attempts'],
						"drops": r.row['ksLeft']['drops'] + stats['ksLeft']['drops'],
						"hits": r.row['ksLeft']['hits'] + stats['ksLeft']['hits']
					},
					"ksRight": {
						"attempts": r.row['ksRight']['attempts'] + stats['ksRight']['attempts'],
						"drops": r.row['ksRight']['drops'] + stats['ksRight']['drops'],
						"hits": r.row['ksRight']['hits'] + stats['ksRight']['hits']
					},
					"regular": {
						"attempts": r.row['regular']['attempts'] + stats['regular']['attempts'],
						"drops": r.row['regular']['drops'] + stats['regular']['drops'],
						"sixes": r.row['regular']['sixes'] + stats['regular']['sixes'],
						"fours": r.row['regular']['fours'] + stats['regular']['fours'],
						"threes": r.row['regular']['threes'] + stats['regular']['threes'],
						"twos": r.row['regular']['twos'] + stats['regular']['twos'],
						"ones": r.row['regular']['ones'] + stats['regular']['ones'],
						"zeros": r.row['regular']['zeros'] + stats['regular']['zeros']
					}
				}),
				t.insert(stats)
			).run(oCon)

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
		stats['_thrower'] = thrower

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
					"ksLeft": {
						"attempts": Record_ReDB.r.row['ksLeft']['attempts'] + stats['ksLeft']['attempts'],
						"drops": Record_ReDB.r.row['ksLeft']['drops'] + stats['ksLeft']['drops'],
						"hits": Record_ReDB.r.row['ksLeft']['hits'] + stats['ksLeft']['hits'],
						"points": Record_ReDB.r.row['ksLeft']['points'] + stats['ksLeft']['points']
					},
					"ksRight": {
						"attempts": Record_ReDB.r.row['ksRight']['attempts'] + stats['ksRight']['attempts'],
						"drops": Record_ReDB.r.row['ksRight']['drops'] + stats['ksRight']['drops'],
						"hits": Record_ReDB.r.row['ksRight']['hits'] + stats['ksRight']['hits'],
						"points": Record_ReDB.r.row['ksRight']['points'] + stats['ksRight']['points']
					},
					"regular": {
						"attempts": Record_ReDB.r.row['regular']['attempts'] + stats['regular']['attempts'],
						"drops": Record_ReDB.r.row['regular']['drops'] + stats['regular']['drops'],
						"sixes": Record_ReDB.r.row['regular']['sixes'] + stats['regular']['sixes'],
						"fours": Record_ReDB.r.row['regular']['fours'] + stats['regular']['fours'],
						"threes": Record_ReDB.r.row['regular']['threes'] + stats['regular']['threes'],
						"twos": Record_ReDB.r.row['regular']['twos'] + stats['regular']['twos'],
						"ones": Record_ReDB.r.row['regular']['ones'] + stats['regular']['ones'],
						"zeros": Record_ReDB.r.row['regular']['zeros'] + stats['regular']['zeros'],
						"hits": Record_ReDB.r.row['regular']['hits'] + stats['regular']['hits'],
						"points": Record_ReDB.r.row['regular']['points'] + stats['regular']['points']
					}
				}),
				t.insert(stats)
			).run(oCon)

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

class PracticePattern(Record_ReDB.Record):
	"""Practice Pattern

	Represents a practice session pattern

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdPracticePatternConf
