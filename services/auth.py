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
import uuid

# Pip imports
from RestOC import Conf, DictHelper, Errors, Services, \
					Sesh, StrHelper, Templates

# Shared imports
from shared import SSS, Sync

# Record imports
from records.auth import Favourites, MatchRequest, Thrower, Venue

# Regex for validating email
_emailRegex = re.compile(r"[^@\s]+@[^@\s]+\.[a-zA-Z0-9]{2,}$")

class Auth(Services.Service):
	"""Auth Service class

	Service for Authorization, sign in, sign up, etc.

	Extends: shared.Services.Service
	"""

	_install = [Favourites, MatchRequest, Thrower, Venue]
	"""Record types called in install"""

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
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['opponent', 'org'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Find opponent
		dOpponent = Thrower.get(data['opponent'], raw=['alias'])
		if not dOpponent:
			return Services.Response(error=(1104, 'thrower:%s' % data['opponent']))

		# Create a new request
		try:
			oRequest = MatchRequest({
				"_created": int(time()),
				"initiator": sesh['thrower']['_id'],
				"opponent": data['opponent'],
				"org": data['org']
			})
		except ValueError as e:
			return Services.Response(error=(1001, e.args[0]))

		# Store the instance
		if not oRequest.create():
			return Services.Response(error=1100)

		# Sync the data for anyone listening
		Sync.push('auth', 'requests-%s' % data['opponent'], {
			"type": 'match_request',
			"_id": oRequest['_id'],
			"initiator": sesh['thrower']['_id'],
			"alias": sesh['thrower']['alias'],
			"org": data['org']
		})

		# Return the ID of the new request
		return Services.Response(oRequest['_id'])

	def matchRequest_delete(self, data, sesh):
		"""Match Request (Delete)

		Refuses a match request and deletes it

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Find the request
		oRequest = MatchRequest.get(data['id'])
		if not oRequest:
			return Services.Response(error=(1104, 'match_request:%s' % data['id']))

		# If the deleter is not the initiator or opponent
		if sesh['thrower']['_id'] != oRequest['initiator'] and \
			sesh['thrower']['_id'] != oRequest['opponent']:
			return Services.Response(error=1000)

		# Delete it
		if not oRequest.delete():
			return Services.Response(error=1102)

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
		return Services.Response(True)

	def matchRequest_read(self, data, sesh):
		"""Match Request (Read)

		Fetchs a match request and returns it

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Find the request
		dRequest = MatchRequest.get(data['id'], raw=True)
		if not dRequest:
			return Services.Response(error=(1104, 'match_request:%s' % data['id']))

		# Get the ID of the other thrower
		if sesh['thrower']['_id'] == dRequest['initiator']:
			sID = dRequest['opponent']
		elif sesh['thrower']['_id'] == dRequest['opponent']:
			sID = dRequest['initiator']
		else:
			return Services.Response(error=1000)

		# Get the other thrower's alias and add it to the request
		dAlias = Thrower.get(sID, raw=['alias'])
		dRequest['alias'] = dAlias and dAlias['alias'] or 'N/A'

		# Return the request
		return Services.Response(dRequest)

	def matchRequest_update(self, data, sesh):
		"""Match Request (Update)

		Accepts a match request and creates the match with the proper service,
		then notifies both throwers of the ID of the new match

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Find the request
		oRequest = MatchRequest.get(data['id'])
		if not oRequest:
			return Services.Response(error=(1104, 'match_request:%s' % data['id']))

		# If the accepter is not the opponent
		if sesh['thrower']['_id'] != oRequest['opponent']:
			return Services.Response(error=1000)

		# Create a new match in the proper service
		oResponse = Services.create(oRequest['org'].lower(), 'match', {
			"_internal_": Services.internalKey(),
			"initiator": oRequest['initiator'],
			"opponent": oRequest['opponent']
		}, sesh)
		if oResponse.errorExists():
			return oResponse

		# Delete the request
		oRequest.delete()

		# Notify the initiator of the new match
		Sync.push('auth', 'request-%s' % data['id'], {
			"type": "accepted",
			"match": oResponse.data
		})

		# Return the ID of the new match
		return Services.Response(oResponse.data)

	def matchRequests_read(self, data, sesh):
		"""Match Requests

		Returns all open match requests regardless of initiator or opponent

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
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
		return Services.Response(dRet)

	def throwerAlias_update(self, data, sesh):
		"""Thrower Alias

		Changes the alias associated with the thrower

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['alias'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# If the alias is invalid
		if not Thrower.struct()['tree']['alias'].valid(data['alias']):
			return Services.Response(error=(1001, [('alias', 'invalid')]))

		# Look for someone else with that alias
		dThrower = Thrower.get(data['alias'], index='alias', raw=['_id'])
		if dThrower:
			return Services.Response(error=(1200, data['alias']))

		# Try to change the alias
		if not Thrower.alias(sesh['thrower']['_id'], data['alias']):
			return Services.Response(False)

		# Update the session
		sesh['thrower']['alias'] = data['alias']
		sesh.save()

		# Return OK
		return Services.Response(True)

	def throwerAliases_read(self, data):
		"""Thrower Aliases

		Recieves a list of thrower IDs and returns a dictionary of IDs to
		aliases

		Arguments:
			data (dict): Data sent with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['_internal_', 'ids'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Verify the key, remove it if it's ok
		if not Services.internalKey(data['_internal_']):
			return Services.Response(error=Errors.SERVICE_INTERNAL_KEY)
		del data['_internal_']

		# If the IDs are not a list
		if not isinstance(data['ids'], list):
			return Services.Response(error=(1001, [('ids', 'not a list')]))

		# If the list is empty
		if not data['ids']:
			return Services.Response({})

		# Get and return all the thrower aliases
		return Services.Response({
			d['_id']:d['alias'] for d in Thrower.get(data['ids'], raw=['_id', 'alias'])
		})

	def throwerEmail_update(self, data, sesh):
		"""Thrower Email

		Changes the email for the current signed in user

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the user

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['email', 'email_passwd'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Find the thrower
		oThrower = Thrower.get(sesh['thrower']['_id'])
		if not oThrower:
			return Services.Response(error=1104)

		# Validate the password
		if not oThrower.passwordValidate(data['email_passwd']):
			return Services.Response(error=(1001, [('email_passwd', 'invalid')]))

		# Make sure the email is valid structurally
		if not _emailRegex.match(data['email']):
			return Services.Response(error=(1001, [('email', 'invalid')]))

		# Look for someone else with that email
		dThrower = Thrower.get(data['email'], index='email', raw=['_id'])
		if dThrower:
			return Services.Response(error=(1206, data['email']))

		# Update the email and verified fields
		try:
			oThrower['email'] = data['email']
			oThrower['verified'] = StrHelper.random(32, '_0x')
		except ValueError as e:
			return Services.Response(error=(1001, e.args[0]))

		# Update the thrower
		oThrower.save(changes={"creator":sesh['thrower']['_id']})

		# Send en e-mail for verification
		dConf = Conf.get("domain")
		sURL = "%s://external.%s/thrower/verify/%s/%s" % (
			dConf['protocol'],
			dConf['primary'],
			oThrower['_id'],
			oThrower['verified']
		)
		oResponse = Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"html_body": Templates.generate('email/verify.html', {"url":sURL}, oThrower['locale']),
			"subject": Templates.generate('email/verify_subject.txt', {}, oThrower['locale']),
			"to": data['email'],
		})
		if oResponse.errorExists():
			return oResponse

		# Return OK
		return Services.Response(True)

	def throwerFavourite_create(self, data, sesh):
		"""Favourite (Create)

		Adds a favourite to the logged in thrower

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# If someone tries to add themselves
		if data['id'] == sesh['thrower']['_id']:
			return Services.Response(False);

		# Make sure the thrower exists
		if not Thrower.exists(data['id']):
			return Services.Response(error=(1104, data['id']))

		# Add the thrower to the logged in thrower's favourites and return the
		#	result
		return Services.Response(
			Favourites.add(sesh['thrower']['_id'], data['id'])
		)

	def throwerFavourite_delete(self, data, sesh):
		"""Favourite (Delete)

		Removes a favourite from the logged in thrower

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Remove the thrower from the logged in thrower's favourites and return
		#	the result
		return Services.Response(
			Favourites.remove(sesh['thrower']['_id'], data['id'])
		)

	def throwerFavourites_read(self, data, sesh):
		"""Favourites

		Returns all favourites for the logged in thrower

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Fetch the favourites for the thrower
		lFavourites = Favourites.get(sesh['thrower']['_id'], raw=['ids'])

		# If there's none
		if not lFavourites:
			return Services.Response([])

		# Look up all the throwers using the IDs
		lThrowers = Thrower.get(lFavourites['ids'], raw=['_id', 'alias'])

		# Return what's found
		return Services.Response(lThrowers)

	def throwerOrg_update(self, data, sesh):
		"""Thrower Org

		Changes the default organisation for the current signed in user

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the user

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['org'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Find the thrower
		oThrower = Thrower.get(sesh['thrower']['_id'])
		if not oThrower:
			return Services.Response(error=1104)

		# Set the new org
		try:
			oThrower['org'] = data['org']
		except ValueError:
			return Services.Response(error=(1000, [('org', 'invalid')]))

		# Save
		oThrower.save(changes={"creator":sesh['thrower']['_id']})

		# Update the session
		sesh['thrower']['org'] = data['org']
		sesh.save()

		# Return OK
		return Services.Response(True)

	def throwerPasswd_update(self, data, sesh):
		"""Thrower Password

		Changes the password for the current signed in user

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the user

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['passwd', 'new_passwd'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Find the thrower
		oThrower = Thrower.get(sesh['thrower']['_id'])
		if not oThrower:
			return Services.Response(error=1104)

		# Validate the password
		if not oThrower.passwordValidate(data['passwd']):
			return Services.Response(error=(1001, [('passwd', 'invalid')]))

		# Make sure the new password is strong enough
		if not Thrower.passwordStrength(data['new_passwd']):
			return Services.Response(error=1204)

		# Set the new password and save
		oThrower['passwd'] = Thrower.passwordHash(data['new_passwd'])
		oThrower.save(changes={"creator":sesh['thrower']['_id']})

		# Return OK
		return Services.Response(True)

	def throwerPasswdForgot_create(self, data):
		"""Password Forgot (Generate)

		Creates the key that will be used to allow a user to change their
		password if they forgot it

		Arguments:
			data (dict): Data sent with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['email'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Look for the record by email
		oThrower = Thrower.get(data['email'], index='email', limit=1)
		if not oThrower:
			return Services.Response(True)

		# Is there already a key in the record?
		if 'forgot' in oThrower and 'regenerate' not in data:

			# Is it not expired?
			if oThrower['forgot']['expires'] > int(time()):
				return Services.Response(True)

		# Update the record with a timestamp (for expiry) and the key
		sKey = StrHelper.random(32, '_0x')
		oThrower['forgot'] = {
			"expires": int(time()) + 300,
			"key": sKey
		}
		if not oThrower.save(changes=False):
			return Services.Response(error=1103)

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
		oResponse = Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"html_body": Templates.generate('email/forgot.html', dTpl, oThrower['locale']),
			"subject": Templates.generate('email/forgot_subject.txt', {}, oThrower['locale']),
			"to": data['email'],
		})
		if oResponse.errorExists():
			return oResponse

		# Return OK
		return Services.Response(True)

	def throwerPasswdForgot_update(self, data):
		"""Password Forgot (Change Password)

		Validates the key and changes the password to the given value

		Arguments:
			data (dict): Data sent with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['passwd', 'key'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Look for the record by the key
		oThrower = Thrower.get(filter={"forgot": {"key": data['key']}}, limit=1)
		if not oThrower:
			return Services.Response(error=1203) # Don't let people know if the key exists or not

		# Check if we even have a forgot section, or the key has expired, or the
		#	key is invalid
		if 'forgot' not in oThrower or \
			oThrower['forgot']['expires'] <= int(time()) or \
			oThrower['forgot']['key'] != data['key']:
			return Services.Response(error=1203)

		# Make sure the new password is strong enough
		if not Thrower.passwordStrength(data['passwd']):
			return Services.Response(error=1204)

		# Store the new password and update
		oThrower['passwd'] = Thrower.passwordHash(data['passwd'])
		oThrower.fieldDelete('forgot')
		oThrower.save(changes=False)

		# Return OK
		return Services.Response(True)

	def throwerSearch_read(self, data, sesh):
		"""Search

		Looks up throwers by alias

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['q'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Run a search and return the results
		return Services.Response(
			Thrower.search(data['q'])
		)

	def throwerSession_read(self, data, sesh):
		"""Session

		Returns the ID of the thrower logged into the current session

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""
		return Services.Response({
			"_id": sesh['thrower']['_id'],
			"alias": sesh['thrower']['alias'],
			"org": sesh['thrower']['org']
		})

	def throwerSignin_create(self, data):
		"""Signin

		Signs a user into the system

		Arguments:
			data (dict): The data passed to the request

		Returns:
			Result
		"""

		# Verify data
		try: DictHelper.eval(data, ['alias', 'passwd'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Look for the thrower by alias
		oThrower = Thrower.get(data['alias'], index='alias', limit=1)
		if not oThrower:
			return Services.Response(error=1201)

		# Validate the password
		if not oThrower.passwordValidate(data['passwd']):
			return Services.Response(error=1201)

		# Create a new session, store the thrower, and save
		oSesh = Sesh.create('thrower:%s' % uuid.uuid4().hex)
		oSesh['venue'] = oVenue.record()
		oSesh.save()

		# Return the session ID and primary thrower data
		return Services.Response({
			"session": oSesh.id(),
			"thrower": {
				"_id": oSesh['thrower']['_id'],
				"alias": oSesh['thrower']['alias'],
				"org": oSesh['thrower']['org']
			}
		})

	def throwerSignout_create(self, data, sesh):
		"""Signout

		Called to sign out a user and destroy their session

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the user

		Returns:
			Services.Response
		"""

		# Close the session so it can no longer be found/used
		sesh.close()

		# Return OK
		return Services.Response(True)

	def throwerSignup_create(self, data):
		"""Signup

		Creates a new user on the system

		Arguments:
			data (dict): The data passed to the request

		Returns:
			Result
		"""

		# Verify data
		try: DictHelper.eval(data, ['alias', 'passwd'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Make sure the email is valid structurally
		if 'email' in data and not _emailRegex.match(data['email']):
			return Services.Response(error=(1001, [('email', 'invalid')]))

		# Make sure the password is strong enough
		if not Thrower.passwordStrength(data['passwd']):
			return Services.Response(error=1204)

		# Look for someone else with that alias
		dThrower = Thrower.get(data['alias'], index='alias', raw=['_id'])
		if dThrower:
			return Services.Response(error=(1200, data['alias']))

		# If an e-mail was passed
		if 'email' in data:

			# Look for someone else with that email
			dThrower = Thrower.get(data['email'], index='email', raw=['_id'])
			if dThrower:
				return Services.Response(error=(1206, data['email']))

		# If no language was passed
		if 'locale' not in data:
			data['locale'] = 'en-US'

		# Init the thrower data
		dThrower = {
			"_created": int(time()),
			"alias": data['alias'],
			"locale": data['locale'],
			"org": 'org' in data and data['org'] or 'iatf',
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
			return Services.Response(error=(1001, e.args[0]))

		# Store the instance
		if not oThrower.create(changes={"creator":"signup"}):
			return Services.Response(error=1100)

		Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"text_body": "Alias: %s\nEmail: %s" % (data['alias'], ('email' in data and data['email'] or '')),
			"subject": "Axegains Signup",
			"to": "seamlessvision@gmail.com",
		})

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
			oResponse = Services.create('communications', 'email', {
				"_internal_": Services.internalKey(),
				"html_body": Templates.generate('email/verify.html', {"url":sURL}, data['locale']),
				"subject": Templates.generate('email/verify_subject.txt', {}, data['locale']),
				"to": data['email'],
			})
			if oResponse.errorExists():
				return oResponse

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
		return Services.Response({
			"session": oSesh.id(),
			"thrower": {
				"_id": oSesh['thrower']['_id'],
				"alias": oSesh['thrower']['alias'],
				"org": oSesh['thrower']['org']
			}
		})

	def throwerVerify_update(self, data):
		"""Thrower Verify

		Sets the thrower's email to verified if the key is valid

		Arguments:
			data (dict): Data sent with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['_internal_', 'id', 'verify'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Verify the key, remove it if it's ok
		if not Services.internalKey(data['_internal_']):
			return Services.Response(error=Errors.SERVICE_INTERNAL_KEY)
		del data['_internal_']

		# Find the record
		oThrower = Thrower.get(data['id'])

		# If it doesn't exist
		if not oThrower:
			return Services.Response(error=(1104, data['id']))

		# If the record is already verified
		if oThrower['verified'] == True:
			return Services.Response(True)

		# If the code is not valid
		if data['verify'] != oThrower['verified']:
			return Services.Response(error=1205)

		# Update the record
		oThrower['verified'] = True
		oThrower.save(changes=False)

		# Return OK
		return Services.Response(True)

	def venue_read(self, data, sesh):
		"""Venue Read

		Fetches an existing venue and returns it

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['_id'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Fetch the raw venue by ID and return it
		return Services.Response(
			Venue.get(data['_id'], raw=['email', 'name', 'locale', 'address'])
		)

	def venue_update(self, data, sesh):
		"""Venue Update

		Updates an existing venue

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['_id'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# If the logged in user isn't an admin, or isn't the owner of the venue
		#	being updated
		if 'admin' not in sesh or \
			'venue' not in sesh or \
			data['_id'] != sesh['venue']['_id']:
			return Services.Response(error=1000)

		# Find the venue
		oVenue = Venue.get(data['_id'])
		if not oVenue:
			return Services.Response(error=1104)

		# Remove fields that can't be updated
		for k in ['_id', '_created', 'email', 'passwd' 'verified', 'forgot']:
			if k in data: del data[k]

		# Step through each field passed and update/validate it
		lErrors = []
		for f in data:
			try: oCustomeroVenue[f] = data[f]
			except ValueError as e: lErrors.append(e.args[0])

		# If there was any errors
		if lErrors:
			return Services.Response(error=(1001, lErrors))

		# Update the record and return the result
		return Services.Response(
			oVenue.save()
		)

	def venueEmail_update(self, data, sesh):
		"""Venue Email Update

		Updates the email associated with a venue, marks them as unverified,
		and re-sends the verification email

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['_id', 'email'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# If the logged in user isn't an admin, or isn't the owner of the venue
		#	being updated
		if 'admin' not in sesh or \
			'venue' not in sesh or \
			data['_id'] != sesh['venue']['_id']:
			return Services.Response(error=1000)

		# If it's a venue
		if 'venue' in sesh:
			if 'email_passwd' not in data:
				return Services.Response(error=(1001, [('email_passwd', 'missing')]))

		# Find the venue
		oVenue = Venue.get(data['_id'])
		if not oVenue:
			return Services.Response(error=1104)

		# Validate the password
		if not oVenue.passwordValidate(data['email_passwd']):
			return Services.Response(error=(1001, [('email_passwd', 'invalid')]))

		# Make sure the email is valid structurally
		if not _emailRegex.match(data['email']):
			return Services.Response(error=(1001, [('email', 'invalid')]))

		# Look for someone else with that email
		dVenue = Venue.get(data['email'], index='email', raw=['_id'])
		if dVenue:
			return Services.Response(error=(1406, data['email']))

		# Update the email and verified fields
		try:
			oVenue['email'] = data['email']
			oVenue['verified'] = StrHelper.random(32, '_0x')
		except ValueError as e:
			return Services.Response(error=(1001, e.args[0]))

		# Update the venue
		oVenue.save(changes={"creator":sesh['venue']['_id']})

		# Send en e-mail for verification
		dConf = Conf.get("domain")
		sURL = "%s://external.%s/venue/verify/%s/%s" % (
			dConf['protocol'],
			dConf['primary'],
			oVenue['_id'],
			oVenue['verified']
		)
		oResponse = Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"html_body": Templates.generate('email/verify.html', {"url":sURL}, oVenue['locale']),
			"subject": Templates.generate('email/verify_subject.txt', {}, oVenue['locale']),
			"to": data['email'],
		})
		if oResponse.errorExists():
			return oResponse

		# Return OK
		return Services.Response(True)

	def venuePasswd_update(self, data, sesh):
		"""Venue Password Update

		Updates the password associated with a venue

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['_id', 'new_passwd'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# If the logged in user isn't an admin, or isn't the owner of the venue
		#	being updated
		if 'admin' not in sesh or \
			'venue' not in sesh or \
			data['_id'] != sesh['venue']['_id']:
			return Services.Response(error=1000)

		# If it's a venue
		if 'venue' in sesh:
			if 'passwd' not in data:
				return Services.Response(error=(1001, [('passwd', 'missing')]))

		# Find the venue
		oVenue = Venue.get(data['_id'])
		if not oVenue:
			return Services.Response(error=1104)

		# Validate the password
		if not oVenue.passwordValidate(data['passwd']):
			return Services.Response(error=(1001, [('passwd', 'invalid')]))

		# Make sure the new password is strong enough
		if not Venue.passwordStrength(data['new_passwd']):
			return Services.Response(error=1404)

		# Set the new password and save
		oVenue['passwd'] = Venue.passwordHash(data['new_passwd'])
		oVenue.save(changes={"creator":sesh['thrower']['_id']})

		# Return OK
		return Services.Response(True)

	def venuePasswdForgot_create(self, data):
		"""Venue Password Forgot Create

		Looks for the venue by email and if found sends an email with a link
		to reset the venue's password

		Arguments:
			data (dict): Data sent with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['email'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Look for the record by email
		oVenue = Venue.get(data['email'], index='email', limit=1)
		if not oVenue:
			return Services.Response(True)

		# Is there already a key in the record?
		if 'forgot' in oVenue and 'regenerate' not in data:

			# Is it not expired?
			if oVenue['forgot']['expires'] > int(time()):
				return Services.Response(True)

		# Update the record with a timestamp (for expiry) and the key
		sKey = StrHelper.random(32, '_0x')
		oVenue['forgot'] = {
			"expires": int(time()) + 300,
			"key": sKey
		}
		if not oVenue.save(changes=False):
			return Services.Response(error=1103)

		# Get the domain config
		dConf = Conf.get("domain")

		# Forgot email template variables
		dTpl = {
			"key": sKey,
			"url": "%s://venue.%s/#forgot=%s" % (
				dConf['protocol'],
				dConf['primary'],
				sKey
			)
		}

		# Email the user the key
		oResponse = Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"html_body": Templates.generate('email/forgot.html', dTpl, oVenue['locale']),
			"subject": Templates.generate('email/forgot_subject.txt', {}, oVenue['locale']),
			"to": data['email'],
		})
		if oResponse.errorExists():
			return oResponse

		# Return OK
		return Services.Response(True)

	def venuePasswdForgot_update(self, data):
		"""Venue Password Forgot Update

		Resets a venue's password by verifying a key associated when they
		triggered the password forgot process

		Arguments:
			data (dict): Data sent with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['passwd', 'key'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Look for the record by the key
		oVenue = Venue.get(filter={"forgot": {"key": data['key']}}, limit=1)
		if not oVenue:
			return Services.Response(error=1403) # Don't let people know if the key exists or not

		# Check if we even have a forgot section, or the key has expired, or the
		#	key is invalid
		if 'forgot' not in oVenue or \
			oVenue['forgot']['expires'] <= int(time()) or \
			oVenue['forgot']['key'] != data['key']:
			return Services.Response(error=1403)

		# Make sure the new password is strong enough
		if not Venue.passwordStrength(data['passwd']):
			return Services.Response(error=1404)

		# Store the new password and update
		oVenue['passwd'] = Venue.passwordHash(data['passwd'])
		oVenue.fieldDelete('forgot')
		oVenue.save(changes=False)

		# Return OK
		return Services.Response(True)

	def venueSession_read(self, data, sesh):
		"""Venue Session

		Returns the session of the venue current signed in

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""
		return Services.Response({
			"_id": sesh['venue']['_id'],
			"name": sesh['venue']['name']
		})

	def venueSignin_create(self, data):
		"""Venue Signin

		Creates a session to keep track of data across the venue's requests

		Arguments:
			data (dict): Data sent with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['email', 'passwd'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Look for the venue by email
		oVenue = Venue.get(data['email'], index='email', limit=1)
		if not oVenue:
			return Services.Response(error=1201)

		# Validate the password
		if not oVenue.passwordValidate(data['passwd']):
			return Services.Response(error=1201)

		# Create a new session, store the venue, and save
		oSesh = Sesh.create('venue:%s' % uuid.uuid4.hex)
		oSesh['venue'] = oVenue.record()
		oSesh.save()

		# Return the session ID and primary venue data
		return Services.Response({
			"session": oSesh.id(),
			"venue": {
				"_id": oSesh['venue']['_id'],
				"name": oSesh['venue']['name']
			}
		})

	def venueSignout_create(self, data, sesh):
		"""Venue Signout

		Signs the venue out by destroying their session

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Close the session so it can no longer be found/used
		sesh.close()

		# Return OK
		return Services.Response(True)

	def venueSignup_create(self, data, sesh):
		"""Venue Signup

		Creates a new venue record and sends the verification email

		Arguments:
			data (dict): Data sent with the request
			sesh (Sesh._Session): The session associated with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['email', 'name', 'passwd'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Make sure the email is valid structurally
		if 'email' in data and not _emailRegex.match(data['email']):
			return Services.Response(error=(1001, [('email', 'invalid')]))

		# Make sure the password is strong enough
		if not Thrower.passwordStrength(data['passwd']):
			return Services.Response(error=1204)

		# Look for someone else with that name
		dVenue = Venue.get(data['name'], index='name', raw=['_id'])
		if dVenue:
			return Services.Response(error=(1400, data['name']))

		# Look for someone else with that email
		dVenue = Venue.get(data['email'], index='email', raw=['_id'])
		if dVenue:
			return Services.Response(error=(1406, data['email']))

		# If no language was passed
		if 'locale' not in data:
			data['locale'] = 'en-US'

		# Init the venue data
		dVenue = {
			"_created": int(time()),
			"email": data['email'],
			"name": data['name'],
			"locale": data['locale'],
			"passwd": Venue.passwordHash(data['passwd']),
			"verified": StrHelper.random(32, '_0x')
		}

		# If there's an email
		if 'email' in data:
			dVenue['email'] = data['email']
			dVenue['verified'] = StrHelper.random(32, '_0x')
		else:
			dVenue['verified'] = False

		# Create an instance
		try:
			oVenue = Venue(dVenue)
		except ValueError as e:
			return Services.Response(error=(1001, e.args[0]))

		# Store the instance
		if not oVenue.create(changes={"creator":"signup"}):
			return Services.Response(error=1100)

		Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"text_body": "Alias: %s\nEmail: %s" % (data['name'], ('email' in data and data['email'] or '')),
			"subject": "Axegains Signup",
			"to": "seamlessvision@gmail.com",
		})

		# Send en e-mail for verification
		dConf = Conf.get("domain")
		sURL = "%s://external.%s/verify/%s/%s" % (
			dConf['protocol'],
			dConf['primary'],
			oVenue['_id'],
			oVenue['verified']
		)
		oResponse = Services.create('communications', 'email', {
			"_internal_": Services.internalKey(),
			"html_body": Templates.generate('email/verify.html', {"url":sURL}, data['locale']),
			"subject": Templates.generate('email/verify_subject.txt', {}, data['locale']),
			"to": data['email'],
		})
		if oResponse.errorExists():
			return oResponse

		# Create a new session, store the venue, and save
		oSesh = Sesh.create('venue:%s' % uuid.uuid4.hex)
		oSesh['venue'] = oVenue.record()
		oSesh.save()

		# Return the session token
		return Services.Response({
			"session": oSesh.id(),
			"venue": {
				"_id": oSesh['venue']['_id'],
				"name": oSesh['venue']['name']
			}
		})

	def venueVerify_update(self, data):
		"""Venue Verify

		Updates the venue's verfified flag if the key sent matches

		Arguments:
			data (dict): Data sent with the request

		Returns:
			Services.Response
		"""

		# Verify data
		try: DictHelper.eval(data, ['_internal_', 'id', 'verify'])
		except ValueError as e: return Services.Response(error=(1001, [(f, 'missing') for f in e.args]))

		# Verify the key, remove it if it's ok
		if not Services.internalKey(data['_internal_']):
			return Services.Response(error=Errors.SERVICE_INTERNAL_KEY)
		del data['_internal_']

		# Find the record
		oVenue = Venue.get(data['id'])
		if not oVenue:
			return Services.Response(error=(1104, data['id']))

		# If the record is already verified
		if oVenue['verified'] == True:
			return Services.Response(True)

		# If the code is not valid
		if data['verify'] != oVenue['verified']:
			return Services.Response(error=1405)

		# Update the record
		oVenue['verified'] = True
		oVenue.save(changes=False)

		# Return OK
		return Services.Response(True)