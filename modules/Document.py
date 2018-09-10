# coding=utf8
""" Document Module

Handles the basic methods for a document, aka, an object to be stored in a DB
of some sort
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
import abc
from hashlib import md5

# Include local modules
from . import Dictionaries as Dict

# Init module variables
__msPrefix = ''

# get/set global prefix
def globalPrefix(v = None):
	"""Global Prefix

	Call with no arguments to get current prefix, call with an argument to set
	the prefix to the argument

	Args:
		v (str): The new prefix to store

	Returns:
		None|str
	"""

	# PUll in the global var
	global __msPrefix

	# If nothing was passed
	if not v:
		return __msPrefix

	# Else, store the new prefix
	else:
		__msPrefix = v

# DocumentException class
class DocumentException(Exception):
	"""Document Exception

	Used when critical errors happen in the Document module

	Extends: Exception
	"""
	pass

# Documents class
class BaseDocument(object):
	"""Base Document

	Handles all interaction with basic document structures

	Extends: object
	"""
	__metaclass__	= abc.ABCMeta

	# constructor
	def __init__(self, data={}, db={}):
		"""Constructor

		Initialises the instance and returns it

		Args:
			data (dict): The current state of the record
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			Table

		Raises:
			DocumentException
		"""

		# Get the info
		self._dInfo = self.info(db)

		# If the data isn't empty
		if data:

			# Validate it
			if not self._dInfo['tree'].valid(data):
				raise ValueError("%s: %s" % (
					self._dInfo['tree'].validation_fail_name,
					self._dInfo['tree'].validation_fail_value
				))

		# Store the data
		self._dData = self._dInfo['tree'].clean(data)
		self._dChanged = {}

	def __contains__(self, field):
		"""Contains (__contains__)

		Returns true if the string exists as a key in the Document

		Args:
			field (str): The field to check for

		Returns:
			bool
		"""
		return field in self._dData

	def __delitem__(self, field):
		"""Delete Item (__delitem__)

		Removes a specific field from a record and flags the entire document
		as needing to be updated

		Args:
			field (str): The field to delete

		Returns:
			None
		"""
		self.d(field);

	def __getitem__(self, field):
		"""Get Item (__getitem__)

		Returns a specific field from the document

		Args:
			field (str): The field to get

		Returns:
			mixed
		"""
		return self.g(field)

	def __setitem__(self, field, value):
		"""Set Item (__setitem__)

		Sets a specific key in the dict

		Args:
			field (str): The field to set
			value (mixed): The value to set to the field

		Returns:
			None
		"""
		self.s(field, value)

	def __str__(self):
		"""Str (__str__)

		Returns a string representation of the document

		Returns:
			str
		"""
		return str(self._dData)

	# revision protected method
	def _revision(self, init=False):
		"""Revision

		Creates or updates the revision number of the instance

		Args:
			init (bool): Initialises the revision value
				Defaults to false, set to True for a new revision value

		Returns:
			bool

		Raises:
			DocumentException
		"""

		# If we need a new value
		if init:

			# Make sure the revision itself is not in the value
			if '_rev' in self._dData:
				del self._dData['_rev']

			# Generate and set the revision
			self._dData['_rev'] = '1-%s' % md5(json.dumps(self._dData)).hexdigest()

			# Return OK
			return True

		# Else we are updating the old value
		else:

			# Pull out the old revision
			sOldRev = self._dData['_rev']
			del self._dData['_rev']

			# Split it into version and hash
			sVer, sHash = sOldRev.split('-')

			# Generate the hash part of the revision
			sMD5 = md5(json.dumps(self._dData)).hexdigest()

			# If the MD5s have changed
			if sHash != sMD5:

				# Generate the new revision
				self._dData['_rev'] = '%d-%s' % (int(sVer)+1, sMD5)

				# Add the _rev field as changed if it isn't already
				if self._dChanged != True:
					self._dChanged['_rev'] = True

				# Return OK
				return True

			# Nothing changed
			return False

	def d(self, field):
		"""D (delete)

		Unlike the static delete which is used delete a record by ID, this
		delete removes a field within the document

		Args:
			Args:
			field (str): The name of the field to return, or None for the entire
				document

		Returns:
			self for chaining

		Raise:
			KeyError: field doesn't exist
		"""

		# If the field doesn't exists in the document
		if field not in self._dData:
			raise KeyError(field)

		# Remove the field from the document
		del self._dData[field]

		# Flag the entire document as needing to be updated
		self._dChanged = True

		# Return ok
		return self

	# del method
	@abc.abstractmethod
	def delete(self):
		"""Delete

		Deletes the record represented by the instance

		Returns:
			bool

		Raises:
			DocumentException
		"""
		pass

	# delete get method
	@classmethod
	@abc.abstractmethod
	def deleteGet(cls, _id, index=None, db={}):
		"""Delete Get

		Deletes one or many documents by ID or by index

		Args:
			_id (mixed|mixed[]): The ID or IDs to delete, None for all documents
			index (str): If set, used as the index to search instead of the
				primary key
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Return:
			uint: the number of records deleted

		Raises:
			DocumentException
		"""
		pass

	# exists static method
	@classmethod
	@abc.abstractmethod
	def exists(cls, _id, index=None, db={}):
		"""Exists

		Checkes if the specifed document exists. Set an index to check for
		something other than the primary key. To check if a record exists with
		any non-indexed fields, use filter() instead

		Args:
			_id (mixed): The value or values to check
				In the case of a primary key this is always a single value, but
				for complex indexes a tuple may be passed
			index (str): If set, used as the index to search instead of the
				primary key
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			bool

		Raises:
			DocumentException
		"""
		pass

	# filter static method
	@classmethod
	@abc.abstractmethod
	def filter(cls, obj, raw=None, orderby=None, db={}):
		"""Filter

		Finds records based on the specific fields and values passed in the obj

		Args:
			obj (dict): A dictionary of field names to the values they should
				match
			raw (bool|list): If set to true, raw dicts will be returned instead
				of Document instances. If set to a list or tuple, only those
				fields listed will be returned
			orderby (str|str[]): The field(s) to order the result by
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			Table[]|dict[]

		Raises:
			DocumentException
		"""
		pass

	# g method
	def g(self, field=None, default=None):
		"""G (get)

		Unlike the static get which is used to fetch by ID, this get returns
		fields within the document

		Args:
			field (str): The name of the field to return, or None for the entire
				document
			default (mixed): The value to return if the field doesn't exist
				defaults to None

		Returns:
			mixed
		"""

		# If got nothing for the field
		if not field:
			return self._dData

		# If the field doesn't exist
		if field not in self._dData:
			return default

		# Else, return the field
		return self._dData[field]

	# generate config static method
	@staticmethod
	@abc.abstractmethod
	def generateConfig(tree):
		"""Generate Config

		Uses a Format-OC tree to generate the base DB config for the Document

		Args:
			tree (FormatOC.Tree): the tree associated with the document

		Returns:
			dict
		"""

		# Merge them with the default values
		dConf = {
			"auto_id": True,
			"server": "default",
			"db": "Test",
			"indexes": {},
			"primary": "_id",
			"revisions": False,
		}

		# If there's no name throw an exception
		if not tree._name:
			raise DocumentException('Tree must contain a __name__ field to be used by Document.Document')

		# Return the config
		return dConf

	# get static method
	@classmethod
	@abc.abstractmethod
	def get(cls, _id=None, index=None, filter=None, contains=None, raw=None, orderby=None, limit=0, db={}):
		"""Get

		Returns one or more records from the table. Send no ID to fetch all
		records in the table. Set an index to look for something other than the
		primary key

		Args:
			_id (str|str[]): The ID(s) to fetch from the table
			index (str): If set, used as the index to search instead of the
				primary key
			filter (dict): If set, used as an additional filter to the ID or
				index lookup
			raw (bool|list): If set to true, raw dicts will be returned instead
				of Document instances. If set to a list or tuple, only those
				fields listed will be returned
			orderby (str|str[]): The field(s) to order the result by
			limit (uint): The number of records to return
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			Table|Table[]|dict|dict[]

		Raises:
			DocumentException
		"""
		pass

	# info method
	@classmethod
	def info(cls, db={}):
		"""Info

		Returns table and db info for the given Document

		Args:
			db (dict): Optional 'postfix' and 'server' values for the Document

		Returns:
			dict
		"""

		# Get the config values associated with the Tree
		dStruct = cls.struct()

		# Init the return value
		dRet = {
			"tree": dStruct['tree'],
			"conf": dStruct['conf'],
			"server": dStruct['conf']['server'],
			"db": dStruct['conf']['db']
		}

		# If there's a server name passed
		if 'server' in db:
			dRet['server'] = db['server']

		# If there's a postfix passed
		if 'postfix' in db:
			dRet['db'] = "%s_%s" % (dRet['db'], db['postfix'])

		# Get the prefix and prefix it if there is one
		sPrefix = globalPrefix()
		if sPrefix:
			dRet['db'] = sPrefix + dRet['db']

		# Return the structure
		return dRet

	# insert method
	@abc.abstractmethod
	def insert(self, conflict='error'):
		"""Insert

		Inserts the current instance's data as a new record in the table and
		returns the ID regardless if it was given or generated

		Args:
			conflict (str): Must be one of 'error', 'replace', or 'update'

		Returns:
			mixed: None if no record was created, replaced, or updated
		"""
		pass

	# name method
	@classmethod
	def tableName(cls):
		"""Table Name

		Returns the name of the table for the given Document

		Returns:
			str
		"""

		# Get the config values associated with the Tree
		dStruct = cls.struct()

		# Return the name
		return dStruct['tree']._name;

	# s method
	def s(self, field, value):
		"""S (set)

		Sets a field in the document

		Args:
			field (str): The name of the field to set
			value (mixed): The value to set the field to

		Returns:
			self for chaining

		Raise:
			KeyError: field doesn't exist
			ValueError: value is not valid for the field
		"""

		# Get the config values associated with the Tree
		dStruct = self.struct()

		# If the field doesn't exist in the tree
		if field not in dStruct['tree']:
			raise KeyError(field)

		# If the value isn't valid
		if not dStruct['tree'][field].valid(value):
			raise ValueError(field)

		# Store the value and update the changes
		mClean = dStruct['tree'][field].clean(value)
		self._dData[field] = mClean
		if isinstance(self._dChanged, dict):
			self._dChanged[field] = mClean

		# Return ok
		return self

	# tree abstract static method
	@classmethod
	@abc.abstractmethod
	def struct(cls):
		"""Structure

		Returns the FormatOC Tree associated with the table

		Returns:
			FormatOC.Tree

		Raises:
			DocumentException
		"""
		raise DocumentException('child did not implement tree()')

	# tableCreate static method
	@classmethod
	@abc.abstractmethod
	def tableCreate(cls, db={}):
		"""Table Create

		Creates the table using the data from the Tree on the given DB and
		server

		Args:
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			bool

		Raises
			DocumentException
		"""
		pass

	# tableDelete static method
	@classmethod
	@abc.abstractmethod
	def tableDelete(cls, db={}):
		"""Table Delete

		Deletes the table from the given DB and server

		Args:
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			bool

		Raises
			DocumentException
		"""
		pass

	# update method
	@abc.abstractmethod
	def update(self, replace=False):
		"""Update

		Updates the record using the ID stored and only the fields that have
		been changed since it was last inserted/updated/replaced

		Args:
			replace (bool):

		Returns:
			bool|str: False if there was nothing to update, True on success, or
				the new revision value on success of a revisionable document

		Raises:
			DocumentException
		"""
		pass
