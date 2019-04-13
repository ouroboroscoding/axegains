# coding=utf8
""" Auth Service

Handles all Auth / Thrower requests
"""

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2018-09-09"

# Python imports
import re
from time import time

# Pip imports
from RestOC import Conf, DictHelper, Errors, Record_ReDB, Services, \
					Sesh, StrHelper, Templates

# Project imports
from shared import SSS, Sync

# Service imports
from .Records import Favourites, MatchRequest, Thrower

# Regex for validating email
_emailRegex = re.compile(r"[^@\s]+@[^@\s]+\.[a-zA-Z0-9]{2,}$")

class Auth(Services.Service):
	"""Auth Service class

	Service for Authorization, sign in, sign up, etc.

	Extends: shared.Services.Service
	"""

	_install = [Favourites, MatchRequest, Thrower]
	"""Record types called in install"""

	def favourite_create(self, data, sesh):
		"""Favourite (Create)

		Adds a favourite to the logged in thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# If someone tries to add themselves
		if data['id'] == sesh['thrower']['_id']:
			return Services.Effect(False);

		# Make sure the thrower exists
		if not Thrower.exists(data['id']):
			return Services.Effect(error=(1104, data['id']))

		# Add the thrower to the logged in thrower's favourites and return the
		#	result
		return Services.Effect(
			Favourites.add(sesh['thrower']['_id'], data['id'])
		)

	def favourite_delete(self, data, sesh):
		"""Favourite (Delete)

		Removes a favourite from the logged in thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Remove the thrower from the logged in thrower's favourites and return
		#	the result
		return Services.Effect(
			Favourites.remove(sesh['thrower']['_id'], data['id'])
		)

	def favourites_read(self, data, sesh):
		"""Favourites

		Returns all favourites for the logged in thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Fetch the favourites for the thrower
		lFavourites = Favourites.get(sesh['thrower']['_id'], raw=['ids'])

		# If there's none
		if not lFavourites:
			return Services.Effect([])

		# Look up all the throwers using the IDs
		lThrowers = Thrower.get(lFavourites['ids'], raw=['_id', 'alias'])

		# Return what's found
		return Services.Effect(lThrowers)

	def initialise(self):
		"""Initialise

		Initialises the instance and returns itself for chaining

		Returns:
			Auth
		"""

		# Init the sync module
		Sync.init(Conf.get(('redis', 'sync'), {
			"host": "localhost",
			"port": 6379,
			"db": 1
		}))

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
			if not o.table_create():
				print("Failed to create `%s` table" % o.tableName())

	def matchRequest_create(self, data, sesh):
		"""Match Request (Create)

		Creates a new match request and notifies the opponent

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['opponent', 'org'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find opponent
		dOpponent = Thrower.get(data['opponent'], raw=['alias'])
		if not dOpponent:
			return Services.Effect(error=(1104, 'thrower:%s' % data['opponent']))

		# Create a new request
		try:
			oRequest = MatchRequest({
				"_created": int(time()),
				"initiator": sesh['thrower']['_id'],
				"opponent": data['opponent'],
				"org": data['org']
			})
		except ValueError as e:
			return Services.Effect(error=(1001, e.args[0]))

		# Store the instance
		if not oRequest.create():
			return Services.Effect(error=1100)

		# Sync the data for anyone listening
		Sync.push('auth', 'requests-%s' % data['opponent'], {
			"type": 'match_request',
			"_id": oRequest['_id'],
			"initiator": sesh['thrower']['_id'],
			"alias": dOpponent['alias'],
			"org": data['org']
		})

		# Return the ID of the new request
		return Services.Effect(oRequest['_id'])

	def matchRequest_delete(self, data, sesh):
		"""Match Request (Delete)

		Refuses a match request and deletes it

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the request
		oRequest = MatchRequest.get(data['id'])
		if not oRequest:
			return Services.Effect(error=(1104, 'match_request:%s' % data['id']))

		# If the deleter is not the initiator or opponent
		if sesh['thrower']['_id'] != oRequest['initiator'] and \
			sesh['thrower']['_id'] != oRequest['opponent']:
			return Services.Effect(error=1000)

		# Delete it
		if not oRequest.delete():
			return Services.Effect(error=1102)

		# If the initiator retracted their request
		if sesh['thrower']['_id'] == oRequest['initiator']:

			# Let the opponent know
			Sync.push('auth', 'requests-%s' % oRequest['opponent'], {
				"type": "match_request_delete",
				"id": data['id']
			})

		# Else the opponent rejected the request
		else:

			# Let the initiator know
			Sync.push('auth', 'request-%s' % data['id'], {
				"type": "rejected"
			})

		# Return OK
		return Services.Effect(True)

	def matchRequest_read(self, data, sesh):
		"""Match Request (Read)

		Fetchs a match request and returns it

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the request
		dRequest = MatchRequest.get(data['id'], raw=True)
		if not dRequest:
			return Services.Effect(error=(1104, 'match_request:%s' % data['id']))

		# Get the ID of the other thrower
		if sesh['thrower']['_id'] == dRequest['initiator']:
			sID = dRequest['opponent']
		elif sesh['thrower']['_id'] == dRequest['opponent']:
			sID = dRequest['initiator']
		else:
			return Services.Effect(error=1000)

		# Get the other thrower's alias and add it to the request
		dAlias = Thrower.get(sID, raw=['alias'])
		dRequest['alias'] = dAlias and dAlias['alias'] or 'N/A'

		# Return the request
		return Services.Effect(dRequest)

	def matchRequest_update(self, data, sesh):
		"""Match Request (Update)

		Accepts a match request and creates the match with the proper service,
		then notifies both throwers of the ID of the new match

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the request
		oRequest = MatchRequest.get(data['id'])
		if not oRequest:
			return Services.Effect(error=(1104, 'match_request:%s' % data['id']))

		# If the accepter is not the opponent
		if sesh['thrower']['_id'] != oRequest['opponent']:
			return Services.Effect(error=1000)

		# Create a new match in the proper service
		oEffect = Services.create(oRequest['org'].lower(), 'match', {
			"_internal_": Services.internalKey(),
			"initiator": oRequest['initiator'],
			"opponent": oRequest['opponent']
		}, sesh)
		if oEffect.errorExists():
			return oEffect

		# Delete the request
		oRequest.delete()

		# Notify the initiator of the new match
		Sync.push('auth', 'request-%s' % data['id'], {
			"type": "accepted",
			"match": oEffect.data
		})

		# Return the ID of the new match
		return Services.Effect(oEffect.data)

	def matchRequests_read(self, data, sesh):
		"""Match Requests

		Returns all open match requests regardless of initiator or opponent

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Init the return
		dRet = {}

		# Find all the requests the thrower initiated
		dRet['initiator'] = MatchRequest.get(
			sesh['thrower']['_id'], index='initiator',
			raw=['_id', 'opponent', 'org']
		)

		# Find all the requests in which the thrower is the opponent
		dRet['opponent'] = MatchRequest.get(
			sesh['thrower']['_id'], index='opponent',
			raw=['_id', 'initiator', 'org']
		)

		# Get all the thrower IDs
		lThrowers = []
		for d in dRet['initiator']:
			lThrowers.append(d['opponent'])
		for d in dRet['opponent']:
			lThrowers.append(d['initiator'])

		# Get all the thrower aliases
		dAliases = lThrowers and \
			{d['_id']:d['alias'] for d in Thrower.get(list(set(lThrowers)), raw=['_id', 'alias'])} or \
			{}

		# Add the alias to each record
		for d in dRet['initiator']:
			d['alias'] = d['opponent'] in dAliases and dAliases[d['opponent']] or 'N/A'
		for d in dRet['opponent']:
			d['alias'] = d['initiator'] in dAliases and dAliases[d['initiator']] or 'N/A'

		# Return all the records
		return Services.Effect(dRet)

	def passwdForgot_create(self, data):
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
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Look for the thrower by email
		oThrower = Thrower.get(data['email'], index='email', limit=1)
		if not oThrower:
			return Services.Effect(True)

		# Is there already a key in the thrower?
		if 'forgot' in oThrower and 'regenerate' not in data:

			# Is it not expired?
			if oThrower['forgot']['expires'] > int(time()):
				return Services.Effect(True)

		# Update the thrower with a timestamp (for expiry) and the key
		sKey = StrHelper.random(32, '_0x')
		oThrower['forgot'] = {
			"expires": int(time()) + 300,
			"key": sKey
		}
		if not oThrower.save(changes=False):
			return Services.Effect(error=1103)

		# Get the domain config
		dConf = Conf.get("domain")

		# Forgot email template variables
		dTpl = {
			"key": sKey,
			"url": "%s://%s/#forgot=%s" % (
				dConf['protocol'],
				dConf['primary'],
				sKey
			)
		}

		# Email the user the key
		oEffect = Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"html_body": Templates.generate('email/forgot.html', dTpl, oThrower['locale']),
			"subject": Templates.generate('email/forgot_subject.txt', {}, oThrower['locale']),
			"to": data['email'],
		})
		if oEffect.errorExists():
			return oEffect

		# Return OK
		return Services.Effect(True)

	def passwdForgot_update(self, data):
		"""Password Forgot (Change Password)

		Validates the key and changes the password to the given value

		Arguments:
			data {dict} -- Data sent with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['passwd', 'key'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Look for the thrower by the key
		oThrower = Thrower.get(filter={"forgot": {"key": data['key']}}, limit=1)
		if not oThrower:
			return Services.Effect(error=1203) # Don't let people know if the key exists or not

		# Check if we even have a forgot section, or the key has expired, or the
		#	key is invalid
		if 'forgot' not in oThrower or \
			oThrower['forgot']['expires'] <= int(time()) or \
			oThrower['forgot']['key'] != data['key']:
			return Services.Effect(error=1203)

		# Make sure the new password is strong enough
		if not Thrower.passwordStrength(data['passwd']):
			return Services.Effect(error=1204)

		# Store the new password and update
		oThrower['passwd'] = Thrower.passwordHash(data['passwd'])
		oThrower.fieldDelete('forgot')
		oThrower.save(changes=False)

		# Return OK
		return Services.Effect(True)

	def search_read(self, data, sesh):
		"""Search

		Looks up throwers by alias

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['q'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Run a search and return the results
		return Services.Effect(
			Thrower.search(data['q'])
		)

	def session_read(self, data, sesh):
		"""Session

		Returns the ID of the thrower logged into the current session

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""
		return Services.Effect({
			"_id": sesh['thrower']['_id'],
			"alias": sesh['thrower']['alias']
		})

	def signin_create(self, data):
		"""Signin

		Signs a user into the system

		Arguments:
			data {dict} -- The data passed to the request

		Returns:
			Result
		"""

		# Verify fields
		try: DictHelper.eval(data, ['alias', 'passwd'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Look for the thrower by alias
		oThrower = Thrower.get(data['alias'], index='alias', limit=1)
		if not oThrower:
			return Services.Effect(error=1201)

		# Validate the password
		if not oThrower.passwordValidate(data['passwd']):
			return Services.Effect(error=1201)

		# Create a new session
		oSesh = Sesh.create()

		# Store the thrower ID and information in it
		oSesh['thrower'] = oThrower.record()

		# Save the session
		oSesh.save()

		# Return the session ID and primary thrower data
		return Services.Effect({
			"session": oSesh.id(),
			"thrower": {
				"_id": oSesh['thrower']['_id'],
				"alias": oSesh['thrower']['alias']
			}
		})

	def signout_create(self, data, sesh):
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

	def signup_create(self, data):
		"""Signup

		Creates a new user on the system

		Arguments:
			data {dict} -- The data passed to the request

		Returns:
			Result
		"""

		# Verify fields
		try: DictHelper.eval(data, ['alias', 'passwd'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Make sure the email is valid structurally
		if 'email' in data and not _emailRegex.match(data['email']):
			return Services.Effect(error=(1001, [('email', 'invalid')]))

		# Make sure the password is strong enough
		if not Thrower.passwordStrength(data['passwd']):
			return Services.Effect(error=1204)

		# Look for someone else with that alias
		dThrower = Thrower.get(data['alias'], index='alias', raw=['_id'])
		if dThrower:
			return Services.Effect(error=(1200, data['alias']))

		# If an e-mail was passed
		if 'email' in data:

			# Look for someone else with that email
			dThrower = Thrower.get(data['email'], index='email', raw=['_id'])
			if dThrower:
				return Services.Effect(error=(1206, data['email']))

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
			return Services.Effect(error=(1001, e.args[0]))

		# Store the instance
		if not oThrower.create(changes={"creator":"signup"}):
			return Services.Effect(error=1100)

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
		oSesh['thrower'] = oThrower.record()
		oSesh.save()

		# Return the session token
		return Services.Effect({
			"session": oSesh.id(),
			"thrower": {
				"_id": oSesh['thrower']['_id'],
				"alias": oSesh['thrower']['alias']
			}
		})

	def throwerAlias_update(self, data, sesh):
		"""Thrower Alias

		Changes the alias associated with the thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['alias'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# If the alias is invalid
		if not Thrower.struct()['tree']['alias'].valid(data['alias']):
			return Services.Effect(error=(1001, [('alias', 'invalid')]))

		# Look for someone else with that alias
		dThrower = Thrower.get(data['alias'], index='alias', raw=['_id'])
		if dThrower:
			return Services.Effect(error=(1200, data['alias']))

		# Try to change the alias
		if not Thrower.alias(sesh['thrower']['_id'], data['alias']):
			return Services.Effect(False)

		# Update the session
		sesh['thrower']['alias'] = data['alias']
		sesh.save()

		# Return OK
		return Services.Effect(True)

	def throwerAliases_read(self, data):
		"""Thrower Aliases

		Recieves a list of thrower IDs and returns a dictionary of IDs to
		aliases

		Arguments:
			data {dict} -- Data sent with the request

		Returns:
			Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['_internal_', 'ids'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Verify the key, remove it if it's ok
		if not Services.internalKey(data['_internal_']):
			return Services.Effect(error=Errors.SERVICE_INTERNAL_KEY)
		del data['_internal_']

		# If the IDs are not a list
		if not isinstance(data['ids'], list):
			return Services.Effect(error=(1001, [('ids', 'not a list')]))

		# If the list is empty
		if not data['ids']:
			return Services.Effect({})

		# Get and return all the thrower aliases
		return Services.Effect({
			d['_id']:d['alias'] for d in Thrower.get(data['ids'], raw=['_id', 'alias'])
		})

	def throwerEmail_update(self, data, sesh):
		"""Thrower Email

		Changes the email for the current signed in user

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the user

		Returns:
			Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['email', 'email_passwd'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the thrower
		oThrower = Thrower.get(sesh['thrower']['_id'])
		if not oThrower:
			return Services.Effect(error=1104)

		# Validate the password
		if not oThrower.passwordValidate(data['email_passwd']):
			return Services.Effect(error=(1001, [('email_passwd', 'invalid')]))

		# Make sure the email is valid structurally
		if not _emailRegex.match(data['email']):
			return Services.Effect(error=(1001, [('email', 'invalid')]))

		# Look for someone else with that email
		dThrower = Thrower.get(data['email'], index='email', raw=['_id'])
		if dThrower:
			return Services.Effect(error=(1206, data['email']))

		# Update the email and verified fields
		try:
			oThrower['email'] = data['email']
			oThrower['verified'] = StrHelper.random(32, '_0x')
		except ValueError as e:
			return Services.Effect(error=(1001, e.args[0]))

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
			"html_body": Templates.generate('email/verify.html', {"url":sURL}, oThrower['locale']),
			"subject": Templates.generate('email/verify_subject.txt', {}, oThrower['locale']),
			"to": data['email'],
		})
		if oEffect.errorExists():
			return oEffect

		# Return OK
		return Services.Effect(True)

	def throwerPasswd_update(self, data, sesh):
		"""Thrower Password

		Changes the password for the current signed in user

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- The session associated with the user

		Returns:
			Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['passwd', 'new_passwd'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the thrower
		oThrower = Thrower.get(sesh['thrower']['_id'])
		if not oThrower:
			return Services.Effect(error=1104)

		# Validate the password
		if not oThrower.passwordValidate(data['passwd']):
			return Services.Effect(error=(1001, [('passwd', 'invalid')]))

		# Make sure the new password is strong enough
		if not Thrower.passwordStrength(data['new_passwd']):
			return Services.Effect(error=1204)

		# Set the new password and save
		oThrower['passwd'] = Thrower.passwordHash(data['new_passwd'])
		oThrower.save(changes={"creator":sesh['thrower']['_id']})

		# Return OK
		return Services.Effect(True)

	def throwerVerify_update(self, data):
		"""Thrower Verify

		Sets the thrower's email to verified if the key is valid

		Arguments:
			data {dict} -- Data sent with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['_internal_', 'id', 'verify'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Verify the key, remove it if it's ok
		if not Services.internalKey(data['_internal_']):
			return Services.Effect(error=Errors.SERVICE_INTERNAL_KEY)
		del data['_internal_']

		# Find the thrower
		oThrower = Thrower.get(data['id'])

		# If it doesn't exist
		if not oThrower:
			return Services.Effect(error=(1104, data['id']))

		# If the thrower is already verified
		if oThrower['verified'] == True:
			return Services.Effect(True)

		# If the code is not valid
		if data['verify'] != oThrower['verified']:
			return Services.Effect(error=1205)

		# Update the thrower
		oThrower['verified'] = True
		oThrower.save(changes=False)

		# Return OK
		return Services.Effect(True)
