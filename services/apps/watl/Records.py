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
