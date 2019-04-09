# coding=utf8
""" Auth Records

Handles the record structures for the auth service
"""

# Import future
from __future__ import print_function, absolute_import

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2018-09-09"

# Python imports
from hashlib import sha1
import re

# Pip imports
from FormatOC import Tree
from RestOC import Conf, StrHelper, Record_ReDB

# Valid mime types
validMimes = ['image/jpeg', 'image/png']

# Favourites structure and config
_mdFavouritesConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/auth/favourites.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# Match Request structure and config
_mdMatchRequestConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/auth/match_request.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# Thrower structure and config
_mdThrowerConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/auth/thrower.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# Favourites class
class Favourites(Record_ReDB.Record):
	"""Favourites

	Represents a list of favourite throwers

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def add(cls, thrower, favourite):
		"""Add

		Adds a favourite to a thrower

		Arguments:
			thrower {str} -- The UUID of the thrower
			favourite {str} -- The UUID of the favourite

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
				t.get(thrower).update(lambda t: {
					"ids": t['ids'].set_insert(favourite)
				}).run(oCon),
				t.insert({
					"_thrower": thrower,
					"ids": [favourite]
				})) \
				.run(oCon)

			# Return True if a record was changed
			return dRes['replaced'] == 1 or dRes['inserted'] == 1

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdFavouritesConf

	@classmethod
	def remove(cls, thrower, favourite):
		"""Remove

		Removes a favourite from a thrower

		Arguments:
			thrower {str} -- The UUID of the thrower
			favourite {str} -- The UUID of the favourite

		Returns:
			bool
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query
			dRes = Record_ReDB.r \
				.db(dStruct['db']) \
				.table(dStruct['table']) \
				.get(thrower) \
				.update(lambda t: {
					"ids": t['ids'].filter(lambda f: f != favourite)
				}).run(oCon)

			# Return True if a record was changed
			return dRes['replaced'] == 1

# Match Request class
class MatchRequest(Record_ReDB.Record):
	"""Match Request

	Represents a single match request for any organization

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdMatchRequestConf

# Thrower class
class Thrower(Record_ReDB.Record):
	"""Thrower

	Represents a single thrower (aka, user)

	Extends: RestOC.Record_ReDB.Record
	"""

	@classmethod
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdThrowerConf

	@staticmethod
	def passwordHash(passwd):
		"""Password Hash

		Returns a hashed password with a unique salt

		Arguments:
			passwd {str} -- The password to hash

		Returns:
			str
		"""

		# Generate the salt
		sSalt = StrHelper.random(32, '_0x')

		# Generate the hash
		sHash = sha1(sSalt.encode('utf-8') + passwd.encode('utf-8')).hexdigest()

		# Combine the salt and hash and return the new value
		return sSalt[:20] + sHash + sSalt[20:]

	@classmethod
	def passwordStrength(cls, passwd):
		"""Password Strength

		Returns true if a password is secure enough

		Arguments:
			passwd {str} -- The password to check

		Returns:
			bool
		"""

		# If we don't have enough or the right chars
		if 8 > len(passwd) or \
			re.search('[A-Za-z]+', passwd) == None or \
			re.search('[0-9]+', passwd) == None:

			# Invalid password
			return False

		# Return OK
		return True

	def passwordValidate(self, passwd):
		"""Password Validate

		Validates the given password against the current instance

		Arguments:
			passwd {str} -- The password to validate

		Returns:
			bool
		"""

		# Get the password from the record
		sPasswd = self.fieldGet('passwd')

		# Split the password
		sSalt = sPasswd[:20] + sPasswd[60:]
		sHash = sPasswd[20:60]

		# Return OK if the rehashed password matches
		return sHash == sha1(sSalt.encode('utf-8') + passwd.encode('utf-8')).hexdigest()

	@classmethod
	def search(cls, q):
		"""Search

		Searches for throwers based on alias

		Arguments:
			q string -- The query to search

		Returns:
			list
		"""

		# Get the structure
		dStruct = cls.struct()

		# Get a connection to the host
		with Record_ReDB._with(dStruct['host']) as oCon:

			# Generate the rethink query
			itRes = Record_ReDB.r \
				.db(dStruct['db']) \
				.table(dStruct['table']) \
				.filter(lambda thrower: (thrower['_id'] == q) |
					(thrower['alias'].match("(?i)" + q))
				) \
				.pluck("_id", "alias") \
				.default(None) \
				.run(oCon)

			return [d for d in itRes]
