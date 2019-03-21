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

# Python imports
import re
from time import time

# Framework imports
from RestOC import Conf, DictHelper, Record_ReDB, Services, Sesh, StrHelper

# Shared imports
from shared import SSS

# Service imports
from .Records import Thrower

# Regex for validating email
_emailRegex = re.compile(r"[^@\s]+@[^@\s]+\.[a-zA-Z0-9]{2,}$")

class Auth(Services.Service):
	"""Auth Service class

	Service for Authorization, sign in, sign up, etc.

	Extends: shared.Services.Service
	"""

	_install = [Thrower]
	"""Record types called in install"""

	def signinCreate(self, data):
		"""Signin

		Signs a user into the system

		Arguments:
			data {dict} -- The data passed to the request

		Returns:
			Result
		"""

		# Check arguments
		aErrs = DictHelper.validate(data, {"user": ['name', 'passwd']})
		if aErrs: return Services.Effect(error=(1, ', '.join(aErrs)))

		return Services.Effect(True)

	def signupCreate(self, data):
		"""Signup

		Creates a new user on the system

		Arguments:
			data {dict} -- The data passed to the request

		Returns:
			Result
		"""

		# Verify fields
		try: DictHelper.eval(data, ['alias', 'passwd'])
		except ValueError as e: return Services.Effect(error=(103, [(f, "missing") for f in e.args]))

		# Make sure the email is valid structurally
		if 'email' in data and not _emailRegex.match(data['email']):
			return Services.Effect(error=(103, [('email', 'invalid')]))

		# Make sure the password is strong enough
		if not Thrower.passwordStrength(data['passwd']):
			return Services.Effect(error=508)

		# Look for someone else with that alias
		dThrower = Thrower.get(data['alias'], index='alias', raw=['_id'])
		if dThrower:
			return Services.Effect(error=(400, data['alias']))

		# If no language was passed
		if 'locale' not in data:
			data['locale'] = 'en-US'

		# If the password is not already encrypted
		if len(data['passwd']) != 72 or not Strings.isHex(data['passwd']):

			# Encrypt the passwd
			data['passwd'] = Thrower.passwordHash(data['passwd'])

		# Init the thrower data
		dThrower = {
			"_created": int(time()),
			"alias": data['alias'],
			"locale": data['locale'],
			"passwd": Thrower.passwordHash(data['passwd']),
			"verified": StrHelper.random(32, '_0x')
		}

		# If there's an email
		if 'email' in data:
			dThrower['email'] = data['email']
			dThrower['verified'] = StrHelper.random(32, '_0x')
		else:
			dThrower['verified'] = False

		# Create an instance
		try:
			oThrower = Thrower(dThrower)
		except ValueError as e:
			return Services.Effect(error=(103, e.args[0]))

		# Store the instance
		if not oThrower.create(changes={"creator":"signup"}):
			return Services.Effect(error=300)

		# If there's an e-mail
		if 'email' in data:

			# Send en e-mail for verification
			dConf = Conf.get("domain")
			sURL = "%s://external.%s/verify/%s/%s" % (
				dConf['protocol'],
				dConf['primary'],
				oProfile['_id'],
				oProfile['verified']
			)
			oEffect = Services.create('communications', 'email', {
				"_internal_": Services.internalKey(),
				"from": "noreply@%s" % dConf['primary'],
				"html_body": Templates.generate('email/verify.html', {"url":sURL}, data['locale']),
				"subject": Templates.generate('email/verify_subject.txt', {}, data['locale']),
				"to": data['email'],
			})
			if oEffect.errorExists():
				return oEffect

		# If we don't already have a session, create one
		if 'session' not in data:
			oSess = Sesh.create()

		# Else, load the existing session
		else:
			oSess = Sesh.start(data['session'])

		# Add the user ID to it
		oSess['user'] = {"_id":oThrower['_id']}
		oSess.save()

		# Return the session token
		return Services.Effect(oSess.id())

	@classmethod
	def install(cls):
		"""Install

		The service's install method, used to setup storage or other one time
		install configurations

		Returns:
			bool
		"""

		# Go through each Record type
		for o in cls._install:

			# Install the table
			if not o.tableCreate():
				print("Failed to create `%s` table" % o.tableName())
