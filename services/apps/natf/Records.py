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

# Match - Big Axe structure and config
_mdMatchBigAxeConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/natf/match_bigaxe.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# Match - Game structure and config
_mdMatchGameConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/natf/match_game.json'),
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

class MatchBigAxe(Record_ReDB.Record):
	"""Match Big Axe

	Represents big axe part of match

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdMatchBigAxeConf

class MatchGame(Record_ReDB.Record):
	"""Match Game

	Represents a single game in a match

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdMatchGameConf

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
