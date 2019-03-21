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

# Import python modules
from hashlib import sha1
import re

# Import pip modules
from FormatOC import Tree

# Import local modules
from RestOC import Conf, StrHelper, Record_ReDB

# Valid mime types
validMimes = ['image/jpeg', 'image/png']

# Thrower structure and config
_mdThrowerConf = Record_ReDB.Record.generateConfig(
	Tree.fromFile('../json/definitions/thrower.json'),
	'rethinkdb', Conf.get(("rethinkdb", "axegains"))
)

# Thrower class
class Thrower(Record_ReDB.Record):
	"""Thrower

	Represents a single uploaded consent form

	Extends: RestOC.Record_ReDB.Record
	"""

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

	def passwordValidate(self, passwd, exact_comparison=False):
		"""Password Validate

		Validates the given password against the current instance

		Arguments:
			passwd {str} -- The password to validate
			exact_comparison {bool} -- If True it will compare the field itself
				instead of the hashed value

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
	def config(cls):
		"""Config

		Returns the configuration data associated with the record type

		Returns:
			dict
		"""
		return _mdThrowerConf
