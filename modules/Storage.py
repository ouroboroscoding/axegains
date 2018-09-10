# coding=utf8
""" Storage Module

Handles creating, storing to, and fetching from RethinkDB NoSQL tables
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
from hashlib import md5
import sys
from time import sleep

# Include pip modules
import rethinkdb as r

# Include local modules
from . import Dictionaries as Dict, Document as SharedDocument, JSON
from .OS import print_error

# Init module variables
__mdServers = {}
globalPrefix = SharedDocument.globalPrefix

# DB create function
def db_create(name, server = 'default'):
	"""DB Create

	Creates a new DB on the given server

	Args:
		name (str): The name of the DB to create
		server (str): The name of the server to create the DB on

	Returns:
		bool
	"""

	try:

		# Fetch the connection
		with connect_with(server) as oCon:

			# Create the DB
			dRes = r.db_create(name).run(oCon)

			# If the DB wasn't created
			if 'dbs_created' not in dRes or not dRes['dbs_created']:
				return False

	# If there's already a DB with that name
	except r.errors.ReqlOpFailedError:
		return True

	# If there's any other error
	except r.errors.RqlRuntimeError:
		return False

	# Return ok
	return True

def db_drop(name, server = 'default'):
	"""DB Drop

	Deletes an existing DB from the given server

	Args:
		name (str): The name of the DB to create
		server (str): The name of the server to create the DB on

	Returns:
		bool
	"""

	try:

		# Fetch the connection
		with connect_with(server) as oCon:

			# Delete the DB
			dRes = r.db_drop(name).run(oCon)

			# If the DB wasn't deleted
			if 'dbs_dropped' not in dRes or not dRes['dbs_dropped']:
				return False

	# If there's no such DB
	except r.errors.RqlRuntimeError:
		return False

	# Return ok
	return True

# server function
def server(name, details, update=False):
	"""Server

	Adds a server to the list so that we can use it with Tables

	Args:
		name (str): Will be used to store the details
		details (dict): The credentials necessary to connect to the server

	Returns:
		bool
	"""

	# If we don't have the name, or we do but we can update
	if name not in __mdServers or update:

		# Store the details under the name
		__mdServers[name] = details

		# Return that the details were stored
		return True

	# We did nothing, return False
	return False

# connection function
def _connection(server, errcnt=0):
	"""Connection

	Fetches a connection to the given server

	Args:
		server (str): A name representing details stored using server()

	Returns:
		rethinkdb.net.DefaultConnection

	Raises:
		SharedDocument.DocumentException
	"""

	# If we can't find the server in the list
	if server not in __mdServers:
		raise ValueError('%s: no such server "%s"' % (sys._getframe().f_code.co_name, str(server)))

	# Try to make a new connection
	try:
		oCon = r.connect(**__mdServers[server])

	# Catch possible error
	except r.errors.RqlDriverError as e:

		# If there was an error, increment the error count
		errcnt	+= 1

		# If we've hit our max errors, raise an exception
		if errcnt == 3:
			raise SharedDocument.DocumentException(*e.args)
		else:
			# Else just sleep for a second and try again
			sleep(1)
			return _connection(server, errcnt)

	# Return the connection
	return oCon

# connect_with class
class connect_with(object):
	"""Connect With

	Used in conjunction with the python keyword "with" in order to make sure
	open connections are closed when the client is done with it

	Extends: object
	"""

	# constructor
	def __init__(self, server):
		self.con = _connection(server)

	# __enter__ magic method
	def __enter__(self):
		return self.con

	# __exit__ magic method
	def __exit__(self, exc_type, exc_value, traceback):
		self.con.close()
		if exc_type is not None:
			return False

# Document class
class Document(SharedDocument.BaseDocument):
	"""Table

	Handles all interaction with RethinkDB tables

	Extends: SharedDocument.BaseDocument
	"""

	# del method
	def delete(self):
		"""Delete

		Deletes the record represented by the instance

		Returns:
			bool

		Raises:
			SharedDocument.DocumentException
		"""

		# If the instance lacks a primary key
		if self._dInfo['conf']['primary'] not in self._dData:
			raise SharedDocument.DocumentException('Can not delete document with no primary key')

		# Fetch the DB connection
		with connect_with(self._dInfo['server']) as oCon:

			# Try to delete the record by its primary key
			dRes = r \
				.db(self._dInfo['db']) \
				.table(self._dInfo['tree']._name) \
				.get(self._dData[self._dInfo['conf']['primary']]) \
				.delete() \
				.run(oCon)

			# If there was an error
			if dRes['deleted'] != 1:
				return False

			# Remove the ID
			del self._dData[self._dInfo['conf']['primary']]

		# Return ok
		return True

	# delete get method
	@classmethod
	def deleteGet(cls, _id=None, index=None, db={}):
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
			SharedDocument.DocumentException
		"""

		# Get the config values associated with the Tree
		dInfo = cls.info(db)

		# If there is an index passed
		if index:

			# If the index doesn't exist
			if index not in dInfo['conf']['indexes']:
				raise SharedDocument.DocumentException('no index', index, 'tree')

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			# Create a cursor for all records
			oCur = r \
				.db(dInfo['db']) \
				.table(dInfo['tree']._name) \

			# If all records must be returned, we don't need to modify the
			#	cursor any further
			if _id is None:
				pass

			# Else, if there's an index
			elif index:

				# Continue to filter using get all
				oCur = oCur.get_all(_id, index=index)

			# Else, we are dealing with the primary key
			else:

				# If we got multiple IDs
				if isinstance(_id, (tuple,list)):

					# Continue to filter using get all
					oCur = oCur.get_all(_id)

				# Else we want one record
				else:

					# Filter to a single ID
					oCur = oCur.get(_id)

			# Run the delete
			dRes = oCur.delete().run(oCon)

			# Return the number of documents deleted
			return dRes['deleted']

	# exists static method
	@classmethod
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
			SharedDocument.DocumentException
		"""

		# Get the primary key, it's the only thing we need
		dInfo = cls.info(db)

		# Use get to save repeating ourselves
		if not cls.get(_id, index=index, raw=[dInfo['conf']['primary']], db=db):

			# If absolutely nothing was found, return failure
			return False

		# If one or more primary keys were returned, return success
		return True

	# filter static method
	@classmethod
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
			SharedDocument.DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

		# Fetch the DB connection
		with connect_with(sServer) as oCon:

			# Generate the request
			oCur = r \
				.db(dInfo['db']) \
				.table(dInfo['tree']._name) \
				.filter(obj)

			# If a raw request was done with specific fields
			if isinstance(raw, (tuple,list)):
				oCur = oCur.pluck(*raw).default(None)

			# If an order by list was sent
			if isinstance(orderby, (tuple,list)):
				oCur = oCur.order_by(*orderby)
			# Else if an order field was sent
			elif isinstance(orderby, basestring):
				oCur = oCur.order_by(orderby)

			# Run the request
			itRes = oCur.run(oCon)

			# If there's no data
			if not itRes:
				return []

			# If Raw requested, return as is
			if raw:
				return [d for d in itRes]

			# Else create instances for each
			else:
				return [cls(d, db) for d in itRes]

	# generate config static method
	@staticmethod
	def generateConfig(tree):
		"""Generate Config

		Uses a Format-OC tree to generate the base DB config for the Document

		Args:
			tree (FormatOC.Tree): the tree associated with the document

		Returns:
			dict
		"""

		# Merge them with the default values
		dConf = Dict.merge({
			"auto_id": True,
			"server": "default",
			"db": "Test",
			"indexes": {},
			"primary": "_id",
			"revisions": False
		}, tree.special('rethinkdb', default={}))

		# If there's no name throw an exception
		if not tree._name:
			raise SharedDocument.DocumentException('Tree must contain a __name__ field to be used by Storage.Document')

		# Return the config
		return dConf

	# get static method
	@classmethod
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
			SharedDocument.DocumentException
		"""

		# Assume multiple records
		bMultiple = True

		# Get the info
		dInfo = cls.info(db)

		# If there is an index passed
		if index:

			# If the index doesn't exist
			if index not in dInfo['conf']['indexes']:
				raise SharedDocument.DocumentException('no index', index, 'tree')

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			# Create a cursor for all records
			oCur = r \
				.db(dInfo['db']) \
				.table(dInfo['tree']._name) \

			# If all records must be returned, we don't need to modify the
			#	cursor any further
			if _id == None:
				pass

			# Else, if there's an index
			elif index:

				# If we got a dictionary
				if isinstance(_id, dict):

					# If we got between
					if 'between' in _id:
						oCur = oCur.between(_id['between'][0], _id['between'][1], index=index, right_bound='closed')

					# Else we want greater than
					elif 'gt' in _id:
						oCur = oCur.between(_id['gt'], r.max_id, index=index, left_bound='open')

					# Else we want greater than or equal to
					elif 'gte' in _id:
						oCur = oCur.between(_id['gte'], r.max_id, index=index)

					# Else we want less than
					elif 'lt' in _id:
						oCur = oCur.between(r.minval, _id['lt'], index=index)

					# Else we want less than or equal to
					elif 'lte' in _id:
						oCur = oCur.between(r.minval, _id['lte'], index=index, right_bound='closed')

					# Else we got an invalid value
					else:
						raise ValueError('_id')

				# If it's a tuple
				elif isinstance(_id, tuple):

					# Check if one of the values is None
					iNone = -1
					for i in range(len(_id)):

						# If a value is None
						if _id[i] is None:

							# If we already have an index
							if iNone != -1:
								raise SharedDocument.DocumentException('can\'t list more than one None in an index tuple')

							# Store the index
							iNone = i

					# If we have one
					if iNone > -1:

						# Copy the tuples
						idMax = list(_id)
						idMin = list(_id)

						# Change the None accordingly
						idMax[iNone] = r.maxval
						idMin[iNone] = r.minval

						# Call between instead of get_all
						oCur = oCur.between(idMin, idMax, index=index)

					# Else we have no Nones, pass it through
					else:
						oCur = oCur.get_all(_id, index=index)

				# Else if it's a list
				elif isinstance(_id, list):
					oCur = oCur.get_all(r.args(_id), index=index)

				# Else just pass it through
				else:
					oCur = oCur.get_all(_id, index=index)

			# Else, we are dealing with the primary key
			else:

				# If we got a dictionary
				if isinstance(_id, dict):

					# If we got between
					if 'between' in _id:
						oCur = oCur.between(_id['between'][0], _id['between'][1], right_bound='closed')

					# Else we want greater than
					elif 'gt' in _id:
						oCur = oCur.between(_id['gt'], r.max_id, left_bound='open')

					# Else we want greater than or equal to
					elif 'gte' in _id:
						oCur = oCur.between(_id['gte'], r.max_id)

					# Else we want less than
					elif 'lt' in _id:
						oCur = oCur.between(r.minval, _id['lt'])

					# Else we want less than or equal to
					elif 'lte' in _id:
						oCur = oCur.between(r.minval, _id['lte'], right_bound='closed')

					# Else we got an invalid value
					else:
						raise ValueError('_id')

				# If we got multiple IDs
				elif isinstance(_id, (tuple,list)):

					# Continue to filter using get all
					oCur = oCur.get_all(*_id)

				# Else we want one record
				else:

					# Turn off the multiple flag
					bMultiple = False

					# Filter to a single ID
					oCur = oCur.get(_id)

			# If an additional filter was passed
			if filter:
				oCur = oCur.filter(filter)

			# If there's a contains
			if contains:

				# If we don't have a list
				if not isinstance(contains[1], (tuple,list)):
					contains = [contains[0], [contains[1]]]

				# Add the contains filter
				oCur = oCur.filter(
					lambda obj: obj[contains[0]].contains(*contains[1])
				)

			# If there's a limit
			if limit > 0:
				oCur = oCur.limit(limit)

			# If a raw request was done with specific fields
			if isinstance(raw, (tuple,list)):
				oCur = oCur.pluck(*raw).default(None)

			# If an order by list was sent
			if isinstance(orderby, (tuple,list)):
				oCur = oCur.order_by(*orderby)
			# Else if an order field was sent
			elif isinstance(orderby, basestring):
				oCur = oCur.order_by(orderby)

			try:
				# Run the request
				itRes = oCur.run(oCon)

			except r.errors.ReqlOpFailedError as e:

				# The index doesn't exist
				if e.args[0][:5] == 'Index':
					raise SharedDocument.DocumentException('no index', index, 'table')

				# Else, re-raise
				raise e

			# If we are expecting a single record
			if limit == 1:

				# Try to get one row
				try:
					dRow = itRes.next()
				except r.net.DefaultCursorEmpty as e:
					return None

				# If it's raw, don't instantiate it
				return (raw and dRow or cls(dRow, db))

			# If there's no data
			if not itRes:
				if bMultiple:
					if limit == 1: return None
					else: return []
				else: return None

			# If multiple records are expected
			if bMultiple:

				# If Raw requested, return as is
				if raw:
					return [d for d in itRes]

				# Else create instances for each
				else:
					return [cls(d, db) for d in itRes]

			# Else, one record requested
			else:
				return raw and itRes or cls(itRes, db)

	# insert method
	def insert(self, conflict='error'):
		"""Insert

		Inserts the current instance's data as a new record in the table and
		returns the ID regardless if it was given or generated

		Args:
			conflict (str): Must be one of 'error', 'replace', or 'update'

		Returns:
			mixed: None if no record was created, replaced, or updated
		"""

		# Clean conflict
		if conflict not in ('error', 'replace', 'update'):
			conflict = 'error'

		# If revisions are turned on, generate a new value
		if self._dInfo['conf']['revisions']:
			self._revision(True)

		# Get a connection to the server
		with connect_with(self._dInfo['server']) as oCon:

			# Create a new document
			dRes = r \
				.db(self._dInfo['db']) \
				.table(self._dInfo['tree']._name) \
				.insert(self._dData, conflict=conflict) \
				.run(oCon)

		# If there was an error
		if dRes['inserted'] != 1 and dRes['replaced'] != 1:
			return None

		# Store the ID if necessary
		if self._dInfo['conf']['auto_id']:
			self._dData[self._dInfo['conf']['primary']] = dRes['generated_keys'][0]

		# Return the ID
		return self._dData[self._dInfo['conf']['primary']]

	def insertMany(cls, docs, replace=False, db={}):
		"""Insert Many

		Inserts multiple documents at once, returning all their IDs

		Args:
			docs (Storage[]): A list of Storage instances to insert
			replace (bool): If True, DB will accept a duplicate ID as a replace
				command
			db (dict): Optional db info, 'host' and 'postix'

		Returns:
			mixed[]
		"""

		# Get the info
		dInfo = cls.info(db)

		# Init the list of raw documents that will be inserted
		lDocs = []

		# Go through each document passed
		for o in docs:

			# If this is a collection with revisions
			if dInfo['conf']['revisions']:
				o._revision(True)

			# Add the raw, bytefied document to the list
			lDocs.append(_byteify(o.g()))

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			# Create a new document
			dRes = r \
				.db(dInfo['db']) \
				.table(dInfo['tree']._name) \
				.insert(lDocs, conflict=(replace and 'replace' or 'error')) \
				.run(oCon)

			# If there was an error
			if dRes['inserted'] == 0 and dRes['replaced'] == 0:
				return None

			# Go through each document
			for i in xrange(len(docs)):

				# Store the ID if necessary
				if dInfo['conf']['auto_id']:
					docs[i].set(sPrimary, dRes['generated_keys'][i])

		# Return the list of generated keys
		return dRes['generated_keys']

	# tableClear static method
	@classmethod
	def tableClear(cls, db={}):
		"""Table Clear

		Removes all records from the table

		Args:
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			bool

		Raises
			SharedDocument.DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			try:

				# Try to delete all records in the table
				dRes = r \
					.db(dInfo['db']) \
					.table(dInfo['tree']._name) \
					.delete() \
					.run(oCon)

				# Return the number of rows delete
				return dRes['deleted']

			# If the table didn't exist
			except r.errors.RqlRuntimeError:
				print_error(str(e))
				return False

	# tableCreate static method
	@classmethod
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
			SharedDocument.DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			try:

				# Try to create the table
				dRes = r \
					.db(dInfo['db']) \
					.table_create(dInfo['tree']._name, primary_key=dInfo['conf']['primary']) \
					.run(oCon)

				# If the table wasn't created
				if 'tables_created' not in dRes or not dRes['tables_created']:
					return False

				# If there are indexes
				if dInfo['conf']['indexes']:

					# Go through each one and split it into name and fields
					for sIndex,mFields in dInfo['conf']['indexes'].iteritems():

						# Create the cursor up to the table
						oCur = r \
							.db(dInfo['db']) \
							.table(dInfo['tree']._name)

						# If there's no field, the name is the field
						if not mFields:

							# Create the index
							oCur.index_create(sIndex).run(oCon)

						# Else if it's a string
						elif isinstance(mFields, basestring):

							# Create the index
							oCur.index_create(sIndex, r.row[mFields]).run(oCon)

						# Else if it's a list
						elif isinstance(mFields, (tuple,list)):

							# Generate the list of fields
							lFields = []
							for sField in mFields:
								lFields.append(r.row[sField])

							# Create the index
							dRes = oCur.index_create(sIndex, lFields).run(oCon)

						# Else, wtf?
						else:
							raise SharedDocument.DocumentException("Unknown index format: %s" % str(mFields))

			# If there's already a table with that name
			except r.errors.RqlRuntimeError as e:
				print_error(str(e))
				return False

		# Return OK
		return True

	# tableClear static method
	@classmethod
	def tableClear(cls, db={}):
		"""Table Clear

		Removes all records from the table

		Args:
			db (dict): Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			bool

		Raises
			SharedDocument.DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			try:

				# Try to delete all records in the table
				dRes = r \
					.db(dInfo['db']) \
					.table(dInfo['tree']._name) \
					.delete() \
					.run(oCon)

				# Return the number of rows delete
				return dRes['deleted']

			# If the table didn't exist
			except r.errors.RqlRuntimeError:
				print_error(str(e))
				return False

	# tableDelete static method
	@classmethod
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
			SharedDocument.DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			try:

				# Try to drop the table
				dRes = r \
					.db(dInfo['db']) \
					.table_drop(dInfo['tree']._name) \
					.run(oCon)

				# If the table wasn't dropped
				if 'tables_dropped' not in dRes or not dRes['tables_dropped']:
					return False

			# If the table didn't exist
			except r.errors.RqlRuntimeError:
				return False

		# Return ok
		return True

	# tableDump static method
	@classmethod
	def tableDump(cls, file=False, db={}):
		"""Table Dump

		Dumps a tables records, by default returns the data unless a file is
		passed in which case the data is stored as JSON to the file

		Arguments:
			file {str|False} -- Optional file path to store data as JSON
			db {dict} -- Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			bool

		Raises
			SharedDocument.DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			try:

				# Try to fetch all records in the table
				lRecords = [d for d in r \
					.db(dInfo['db']) \
					.table(dInfo['tree']._name) \
					.run(oCon)]

			# If the table didn't exist
			except r.errors.RqlRuntimeError:
				print_error(str(e))
				return False

		# If a file was passed
		if file:
			JSON.store(lRecords, file)

		# Else, return the records
		return lRecords

	# tree abstract static method
	@classmethod
	def struct(cls):
		"""Structure

		Returns the FormatOC Tree associated with the table

		Returns:
			FormatOC.Tree

		Raises:
			SharedDocument.DocumentException
		"""
		raise SharedDocument.DocumentException('child did not implement tree()')

	# update method
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
			SharedDocument.DocumentException
		"""

		# If nothing has changed
		if not self._dChanged:
			return False

		# If the instance lacks a primary key
		if self._dInfo['conf']['primary'] not in self._dData:
			raise SharedDocument.DocumentException('Can not update document with no primary key')

		# Create a cursor to update the existing document
		oCur = r \
			.db(self._dInfo['db']) \
			.table(self._dInfo['tree']._name) \
			.get(self._dData[self._dInfo['conf']['primary']])

		# If we are replacing
		if replace or (isinstance(self._dChanged, bool) and self._dChanged):
			oCur = oCur.replace(self._dData)

		# Else we are updating
		else:
			oCur = oCur.update(self._dChanged)

		# If revisions are turned on, generate an updated value
		if self._dInfo['conf']['revisions']:

			# Store the old revision
			sRev = self._dData['_rev']

			# If updating the revision results in no changes
			if not self._revision():
				return False

			# Get a connection to the server
			with connect_with(self._dInfo['server']) as oCon:

				# Find the document via the ID
				dDoc = r \
					.db(self._dInfo['db']) \
					.table(self._dInfo['tree']._name) \
					.get(self._dData[self._dInfo['conf']['primary']]) \
					.pluck(['_rev']) \
					.default(None) \
					.run(oCon)

				# If the document is not found
				if not dDoc:
					return False

				# If it is found, but the revisions don't match up
				if dDoc['_rev'] != sRev:
					raise SharedDocument.DocumentException("Document can not be updated because it is out of sync with the DB")

				# Update the document
				dRes = oCur.run(oCon)

		else:

			# Get a connection to the server
			with connect_with(self._dInfo['server']) as oCon:

				# Update the document
				dRes = oCur.run(oCon)

		# If there was an error
		if dRes['replaced'] != 1:
			print(dRes)
			return False

		# Clear the changed fields
		self._dChanged = {}

		# Return OK
		return True

	@classmethod
	def updateField(cls, field, old_val, new_val, db={}):
		"""Update Field

		Takes a specific field and changes all instances of old_val with new_val

		Arguments:
			field {str} -- Then name of the field
			old_val {mixed} -- The value to search for
			new_val {mixed} -- The value to replace old_val with
			db {dict} -- Optional DB info

		Returns:
			uint
		"""

		# Get the info
		dInfo = cls.info(db)

		# If the field doesn't exist
		if field not in dInfo['tree']:
			raise ValueError('%s not a valid field' % field)

		# Get a connection to the server
		with connect_with(dInfo['server']) as oCon:

			# Find the old value, replace it with the new
			dRes = r \
					.db(dInfo['db']) \
					.table(dInfo['tree']._name) \
					.filter({field: dInfo['tree'][field].clean(old_val)}) \
					.update({field: dInfo['tree'][field].clean(new_val)}) \
					.run(oCon)

		# Close the connection
		oCon.close()

		# Return the number of rows changed
		return dRes['replaced']
