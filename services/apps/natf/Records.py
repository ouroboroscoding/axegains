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

# Import pip modules
from FormatOC import Tree

# Import local modules
from RestOC import Conf, Record_ReDB

# Practice structure and config
_mdPracticeConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/natf_practice.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# Practice class
class Practice(Record_ReDB.Record):
	"""Practice

	Represents a single uploaded consent form

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
