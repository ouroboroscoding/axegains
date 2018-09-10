# coding=utf8
""" Rest Service

Handles all REST requests
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
from base64 import b64decode, b64encode
import mimetypes
from time import time

# Include shared modules
from modules import Config, Services, SSS, Storage
import modules.Dictionaries as Dict
from modules.OS import print_error
from modules.Services import Result, ResultError, ServiceException

class Rest(Services.Service):
	"""Rest Service class

	Service for Rest

	Extends: shared.Services.Service
	"""



	_signupCreate(self, data):
		"""Signup

		Creates a new users on the system

		Arguments:
			data {dict} -- The data passed to the request

		Returns:
			Result
		"""

		# Check arguments
		aErrs = Dict.validate(data, ['name', 'password'])
		if aErrs: return ResultError((1, ', '.join(aErrs)))

		# See if the user already exists
		dUser = User.findByField('name', data['name'])
		if dUser:
			return ResultErrro((100, data['name']))

		# Create a user instance
		try:
			oUser = User({
				"_created": int(time()),
				"name": data['name'],
				"passwd": User.passwordHash(data['passwd']),
				"active": True,
				"verified": False
			})

		except ValueError as e:
			return ResultError((1, e.args[0]))

		# Add the user to the database
		oUser.insert()

	@classmethod
	def install(cls):
		"""Install

		The service's install method, used to setup storage or other one time
		install configurations

		Returns:
			bool
		"""
		return True
