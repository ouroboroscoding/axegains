# coding=utf8
""" Consent Forms Service Structures

Handles the structures for the Consent Form service
"""

# Import future
from __future__ import print_function, absolute_import

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2018-09-09"

# Import pip modules
from FormatOC import Tree
import rethinkdb as r

# Import local modules
from modules.Storage import Document

# Valid mime types
validMimes = ['image/jpeg', 'image/png']

# User structure and config
_moUserTree = Tree.fromFile('definitions/user.json')
_mdUserConf = Document.generateConfig(_moUserTree)

# Session structure and config
_moSessionTree = Tree.fromFile('definitions/session.json')
_mdSessionConf = Document.generateConfig(_moSessionTree)

# Stats structure and config
_moStatsTree = Tree.fromFile('definitions/stats.json')
_mdStatsConf = Document.generateConfig(_moStatsTree)

# User class
class User(Document):
	"""User

	Represents a single uploaded consent form

	Extends: modules.Storage.Document
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

		# If the password is somehow unicode
		if isinstance(passwd, unicode):
			passwd	= passwd.encode('utf8')


		sSalt	= md5(Strings.random(8)).hexdigest()
		return sSalt + sha1(sSalt + passwd).hexdigest()

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

		# If the password is somehow unicode
		if isinstance(passwd, unicode):
			passwd = passwd.encode('utf8')

		# Get the hashed password
		sPasswd = self['passwd']

		# If we're doing an exact comparison
		if exact_comparison:
			return sPasswd == passwd

		# Split the current password into salt and hash
		sSalt = sPasswd[:32]
		sHash = sPasswd[32:]

		# Return true if the given password creates the same hash
		return sha1(sSalt + passwd).hexdigest() == sHash

	# tree static method
	@classmethod
	def struct(cls):
		"""Structure

		Returns the FormatOC Tree and base DB config associated with the storage
		document

		Returns:
			dict
		"""
		return {
			"tree": _moUserTree,
			"conf": _mdUserConf
		}

# Session class
class Session(Document):
	"""Session

	Represents a single session for a user

	Extends: modules.Storage.Document
	"""

	# tree static method
	@classmethod
	def struct(cls):
		"""Structure

		Returns the FormatOC Tree and base DB config associated with the storage
		document

		Returns:
			dict
		"""
		return {
			"tree": _moSessionTree,
			"conf": _mdSessionConf
		}

# Stats class
class Stats(Document):
	"""Stats

	Represents stats for a single user

	Extends: modules.Storage.Document
	"""

	# tree static method
	@classmethod
	def struct(cls):
		"""Structure

		Returns the FormatOC Tree and base DB config associated with the storage
		document

		Returns:
			dict
		"""
		return {
			"tree": _moStatsTree,
			"conf": _mdStatsConf
		}
