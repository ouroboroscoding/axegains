# coding=utf8
""" SQL Module

Handles creating, storing to, and fetching from MariaDB SQL tables
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
import datetime
from decimal import Decimal
import re
import sys
import time

# Import pip modules
from enum import IntEnum
import MySQLdb

# Import shared modules
from . import Dictionaries as Dict, Document

# Init module variables
globalPrefix = Document.globalPrefix

## ESelect
class ESelect(IntEnum):
	ALL			= 1
	CELL		= 2
	COLUMN		= 3
	HASH		= 4
	HASH_ROWS	= 5
	ROW			= 6

# Exception
class SqlException(Exception):
	"""SqlException class

	Used for raising SQL specific exceptions

	Extends:
		Exception
	"""
	pass

# Connection exception
class SqlConnectException(SqlException):
	"""SqlConnectException class

	Used for raising connection specific exceptions

	Extends:
		SqlException
	"""
	pass

# Duplicate key exception
class SqlDuplicateException(SqlException):
	"""SqlDuplicateException class

	Used for raising issues with duplicate records

	Extends:
		SqlException
	"""
	pass

# MySQL class
class MySQL(object):
	"""MySQL class

	Extends:
		object
	"""

	# List of connections to MariaDB servers
	_dConnections	= dict()	# dictionary of objects

	# List of host details by name for ease of use
	_dHosts	= {}

	# Optional DB Prefix used for changing DB names across the board. e.g. for
	#	testing purposes
	_DB_PREFIX		= ''

	@classmethod
	def _clearConnection(cls, host, rel, ):
		"""Clear Connection

		Handles removing a connection from the global list

		Args:
			host (str): The name of the connection
			rel (str): The relationship of the server, master or slave

		Returns:
			None
		"""

		# Save the full name of the connection
		sName	= host + ':' + rel

		# If we have the connection
		if sName in cls._dConnections:

			# Try to close the connection just in case
			try:
				cls._dConnections[sName]['con'].close()

			except MySQLdb.ProgrammingError as e:

				print('\n------------------------------------------------------------')
				print('ProgrammingError in SQL_MySQL._clearConnection')
				print('name = ' + str(sName))
				print('args = ' + ', '.join([str(s) for s in e.args]))

			except Exception as e:

				print('\n------------------------------------------------------------')
				print('Unknown exception in SQL_MySQL._clearConnection')
				print('exception = ' + str(e.__class__.__name__))
				print('name = ' + str(sName))
				print('args = ' + ', '.join([str(s) for s in e.args]))

			del cls._dConnections[sName]

	@staticmethod
	def _converterTimestamp(ts):
		"""Converter Timestamp

		Converts timestamps received from MySQL into proper integers

		Args:
			ts (str): The timestamp to convert

		Returns:
			uint
		"""

		# If there is no time
		if ts == '0000-00-00 00:00:00':
			return 0

		# Get a datetime tuple
		tDT	= datetime.datetime.strptime(ts, '%Y-%m-%d %H:%M:%S')

		# Convert it to a timestamp and return it
		return int(tDT.strftime('%s'))

	@classmethod
	def _fetchConnection(cls, host, rel, errcnt=0, dictCursor=False):
		"""Fetch Connection

		Returns a connection to the given server, if there isn't one, it creates
		the instance and connects before return

		Args:
			host (str): The name of the instance to fetch
			rel (str): The relationship of the server, master or slave

		Returns:
			cursor
		"""

		# Save the full name of the connection
		sName	= host + ':' + rel

		# Get the current timestamp
		#iTS		= time.time()

		# If we already have the connection
		if sName in cls._dConnections:

			# If the connection is still valid
			#if cls._dConnections[sName]['ts'] > iTS:
			if dictCursor:	return cls._dConnections[sName]['con'].cursor(MySQLdb.cursors.DictCursor)
			else:			return cls._dConnections[sName]['con'].cursor()

			# Else, clear it
			#else:
			#	cls._clearConnection(host, rel)

		# If the host doesn't exist
		if host not in cls._dHosts:
			raise ValueError(cls.__name__ + '.' + sys._getframe().f_code.co_name + ' no such host "' + host + '"')

		# Get the config
		dConf	= cls._dHosts[host][rel]

		# If the config is a string
		if isinstance(dConf, basestring):

			# Then it represents the sibling, so get their data instead
			dConf	= cls._dHosts[host][dConf]

		# Create a new connection
		try:
			oDB	= MySQLdb.connect(**dConf)

			# Turn autocommit on
			oDB.autocommit(True)

			# Change conversions
			conv	= oDB.converter.copy()
			for k in conv:
				if k in [7]:			conv[k]	= cls._converterTimestamp
				elif k in [10,11,12]:	conv[k]	= str
			oDB.converter	= conv

		# If there was an error
		except MySQLdb.Error, e:

			# Increment the error count
			errcnt	+= 1

			# If we've hit our max errors, raise an exception
			if errcnt == 3:
				raise SqlConnectException('SQL connection error (' + str(e.args[0]) + '): ' + str(e.args[1]))

			# Else just sleep for a second and try again
			else:
				time.sleep(1)
				return cls._fetchConnection(host, rel, errcnt)

		# Store the connection
		cls._dConnections[sName]	= {
			'ts': 	time.time(),# + SQL.dSqlConfig['seconds_alive'],
			'con':	oDB
		}

		# Get the cursor
		if dictCursor:	oCur	= oDB.cursor(MySQLdb.cursors.DictCursor)
		else:			oCur	= oDB.cursor()

		# Make absolutely sure we're on UTF
		oCur.execute('SET NAMES utf8')

		# Return the connection
		return oCur

	@classmethod
	def addHost(cls, name, details):
		"""Add Host

		Adds a host entry to the list so that it can be used apps

		Args:
			name (str): The name of the host
			details (dict): The details needed to connect to the host

		Returns:
			None
		"""

		# Make sure name is a valid string
		if not isinstance(name, basestring):
			raise ValueError(cls.__name__ + '.' + sys._getframe().f_code.co_name + ' first argument (name) must be a string')

		# Store the details under the name
		cls._dHosts[name]	= details

	@classmethod
	def dbCreate(cls, name, server = 'default'):
		"""DB Create

		Creates a new DB on the given server

		Args:
			name (str): The name of the DB to create
			server (str): The name of the server to create the DB on

		Returns:
			bool
		"""

		try:
			cls.execute(server, "create database if not exists `%s`" % name)
			return True

		except SQL.SqlException:
			return False

	@classmethod
	def dbDrop(cls, name, server = 'default'):
		"""DB Drop

		Deletes an existing DB from the given server

		Args:
			name (str): The name of the DB to create
			server (str): The name of the server to create the DB on

		Returns:
			bool
		"""

		try:
			cls.execute(server, 'DROP DATABASE IF EXISTS `%s`' % name)
			return True

		except SQL.SqlException:
			return False

	@classmethod
	def escape(cls, host, value, rel='master', errcnt=0):
		"""Escape

		Used to escape string values for the DB

		Args:
			host (str): The name of the instance to escape for
			value (str): The value to escape
			rel (str): The relationship of the server, master or slave

		Returns:
			str
		"""

		# Get the connection
		oCur	= cls._fetchConnection(host, rel)

		# Get the value
		try:
			sRet	= oCur.connection.escape_string(value)

		# Else there's an operational problem so close the connection and
		#	restart
		except MySQLdb.OperationalError as e:

			# Close the cursor
			oCur.close()

			# Clear the connection, sleep for a second, and try again
			cls._clearConnection(host, rel)
			time.sleep(1)
			return cls.escape(host, value, rel, errcnt=errcnt)

		except Exception as e:

			# Close the cursor
			oCur.close()

			print('\n------------------------------------------------------------')
			print('Unknown Error in SQL_MySQL.escape')
			print('exception = ' + str(e.__class__.__name__))
			print('value = ' + str(value))
			print('args = ' + ', '.join([str(s) for s in e.args]))

			# Rethrow
			raise e

		# Close the cursor
		oCur.close()

		# Return the escaped string
		return sRet

	@classmethod
	def execute(cls, host, sql, errcnt=0):
		"""Execute

		Used to run SQL that doesn't return any rows

		Args:
			host (str): The name of the host
			sql (str|tuple): The SQL (or SQL plus a list) statement to run

		Returns:
			uint
		"""

		# Get the connection
		oCur		= cls._fetchConnection(host, 'master')

		try:

			# If the sql arg is a tuple we've been passed a string with a list for the purposes
			#	of replacing parameters
			if isinstance(sql, tuple):
				iRet	= oCur.execute(sql[0], sql[1])
			else:
				iRet	= oCur.execute(sql)

			# Close the cursor
			oCur.close()

			# Return the changed rows
			return iRet

		# If the SQL is bad
		except MySQLdb.ProgrammingError as e:

			# Close the cursor
			oCur.close()

			# Raise an SQL Exception
			raise SqlException(e.args[0], 'SQL error (' + str(e.args[0]) + '): ' + str(e.args[1]) + '\n' + str(sql))

		# Else, a duplicate key error
		except MySQLdb.IntegrityError as e:

			# Close the cursor
			oCur.close()

			# Raise an SQL Duplicate Exception
			raise SqlDuplicateException(e.args[0], e.args[1])

		# Else there's an operational problem so close the connection and
		#	restart
		except MySQLdb.OperationalError as e:

			# Close the cursor
			oCur.close()

			# If the error code is one that won't change
			if e.args[0] in [1054]:
				raise SqlException(e.args[0], 'SQL error (' + str(e.args[0]) + '): ' + str(e.args[1]) + '\n' + str(sql))

			# If the max error count hasn't been hit yet
			if errcnt < 5:

				# Clear the connection, sleep for a second, and try again
				cls._clearConnection(host, 'master')
				time.sleep(1)
				return cls.execute(host, sql, errcnt=errcnt+1)

			else:
				raise e

		# Else, catch any Exception
		except Exception as e:

			# Close the cursor
			oCur.close()

			print('\n------------------------------------------------------------')
			print('Unknown Error in SQL_MySQL.execute')
			print('exception = ' + str(e.__class__.__name__))
			print('errcnt = ' + str(errcnt))
			print('sql = ' + str(sql))
			print('args = ' + ', '.join([str(s) for s in e.args]))

			# Rethrow
			raise e

	@classmethod
	def getGlobalPrefix(cls):
		"""Get Global Prefix

		Gets the name of the currently set DB prefix

		Returns:
			str
		"""
		return cls._DB_PREFIX;

	@classmethod
	def hasHost(cls, name):
		"""Has Host

		Returns True if we already have the host stored

		Args:
			name (str): The name of the host to check for

		Returns:
			bool
		"""
		return name in cls._dHosts

	@classmethod
	def insert(cls, host, sql, errcnt=0):
		"""Insert

		Handles INSERT statements and returns the new ID. To insert records
		without auto_increment it's best to just stick to CSQL.execute()

		Args:
			host (str): The name of the host
			sql (str): The SQL statement to run

		Returns:
			mixed
		"""

		# Get the connection
		oCur	= cls._fetchConnection(host, 'master')

		try:

			# If the sql arg is a tuple we've been passed a string with a list for the purposes
			#	of replacing parameters
			if isinstance(sql, tuple):
				oCur.execute(sql[0], sql[1])
			else:
				oCur.execute(sql)

			# Get the ID
			mInsertID	= oCur.lastrowid

			# Close the cursor
			oCur.close()

			# Return the last inserted ID
			return mInsertID

		# If the SQL is bad
		except MySQLdb.ProgrammingError as e:

			# Close the cursor
			oCur.close()

			# Raise an SQL Exception
			raise SqlException(e.args[0], 'SQL error (' + str(e.args[0]) + '): ' + str(e.args[1]) + '\n' + str(sql))

		# Else, a duplicate key error
		except MySQLdb.IntegrityError as e:

			# Close the cursor
			oCur.close()

			# Raise an SQL Duplicate Exception
			raise SqlDuplicateException(e.args[0], e.args[1])

		# Else there's an operational problem so close the connection and
		#	restart
		except MySQLdb.OperationalError as e:

			# Close the cursor
			oCur.close()

			# If the error code is one that won't change
			if e.args[0] in [1054]:
				raise SqlException(e.args[0], 'SQL error (' + str(e.args[0]) + '): ' + str(e.args[1]) + '\n' + str(sql))

			# If the max error count hasn't been hit yet
			if errcnt < 5:

				# Clear the connection, sleep for a second, and try again
				cls._clearConnection(host, 'master')
				time.sleep(1)
				return cls.insert(host, sql, errcnt=errcnt+1)

			else:
				raise e


		# Else, catch any Exception
		except Exception as e:

			# Close the cursor
			oCur.close()

			print('\n------------------------------------------------------------')
			print('Unknown Error in SQL_MySQL.insert')
			print('exception = ' + str(e.__class__.__name__))
			print('errcnt = ' + str(errcnt))
			print('sql = ' + str(sql))
			print('args = ' + ', '.join([str(s) for s in e.args]))

			# Rethrow
			raise e

	@classmethod
	def select(cls, host, sql, seltype=ESelect.ALL, field=None, master=False, errcnt=0):
		"""Select

		Handles SELECT queries and returns the data

		Args:
			host (str): The name of the host
			sql (str): The SQL statement to run
			seltype (ESelect): The format to return the data in
			field (str): Only used by HASH_ROWS since MySQLdb has no ordereddict
				for associative rows
			master (bool): Set to true to run the select statement off the
				master and not the slave, necessary for functions that change
				data

		Returns:
			mixed
		"""

		# Get a cursor
		bDictCursor	= seltype in (ESelect.ALL, ESelect.HASH_ROWS, ESelect.ROW)

		# Get the connection
		sRel	= (master and 'master' or 'slave')
		oCur	= cls._fetchConnection(host, sRel, dictCursor=bDictCursor)

		try:
			# If the sql arg is a tuple we've been passed a string with a list for the purposes
			#	of replacing parameters
			if isinstance(sql, tuple):
				oCur.execute(sql[0], sql[1])
			else:
				oCur.execute(sql)

			# If we want all rows
			if seltype == ESelect.ALL:
				mData	= list(oCur.fetchall())

			# If we want the first cell 0,0
			elif seltype == ESelect.CELL:
				mData	= oCur.fetchone()
				if mData != None:
					mData	= mData[0]

			# If we want a list of one field
			elif seltype == ESelect.COLUMN:
				mData	= []
				mTemp	= oCur.fetchall()
				for i in mTemp:
					mData.append(i[0])

			# If we want a hash of the first field and the second
			elif seltype == ESelect.HASH:
				mData	= {}
				mTemp	= oCur.fetchall()
				for n,v in mTemp:
					mData[n]	= v

			# If we want a hash of the first field and the entire row
			elif seltype == ESelect.HASH_ROWS:
				# If the field arg wasn't set
				if field == None:
					raise SqlException('Must specificy a field for the dictionary key when using HASH_ROWS')

				mData	= {}
				mTemp	= oCur.fetchall()

				for o in mTemp:
					# Store the entire row under the key
					mData[o[field]]	= o

			# If we want just the first row
			elif seltype == ESelect.ROW:
				mData	= oCur.fetchone()

			# Close the cursor
			oCur.close()

			# Return the results
			return mData

		# If the SQL is bad
		except MySQLdb.ProgrammingError as e:

			# Close the cursor
			oCur.close()

			# Raise an SQL Exception
			raise SqlException(e.args[0], 'SQL error (' + str(e.args[0]) + '): ' + str(e.args[1]) + '\n' + str(sql))

		# Else, a duplicate key error
		except MySQLdb.IntegrityError as e:

			# Close the cursor
			oCur.close()

			# Raise an SQL Duplicate Exception
			raise SqlDuplicateException(e.args[0], e.args[1])

		# Else there's an operational problem so close the connection and
		#	restart
		except MySQLdb.OperationalError as e:

			# Close the cursor
			oCur.close()

			# If the error code is one that won't change
			if e.args[0] in [1054]:
				raise SqlException(e.args[0], 'SQL error (' + str(e.args[0]) + '): ' + str(e.args[1]) + '\n' + str(sql))

			# If the max error count hasn't been hit yet
			if errcnt < 5:

				# Clear the connection, sleep for a second, and try again
				cls._clearConnection(host, sRel)
				time.sleep(1)
				return cls.select(host, sql, seltype, errcnt=errcnt+1)

			else:
				raise e

		# Else, catch any Exception
		except Exception as e:

			# Close the cursor
			oCur.close()

			print('\n------------------------------------------------------------')
			print('Unknown Error in SQL_MySQL.select')
			print('exception = ' + str(e.__class__.__name__))
			print('errcnt = ' + str(errcnt))
			print('sql = ' + str(sql))
			print('args = ' + ', '.join([str(s) for s in e.args]))

			# Rethrow
			raise e

	@classmethod
	def setGlobalPrefix(cls, prefix):
		"""Set Global Prefix

		Use this to rename every DB so we can easily switch for testing and
		debugging. Will never be used in production.

		Args:
			prefix (str): The prefix for every DB name

		Returns:
			None
		"""
		cls._DB_PREFIX	= prefix;

# Document class
class Document(Document.BaseDocument):
	"""Table

	Handles all interaction with MySQL tables

	Extends: BaseDocument
	"""

	__nodeToSQL = {
		'any': False,
		'base64': False,
		'bool': 'tinyint(1)',
		'date': 'date',
		'datetime': 'datetime',
		'decimal': 'decimal',
		'float': 'double',
		'int': 'integer',
		'ip': 'char(15)',
		'json': 'text',
		'md5': 'char(32)',
		'price': 'decimal(8,2)',
		'string': False,
		'time': 'time',
		'timestamp': 'timestamp',
		'uint': 'integer unsigned',
		'uuid': 'char(36)'
	}
	"""Node To SQL

	Used as default values for FormatOC Node types to SQL data types
	"""

	# del method
	def delete(self):
		"""Delete

		Deletes the record represented by the instance

		Returns:
			bool

		Raises:
			DocumentException
		"""

		# If the instance lacks a primary key
		if self._dInfo['conf']['primary'] not in self._dData:
			raise DocumentException('Can not delete document with no primary key')

		# Generate the SQL
		sSQL = 'DELETE FROM `%s`.`%s` ' \
				'WHERE `%s` = %s' % (
					self._dInfo['db'],
					self._dInfo['tree']._name,
					self._dInfo['conf']['primary'],
					self.escape(self._dInfo['conf']['primary'], self._dData[self._dInfo['conf']['primary']])
				)

		print('Document.delete: %s' % sSQL);

		# Delete the record
		iRet = MySQL.execute(self._dInfo['server'], sSQL)

		# If no record was deleted
		if iRet != 1:
			return False

		# Remove the primary field from the record
		del self._dData[self._dInfo['conf']['primary']]

		# Clear the changed state
		self._dChanged.clear()

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
			DocumentException
		"""

		# Get the config values associated with the Tree
		dInfo = cls.info(db)

		# If there's no index and at least one ID passed
		if not index and _id:
			if not dInfo['conf']['primary']:
				raise DocumentException('Can not delete by primary key if none exists')
			index = dInfo['conf']['primary']

		# Build the statement
		sSQL	= 'DELETE FROM `%s`.`%s`' % (dInfo['db'], dInfo['tree']._name)

		# If we have IDs
		if id_ is not None:

			# If there's only one
			if not isinstance(_id, (tuple,list)):
				sSQL += ' WHERE `%s` = %s' % (index, cls.escape(index, id_, dInfo))

			else:
				sSQL += ' WHERE `%s` IN (%s)' % (index, ','.join([cls.escape(index, s, dInfo) for s in _id]))

		print('Document.deleteGet: %s' % sSQL);

		# Delete the records
		return MySQL.execute(dInfo['server'], sSQL)

	def deleteFilter(cls, obj, db={}):
		"""Delete Filter

		Look up records by a filter and delete them

		Arguments:
			obj {dict} -- A dictionary of field names to the values they should
				match
			db {dict} -- Optional DB info
				'server' for the name of the host info passed to server()
				'postfix' for the postfix added to the DB name

		Returns:
			uint: the number of records deleted

		Raises:
			DocumentException
		"""

		# Get the config values associated with the Tree
		dInfo = cls.info(db)

		# Go through each value
		lWhere = [];
		for n,v in obj.iteritems():

			# Generate theSQL and append it to the list
			lWhere.append(
				'`' + n + '` ' + cls.processValue(n, v, dInfo)
			)

		# Build the statement
		sSQL = 'DELETE FROM `%s`.`%s` WHERE %s' % (
					dInfo['db'],
					dInfo['tree']._name,
					' AND '.join(lWhere),
					)

		print('Document.deleteFilter: %s' % sSQL);

		# Delete the records
		return MySQL.execute(dInfo['server'], sSQL)

	# escape method
	@classmethod
	def escape(cls, field, value, info):
		"""Escape

		Takes a value and turns it into an acceptable string for SQL

		Args:
			field (str): The name of the field we are escaping
			value (mixed): The value to escape

		Returns:
			str
		"""

		# Get the type of field
		sType = info['tree'].get(field).type();

		# If we're escaping a bool
		if sType == 'Node.bool':

			# If it's already a bool or a valid int representation
			if isinstance(value, bool) or (isinstance(value, (int,long)) and value in [0,1,1L]):
				return (value and '1' or '0')

			# Else if it's a string
			elif isinstance(value, basestring):

				# If it's t, T, 1, f, F, or 0
				return (value in ('true', 'True', 'TRUE', 't', 'T', '1') and '1' or '0')

		# Else if it's an md5, return as is
		elif sType in ('Node.date', 'Node.datetime', 'Node.md5', 'Node.time', 'Node.uuid'):
			return "'" + value + "'"

		# Else if the valueue is a decimal valueue
		elif sType in ('Node.decimal', 'Node.float', 'Node.price'):
			return str(Decimal(value))

		# Else if the valueue is an integer valueue
		elif sType in ('Node.int', 'Node.uint'):
			return str(int(value))

		# Else if it's a timestamp
		elif sType == 'Node.timestamp' and (isinstance(value, int) or re.match('^\d+$', value)):
			return 'FROM_UNIXTIME(' + str(value) + ')'

		# Else it's a standard escape
		else:
			return "'" + MySQL.escape(info['server'], value) + "'"

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
			DocumentException
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
			DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

		# Generate the SELECT fields
		if not isinstance(raw, bool):
			sFields = '`' + '`,`'.join(raw) + '`'
		else:
			sFields = '`' + '`,`'.join(dInfo['tree'].keys()) + '`'

		# Go through each value
		lWhere = [];
		for n,v in obj.iteritems():

			# Generate theSQL and append it to the list
			lWhere.append(
				'`' + n + '` ' + cls.processValue(n, v, dInfo)
			)

		# If the order isn't set
		if orderby == None:
			sOrderBy	= ''

		# Else, generate it
		else:

			# If the field is a list of fields
			if isinstance(orderby, (list, tuple)):

				# Go through each field
				lOrderBy	= []
				for i in orderby:
					lOrderBy.append('`' + i + '`')
				sOrderBy	= 'ORDER BY ' + ','.join(lOrderBy)

			# Else there's only one field
			else:
				sOrderBy	= 'ORDER BY `' + orderby + '`'

		# Build the statement
		sSQL = 'SELECT %s FROM `%s`.`%s` ' \
				'WHERE %s ' \
				'%s' % (
					sFields,
					dInfo['db'],
					dInfo['tree']._name,
					' AND '.join(lWhere),
					sOrderBy
				)

		print('Document.filter: %s' % sSQL);

		# Get all the records
		lRecords = MySQL.select(dInfo['server'], sSQL, ESelect.ALL)

		# If there's no data
		if not lRecords:
			return []

		# If Raw requested, return as is
		if raw:
			return lRecords

		# Else create instances for each
		else:
			return [cls(d, db) for d in lRecords]

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
			"engine":"InnoDB",
			"charset":"utf8",
			"collate":"utf8_bin",
			"create":tree.keys(),
			"indexes": {},
			"primary": "id",
			"revisions": False
		}, tree.special('mysql', default={}))

		# If there's no name throw an exception
		if not tree._name:
			raise DocumentException('Tree must contain a __name__ field to be used by SQL.Document')

		# Return the config
		return dConf

	# get static method
	@classmethod
	def get(cls, _id=None, raw=None, db={}):
		"""Get

		Returns one or more records from the table. Send no ID to fetch all
		records in the table. Set an index to look for something other than the
		primary key

		Args:
			_id (str|str[]): The ID(s) to fetch from the table
			index (str): If set, used as the index to search instead of the
				primary key
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

		# Assume multiple records
		bMultiple = True

		# Get the info
		dInfo = cls.info(db)

		# If there's no primary key
		if not dInfo['conf']['primary']:
			raise DocumentException('Can not get by primary key if none exists')

		# Start the SQL
		sSQL = 'SELECT '

		# Generate the SELECT fields
		if not isinstance(raw, bool):
			sSQL += '`' + '`,`'.join(raw) + '` '
		else:
			sSQL += '`' + '`,`'.join(dInfo['tree'].keys()) + '` '

		# Continue SQL
		sSQL += 'FROM `%s`.`%s` ' % (dInfo['db'], dInfo['tree']._name)

		# If we have IDs
		if id_ is not None:

			# If there's only one
			if not isinstance(_id, (tuple,list)):
				sSQL += 'WHERE `%s` = %s ' % (dInfo['conf']['primary'], cls.escape(index, id_, dInfo))
				bMultiple = False
			else:
				sSQL += 'WHERE `%s` IN (%s) ' % (dInfo['conf']['primary'], ','.join([cls.escape(index, s, dInfo) for s in _id]))

		print('Document.get: %s' % sSQL);

		# Run the query
		lRecords = MySQL.select(dInfo['server'], sSQL)

		# If we are expecting a single record
		if not bMultiple:

			# Return based on result and raw or not
			if not lRecords: return None
			elif raw: return lRecords[0]
			else: return cls(lRecords[0], db)

		# If we expect multiple records
		else:

			# Return based on result and raw or not
			if not lRecords: return []
			elif raw: return lRecords
			else: return [cls(d, db) for d in lRecords]

	# insert method
	def insert(self, ignore=False):
		"""Insert

		Inserts the current instance's data as a new record in the table and
		returns the ID regardless if it was given or generated

		Args:
			ignore (bool): If true, conflicts are ignored

		Returns:
			mixed: None if no record was created
		"""

		# Clean conflict
		if conflict not in ('error', 'replace', 'update'):
			conflict = 'error'

		# If revisions are turned on, generate a new value
		if self._dInfo['conf']['revisions']:
			self._revision(True)

		# Create the string of all fields and values but the primary if it's
		#	auto incremented
		lTemp = [[], []]
		for f in self.dInfo['tree'].keys():
			if (f != self._dInfo['conf']['primary'] or not self._dInfo['conf']['auto_id']) and f in self._dData:
				lTemp[0].append('`%s`' % f)
				if self._dData[f] != None:
					lTemp[1].append(self.escape(f, self._dData[f], self._dInfo))
				else:
					lTemp[1].append('NULL')

		sFields	= ','.join(lTemp[0])
		sValues	= ','.join(lTemp[1])

		# Cleanup
		del lTemp

		# Generate the statement
		sSQL = 'INSERT %s INTO `%s`.`%s` (%s)' \
				' VALUES (%s)' % (
					(ignore and 'IGNORE' or ''),
					self._dInfo['db'],
					self._dInfo['tree']._name,
					sFields,
					sValues
				)

		# If the primary key does not auto increment don't worry about storing
		#	the new ID
		if self._dInfo['conf']['auto_id']:
			self._dData[self._dInfo['conf']['primary']] = MySQL.insert(self._dInfo['server'], sSQL)
			return self._dData[self._dInfo['conf']['primary']]
		else:
			if not MySQL.execute(self._dInfo['server'], sSQL):
				return None
			else:
				return True

	@classmethod
	def insertMany(cls, records, ignore=False, db={}):
		"""Insert Many

		Static method to create many records all at once. Works exactly like
		insert, but expects data to be passed in, instead of fetched from the
		current instance

		Args:
			records (dict[]): The list of dictionaries representing records
			ignore (bool): If set ignore duplicate key errors
			db (dict): Optional db info, 'host' and 'postix'

		Returns:
			None
		"""

		# Get the info
		dInfo = cls.info(db)

		# Create the string of all fields and values but the primary if it's
		#	auto incremented
		lData = [[], []]
		for f in self.dInfo['tree'].keys():

			# Append the field
			lData[0].append('`%s`' % f)

			# Loop through each record
			for i in xrange(len(records)):

				# If the list doesn't exist yet
				try: lData[1][i]
				except IndexError: lData[1].append([])

				# If there's a value
				if f not in records[i] or records[i][f] == None:
					lData[1][i].append('NULL')

				# Else, escape and add the value
				else:
					lData[1][i].append(cls.escape(f, records[i][f], dInfo))

		# Generate the string of field names
		sFields = ','.join(lData[0])

		# Go through each record and turn it into a VALUES string
		for i in xrange(len(records)):
			lData[1][i] = ','.join(lData[1][i])

		# Join all the VALUES
		sValues	= '),('.join(lData[1])

		# Cleanup
		del lData

		# Should we ignore duplicate keys?
		sIgnore = (ignore and 'IGNORE ' or '')

		# Generate the statement
		sSQL = 'INSERT %sINTO `%s`.`%s` (%s)' \
				' VALUES (%s)' % (
					sIgnore, sDB, sTable, sFields, sValues
				);

		# Insert all the records
		MySQL.execute(dInfo['server'], sSQL)

	# processValue static method
	@classmethod
	def processValue(cls, field, value, info):
		"""Process Value

		Takes a field and a value or values and returns the proper SQL
		to look up the values for the field

		Args:
			field (str): The name of the field
			value (mixed): The value as a single item, list, or dictionary
			info (dict): Instance related info

		Returns:
			str
		"""

		# If the value is a list
		if isinstance(value, (list,tuple)):

			# Build the list of values
			lValues = []
			for i in value:
				# If it's None
				if i is None: lValues.append('NULL')
				else: lValues.append(cls.escape(field, i, info))

			sRet = 'IN (%s)' % ','.join(lValues)

		# Else if the value is a dictionary
		elif isinstance(value, dict):

			# If it has a start and end
			if 'start' in value and 'end' in value:
				sRet = 'BETWEEN %s AND %s' % (
							cls.escape(field, value['start'], info),
							cls.escape(field, value['end'], info)
						)

			# Else if we have a less than
			elif 'lt' in value:
				sRet = '< ' + cls.escape(field, value['lt'], info)

			# Else if we have a greater than
			elif 'gt' in value:
				sRet = '> ' + cls.escape(field, value['gt'], info)

			# Else if we have a less than equal
			elif 'lteq' in value:
				sRet = '<= ' + cls.escape(field, value['lteq'], info)

			# Else if we have a greater than equal
			elif 'gteq' in value:
				sRet = '>= ' + cls.escape(field, value['gteq'], info)

			# Else if we have a not equal
			elif 'neq' in value:
				sRet = '!= ' + cls.escape(field, value['neq'], info)

		# Else it must be a single value
		else:

			# If it's None
			if value is None: sRet = '= NULL'
			else: sRet = '= ' + cls.escape(field, value, info)

		# Return the processed value
		return sRet

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
			DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

		# Generate the list of fields
		sFields = ', '.join(['`%s` %s %s' % (
			f,
			dInfo['tree'][f].special('sql_type', default=cls.__nodeToSQL[dInfo['tree'][f]._type]),
			dInfo['tree'][f].special('sql_opts', default='')
		) for f in dInfo['conf']['create']])

		# Go through the indexes filling in missing bits
		dIndexes = {}
		for i in dInfo['conf']['indexes']:

			# If we only got a string
			if isinstance(dInfo['conf']['indexes'][i], basestring):
				dIndexes[i] = {
					"type": "",
					"fields": [dInfo['conf']['indexes'][i]]
				}

			# If we got a list of fields
			elif isinstance(dInfo['conf']['indexes'][i], (list,tuple)):
				dIndexes[i] = {
					"type": "",
					"fields": dInfo['conf']['indexes']
				}

			# Else hopefully we got a dictionary with the right keys
			else:
				dIndexes[i] = dInfo['conf']['indexes'][i]

		# Generate the list of indexes
		sIndexes = ', '.join(['%sindex `%s` (`%s`)' % (
			(d['type'] == 'unique' and 'unique ' or ''),
			f,
			'`,`'.join(d['fields'])
		) for f,d in dIndexes.iteritems()])

		# If there's a primary key
		if(dInfo['conf']['primary']):
			sIndexes = 'primary key (`%s`)%s' % (
							dInfo['conf']['primary'],
							(len(sIndexes) and ', ' + sIndexes or '')
						)

		# Generate the final SQL
		sSQL = 'create table if not exists `%s`.`%s` (%s, %s) '\
				'ENGINE=%s CHARSET=%s COLLATE=%s;' % (
					dInfo['db'],
					dInfo['tree']._name,
					sFields, sIndexes,
					dInfo['conf']['engine'],
					dInfo['conf']['charset'],
					dInfo['conf']['collate']
				)

		print(sSQL)

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
			DocumentException
		"""

		# Get the info
		dInfo = cls.info(db)

	# tree abstract static method
	@classmethod
	def struct(cls):
		"""Structure

		Returns the FormatOC Tree associated with the table

		Returns:
			FormatOC.Tree

		Raises:
			DocumentException
		"""
		raise DocumentException('child did not implement tree()')

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
			DocumentException
		"""

		# If nothing has changed
		if not self._dChanged:
			return False

		# If the instance lacks a primary key
		if self._dInfo['conf']['primary'] not in self._dData:
			raise DocumentException('Can not update document with no primary key')

		# If revisions are turned on, generate an updated value
		if self._dInfo['conf']['revisions']:

			# Store the old revision
			sRev = self._dData['_rev']

			# If updating the revision results in no changes
			if not self._revision():
				return False

			# Find the document via the ID
			sSQL = 'SELECT `_rev` FROM `%s`.`%s` WHERE `%s` = %s' % (
						self._dInfo['db'],
						self._dInfo['tree']._name,
						self._dInfo['conf']['primary'],
						self.escape(
							self._dInfo['conf']['primary'],
							self.__dData[self._dInfo['conf']['primary']],
							self._dInfo
						)
					)

			dDoc = MySQL.select(self._dInfo['server'], sSQL, ESelect.ROW)

			# If the document is not found
			if not dDoc:
				return False

			# If it is found, but the revisions don't match up
			if dDoc['_rev'] != sRev:
				raise DocumentException("Document can not be updated because it is out of sync with the DB")

		# Create the string of all fields and values but the primary
		lTemp = []
		for f in self._dInfo['tree'].keys():
			if f != self._dInfo['conf']['primary'] and (force or self._dChanged == True or (isinstance(self._dChanged, dict) and f in self._dChanged)):
				if self._dData[f] != None: sVal = cls.escape(f, self._dData[f], self._dInfo)
				else: sVal = 'NULL'
				lTemp.append('`%s` = %s' % (f, sVal))
		sFields = ', '.join(lTemp)

		# If there's nothing to update
		if sFields == '':
			return False;

		# Generate SQL
		sSQL = 'UPDATE `%s`.`%s` SET %s ' \
				'WHERE `%s` = %s' % (
					self._dInfo['db'],
					self._dInfo['tree']._name,
					sFields,
					self._dInfo['conf']['primary'],
					cls.escape(
						self._dInfo['conf']['primary'],
						self._dData[self._dInfo['conf']['primary']],
						self._dInfo
					)
				)

		# Update the record
		MySQL.execute(self._dInfo['server'], sSQL)

		# Clear changed fields
		self._dChanged.clear()

		# Return that we updated
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

		# Generate the SQL to update the field
		sSQL = 'UPDATE `%s`.`%s` ' \
				'SET `%s` %s ' \
				'WHERE `%s` %s' % (
			dInfo['db'],
			dInfo['tree']._name,
			field, cls.processValue(oField, new_val, dInfo['server']),
			field, cls.processValue(oField, old_val, dInfo['server'])
		)

		# Update all the records
		return MySQL.execute(dInfo['server'], sSQL)
