# coding=utf8
""" Auth Service

Handles all Auth / Thrower requests
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
from RestOC import Conf, DictHelper, Record_ReDB, Services, \
					Sesh, StrHelper, Templates

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

	def passwdForgotCreate(self, data):
		"""Password Forgot (Generate)

		Creates the key that will be used to allow a user to change their
		password if they forgot it

		Arguments:
			data {dict} -- Data sent with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['email'])
		except ValueError as e: return Services.Effect(error=(103, [(f, "missing") for f in e.args]))

		# Look for the thrower by email
		oThrower = Thrower.get(data['email'], index='email', limit=1)
		if not oThrower:
			return Services.Effect(True)

		# Is there already a key in the thrower?
		if 'forgot' in oThrower and 'regenerate' not in data:

			# Is it not expired expired?
			if oThrower['forgot']['expires'] > int(time()):
				return Services.Effect(error=402)

		# Update the thrower with a timestamp (for expiry) and the key
		sKey = StrHelper.random(32, '_0x')
		oThrower['forgot'] = {
			"expires": int(time()) + 300,
			"key": sKey
		}
		oThrower.save(changes=False)

		# Email the user the key
		dConf = Conf.get("domain")
		oEffect = Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"from": "noreply@%s" % dConf['primary'],
			"html_body": Templates.generate('email/forgot.html', {"key":sKey}, oThrower['locale']),
			"subject": Templates.generate('email/forgot_subject.txt', {}, oThrower['locale']),
			"to": data['email'],
		})
		if oEffect.errorExists():
			return oEffect

		# Return OK
		return Services.Effect(True)

	def passwdForgotUpdate(self, data):
		"""Password Forgot (Change Password)

		Validates the key and changes the password to the given value

		Arguments:
			data {dict} -- Data sent with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['email', 'passwd', 'key'])
		except ValueError as e: return Services.Effect(error=(103, [(f, "missing") for f in e.args]))

		# Look for the thrower by email
		oThrower = Thrower.get(data['email'], index='email', limit=1)
		if not oThrower:
			return Services.Effect(error=403) # Don't let people know if the email exists or not

		# Check if we even have a forgot section, or the key has expired, or the
		#	key is invalid
		if 'forgot' not in oThrower or \
			oThrower['forgot']['expires'] <= int(time()) or \
			oThrower['forgot']['key'] != data['key']:
			return Services.Effect(error=403)

		# Make sure the new password is strong enough
		if not Thrower.passwordStrength(data['passwd']):
			return Services.Effect(error=404)

		# Store the new password and update
		oThrower['passwd'] = Thrower.passwordHash(data['passwd'])
		oThrower.save(changes=False)

		# Return OK
		return Services.Effect(True)

	def signinCreate(self, data):
		"""Signin

		Signs a user into the system

		Arguments:
			data {dict} -- The data passed to the request

		Returns:
			Result
		"""

		# Verify fields
		try: DictHelper.eval(data, ['alias', 'passwd'])
		except ValueError as e: return Services.Effect(error=(103, [(f, "missing") for f in e.args]))

		# Look for the thrower by alias
		oThrower = Thrower.get(data['alias'], index='alias', limit=1)
		if not oThrower:
			return Services.Effect(error=401)

		# Validate the password
		if not oThrower.passwordValidate(data['passwd']):
			return Services.Effect(error=401)

		# Create a new session
		oSesh = Sesh.create()

		# Store the thrower ID and information in it
		oSesh['thrower'] = oThrower.record()

		# Save the session
		oSesh.save()

		# Return the session ID and primary thrower data
		return Services.Effect(oSesh.id())

	def signoutCreate(self, data, sesh):
		"""Signout

		Called to sign out a user and destroy their session

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the user

		Returns:
			Services.Effect
		"""

		# Close the session so it can no longer be found/used
		sesh.close()

		# Return OK
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
			return Services.Effect(error=404)

		# Look for someone else with that alias
		dThrower = Thrower.get(data['alias'], index='alias', raw=['_id'])
		if dThrower:
			return Services.Effect(error=(400, data['alias']))

		# If an e-mail was passed
		if 'email' in data:

			# Look for someone else with that email
			dThrower = Thrower.get(data['email'], index='email', raw=['_id'])
			if dThrower:
				return Services.Effect(error=(406, data['email']))

		# If no language was passed
		if 'locale' not in data:
			data['locale'] = 'en-US'

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
				oThrower['_id'],
				oThrower['verified']
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
			oSesh = Sesh.create()

		# Else, load the existing session
		else:
			oSesh = Sesh.start(data['session'])

		# Add the thrower ID to it
		oSesh['thrower'] = {"_id":oThrower['_id']}
		oSesh.save()

		# Return the session token
		return Services.Effect(oSesh.id())

	def throwerEmailUpdate(self, data, sesh):
		"""Thrower My Email

		Changes the email for the current signed in user

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the user

		Returns:
			Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['email', 'email_passwd'])
		except ValueError as e: return Services.Effect(error=(103, [(f, "missing") for f in e.args]))

		# Find the thrower
		oThrower = Thrower.get(sesh['thrower']['_id'])
		if not oThrower:
			return Services.Effect(error=104)

		# Validate the old password
		if not oThrower.passwordValidate(data['email_passwd']):
			return Services.Effect(error=(103, [('email_passwd', 'invalid')]))

		# Make sure the email is valid structurally
		if not _emailRegex.match(data['email']):
			return Services.Effect(error=(103, [('email', 'invalid')]))

		# Look for someone else with that email
		dThrower = Thrower.get(data['email'], index='email', raw=['_id'])
		if dThrower:
			return Services.Effect(error=(406, data['email']))

		# Update the email and verified fields
		try:
			oThrower['email'] = data['email']
			oThrower['verified'] = StrHelper.random(32, '_0x')
		except ValueError as e:
			return Services.Effect(error=(103, e.args[0]))

		# Update the thrower
		oThrower.save(changes={"creator":sesh['thrower']['_id']})

		# Send en e-mail for verification
		dConf = Conf.get("domain")
		sURL = "%s://external.%s/verify/%s/%s" % (
			dConf['protocol'],
			dConf['primary'],
			oThrower['_id'],
			oThrower['verified']
		)
		oEffect = Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"from": "noreply@%s" % dConf['primary'],
			"html_body": Templates.generate('email/verify.html', {"url":sURL}, oThrower['locale']),
			"subject": Templates.generate('email/verify_subject.txt', {}, oThrower['locale']),
			"to": data['email'],
		})
		if oEffect.errorExists():
			return oEffect

		# Return OK
		return Services.Effect(True)

	def throwerVerifyUpdate(self, data):
		"""Thrower Verify

		Sets the thrower's email to verified if the key is valid

		Arguments:
			data {dict} -- Data sent with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['_internal_', 'id', 'verify'])
		except ValueError as e: return Services.Effect(error=(103, [(f, "missing") for f in e.args]))

		# Verify the key, remove it if it's ok
		if not Services.internalKey(data['_internal_']):
			return Services.Effect(error=206)
		del data['_internal_']

		# Find the thrower
		oThrower = Thrower.get(data['id'])

		# If it doesn't exist
		if not oThrower:
			return Services.Effect(error=(104, data['id']))

		# If the thrower is already verified
		if oThrower['verified'] == True:
			return Services.Effect(True)

		# If the code is not valid
		if data['verify'] != oThrower['verified']:
			return Services.Effect(error=405)

		# Update the thrower
		oThrower['verified'] = True
		oThrower.save(changes=False)

		# Return OK
		return Services.Effect(True)
