# coding=utf8
"""JSON

Wrapper for Python json module which handles custom types
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
import json
from datetime import datetime
from decimal import Decimal
import os

# _byteify function
def _byteify(input_):
	"""Byteify

	Turns unicode strings into utf-8

	Args:
		input_ (str|dict|list): The object or string to byteify

	Returns:
		mixed
	"""

	# If we were passed a dictionary
	if isinstance(input_, dict):
		return {_byteify(key):_byteify(value) for key,value in input_.iteritems()}

	# Else if we were passed a list
	elif isinstance(input_, (list,tuple)):
		return [_byteify(element) for element in input_]

	# Else if we have a unicode string
	elif isinstance(input_, unicode):
		return input_.encode('utf8')

	# Else, return as is
	else:
		return input_

# decode function
def decode(s):
	"""Decode

	Handles decoding JSON, as a string, into objects/values

	Args:
		s (str): The JSON to decode

	Returns:
		mixed
	"""
	oJSON	= json.loads(s, parse_float=Decimal, encoding='utf8')
	return _byteify(oJSON)

# decodef function
def decodef(f):
	"""Decode File

	Handles decoding JSON, from a file, into objects/values

	Args:
		f (file-like object): An instance of a file object with read/write
			methods

	Returns:
		mixed
	"""
	oJSON	= json.load(f, parse_float=Decimal, encoding='utf8')
	return _byteify(oJSON)

# encode function
def encode(o):
	"""Encode

	Handles encoding objects/values into a JSON string

	Args:
		o (mixed): The object or value to encode

	Returns:
		str
	"""
	s	= json.dumps(o, cls=CEncoder)
	return s

# encodef function
def encodef(o, f):
	"""Encode File

	Handles encoding objects/values into JSON and storing them in the given file

	Args:
		o (mixed): The object or value to encode
		f (file-like object): An instance of a file object with read/write
			methods

	Returns:
		None
	"""
	return json.dump(o, f, cls=CEncoder)

# load function
def load(filepath):
	"""Load

	Loads a data structure from a JSON file given a full or relative path to it

	Args:
		filepath (str): The path to the file to load

	Returns:
		mixed
	"""

	# If ~ is present
	if '~' in filepath:
		filepath = os.path.expanduser(filepath)

	# Load the file
	with open(filepath, 'r') as oFile:

		# Convert it to a python variable and return it
		return decode(oFile.read())

# store function
def store(data, filepath):
	"""Store

	Converts an object/value into JSON and stores it in the file path given

	Args:
		filepath (str): The full or relative path to the file

	Returns:
		None
	"""

	# If ~ is present
	if '~' in filepath:
		filepath = os.path.expanduser(filepath)

	# Open a file to write the data
	with open(filepath, 'w') as oFile:

		# Write the JSON to the file
		oFile.write(encode(data))

# CEncoder class
class CEncoder(json.JSONEncoder):
	"""Encoder

	Handles encoding types the default JSON encoder can't handle

	Extends:
		json.JSONEncoder
	"""

	# default method
	def default(self, obj):
		"""Default

		Called when the regular Encoder can't figure out what to do with the
		type

		Args:
			obj (mixed): An unknown object or value that needs to be encoded

		Returns:
			str
		"""

		# If we have a datetime object
		if isinstance(obj, datetime):
			return obj.strftime('%Y-%m-%d %H:%M:%S')

		# Else if we have a decimal object
		elif isinstance(obj, Decimal):
			return '{0:f}'.format(obj)

		# Bubble back up to the parent default
		return json.JSONEncoder.default(self, obj)
