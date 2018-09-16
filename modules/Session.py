# coding=utf8
""" Session Module

Handles sessions used by the services to keep track of login users
"""

# Import future
from __future__ import print_function, absolute_import

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2018-09-12"

# Import python modules
from hashlib import md5

# Import pip modules
from redis import StrictRedis

# Import project modules
from . import JSON, Strings

# Module variables
_moRedis = None

# Init function
def init(conf):
	"""Init

	Initialises the module

	Args:
		conf (dict): The necessary Redis config

	Returns:
		None
	"""

	# Pull in the module variable
	global _moRedis

	# Create the Redis connection
	_moRedis	= StrictRedis(**conf)

# ApiSession class
class Session(object):
	"""Session

	Class for handling session data

	Extends:
		object
	"""

	# constructor
	def __init__(self, *args, **kwargs):
		"""Constructor

		Instantiates the internal dict instance

		Args:
			args (list): List arguments
			kwargs (dict): Dict arguments

		Returns:
			ApiSession
		"""

		self.__dStore = {}
		self.__dStore.update(*args, **kwargs)

	# __contains__ method
	def __contains__(self, key):
		"""__contains__

		Returns true if the specific key exists in the session

		Args:
			key (str): The field to check for

		Returns:
			bool
		"""
		return key in self.__dStore

	# __delitem__ method
	def __delitem__(self, key):
		"""__delete__

		Deletes a specific key from the session

		Args:
			key (str): The key to delete

		Returns:
			None
		"""
		del self.__dStore[key]

	# __getitem__ method
	def __getitem__(self, key):
		"""__getitem__

		Returns a specific key from the dict

		Args:
			key (str): The key to return

		Returns:
			mixed
		"""
		return self.__dStore[key]

	# __iter__ method
	def __iter__(self):
		"""__iter__

		Return an iterator for the session

		Returns:
			iterator
		"""
		return iter(self.__dStore)

	# __len__ method
	def __len__(self):
		"""__len__

		Returns the count of keys in the dict

		Returns:
			uint
		"""
		return len(self.__dStore)

	# __setitem__ method
	def __setitem__(self, key, value):
		"""__setitem__

		Sets a specific key in the dict

		Args:
			key (str): The key to store the value under
			value (mixed): The value to store under the key

		Returns:
			None
		"""
		self.__dStore[key]	= value

	# __str__ method
	def __str__(self):
		"""__str__

		Returns a string representation of the session

		Returns:
			str
		"""
		return str(self.__dStore)

	# addLock method
	def addLock(self, _type, _id):
		"""Add Lock

		Adds a lock to a particular type given its ID

		Args:
			_type (str): The type of object to lock
			_id (mixed): The unique ID of the object type

		Returns:
			None
		"""

		if isinstance(_id, (list,tuple)):
			_id	= '|'.join([str(i) for i in _id])

		_moRedis.sadd('locked_%ss' % str(_type), _id)

	# close method
	def close(self):
		"""Close

		Closes the session, deleting it from the cache

		Returns:
			None
		"""

		# Delete the record from Redis
		_moRedis.delete(self._token)

	# create classmethod
	@classmethod
	def create(cls):
		"""Create

		Create a new session and returns it

		Returns:
			ApiSession
		"""

		# Create a new instance
		oRet = cls()

		# Generate a random string
		sRand = Strings.random(16)

		# Add the token to the session
		oRet._token = md5(sRand).hexdigest()

		# Now return the new session
		return oRet

	# isLocked method
	def isLocked(self, _type, _id):
		"""Is Locked

		Returns true if the given ID is locked

		Args:
			_type (str): The type of object to check
			_id (mixed): A unique ID for the given type

		Returns:
			bool
		"""

		if isinstance(_id, (list,tuple)):
			_id	= '|'.join([str(i) for i in _id])

		return _moRedis.sismember('locked_%ss' % str(_type), _id)

	# removeLock method
	def removeLock(self, _type, _id):
		"""Remove Lock

		Removes a lock from a particular type given the ID

		Args:
			_type (str): The type of object to remove the lock on
			_id (mixed): A unique ID for the given type

		Returns:
			bool
		"""

		if isinstance(_id, (list,tuple)):
			_id = '|'.join([str(i) for i in _id])

		_moRedis.srem('locked_%ss' % str(_type), _id)

	# save method
	def save(self):
		"""Save

		Saves the session so it can be fetched by other processes

		Returns:
			None
		"""

		# Dump the data to a JSON string
		sJSON = JSON.encode(self.__dStore)

		# @TODO reduce session time (I need it long for development)
		_moRedis.setex(self._token, 86400, sJSON)

	# start classmethod
	@classmethod
	def start(cls, token):
		"""Start

		Fetches an existing session if it exists and is valid, else it creates a
		new one, and returns it

		Args:
			token (str): The unique token of an existing session

		Returns:
			ApiSession
		"""

		# Fetch from Redis
		o = _moRedis.get(token)

		# If there's no session or it expired
		if o == None:
			return None

		# Else decode the JSON and create a new instance with it
		return cls(JSON.decode(o))

	# update method
	def update(self):
		"""Update

		Update the session with the latest data from Redis

		Returns:
			None
		"""

		# Fetch from Redis
		o = _moRedis.get(self._token)

		# If there's no session or it expired
		if o == None:
			self.__dStore = {}

		# Else decode the JSON and update the current instance
		self.__dStore = JSON.decode(o)
