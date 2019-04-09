# coding=utf8
""" NATF Records

Handles the record structures for the natf service
"""

# Import future
from __future__ import print_function, absolute_import

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

# Practice structure and config
_mdPracticeConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/natf/practice.json'),
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
