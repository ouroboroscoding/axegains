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
from modules import Config, Services, Session, SSS, Storage, Strings
import modules.Dictionaries as Dict
from modules.OS import print_error
from modules.Services import Result, ResultError, ServiceException

# Include local modules
from .Structures import Session, Stats, User

class Rest(Services.Service):
	"""Rest Service class

	Service for Rest

	Extends: shared.Services.Service
	"""

	def _signinCreate(self, data):
		"""Signin

		Signs a user into the system

		Arguments:
			data {dict} -- The data passed to the request

		Returns:
			Result
		"""

		# Check arguments
		aErrs = Dict.validate(data, {"user": ['name', 'passwd']})
		if aErrs: return ResultError((1, ', '.join(aErrs)))

		return Result(True)

	def _signupCreate(self, data):
		"""Signup

		Creates a new user on the system

		Arguments:
			data {dict} -- The data passed to the request

		Returns:
			Result
		"""

		# Check arguments
		aErrs = Dict.validate(data, {"user": ['name', 'passwd']})
		if aErrs: return ResultError((1, ', '.join(aErrs)))

		# See if the user already exists
		dUser = User.get(data['user']['name'], index='name')
		if dUser:
			return ResultErrro((100, data['name']))

		# If the password is not already encrypted
		if len(data['user']['passwd']) != 72 or not Strings.isHex(data['user']['passwd']):

			# Encrypt the passwd
			data['user']['passwd'] = User.passwordHash(data['user']['passwd'])

		# Add data to the User
		data['user']['_created'] = int(time())
		data['user']['active'] = True
		data['user']['verified'] = False

		# If we have an email
		if 'email' in data['user']:

			# Validate the e-mail format
			tRes = parseEmail(data['email'])

			# If the address is not valid
			if tRes[0] == '' and tRes[1] == '':
				return ResultError(101)

		# Create a user instance
		try:
			oUser = User(data['user'])
		except ValueError as e:
			return ResultError((1, e.args[0]))

		# Add the user to the database
		oUser.insert()

		# If we don't already have a session, create one
		if 'session' not in data:
			oSess = Session.create()

		# Else, load the existing session
		else:
			oSess = Session.start(data['session'])

		# Add the user ID to it
		oSess['user'] = {"_id":oUser['_id']}
		oSess.save()

		# Return the session token
		return Result(oSess._token)

	@classmethod
	def install(cls):
		"""Install

		The service's install method, used to setup storage or other one time
		install configurations

		Returns:
			bool
		"""
		return True
