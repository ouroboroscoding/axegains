# coding=utf8
""" WebSocket Service

Handles syncing up changes using websockets and sessions
"""

# Import future
from __future__ import print_function, absolute_import

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2017-06-26"

# Import python modules
from Cookie import SimpleCookie
import json
import time

# Import pip modules
from gevent import monkey; monkey.patch_all()
import gevent
from geventwebsocket import WebSocketApplication, WebSocketError
from redis import StrictRedis
from redis.exceptions import ConnectionError

# Import local modules
from shared import Config

# Init the global  vars
_r			= None
_r_pubsub	= None
_r_clients	= {}
_verbose	= False

# Init function
def Init(verbose=False):
	"""Init

	Called to initialize the service

	Args:
		verbose (bool): Optional verbose argument
			if set to True, the service will print out what's going on
	"""

	# Import the global redis instance
	global _r, _r_pubsub, _verbose

	# Create a new Redis instance
	_r	= StrictRedis(**Config.get(('redis', 'sync'), {
		"host":	"localhost",
		"port":	6380,
		"db":	1
	}))

	# Get the pubsub instance
	_r_pubsub	= _r.pubsub()

	# Subscribe to an empty channel just to get things started
	_r_pubsub.subscribe('sync')

	# Set the verbose flag
	_verbose	= verbose and True or False

# Redis thread
def RedisThread():

	if _verbose: print('Threading starting')

	try:

		# Try to get messages
		for d in _r_pubsub.listen():

			if _verbose: print('Received pubsub message: %s' % str(d))

			# If the message is real data and not subscribe/ubsubscribe
			if d['type'] == 'message':

				# If we have the channel
				if d['channel'] in _r_clients:

					# Forward the message to each socket
					for ws in _r_clients[d['channel']]:
						ws.on_publish(d['data'])

	except Exception as e:
		print(str(e))

	if _verbose: print('Threading finished')

# The application class
class SyncApplication(WebSocketApplication):
	"""Sync Application

	This class will handle all joined connections to the server
	"""

	# fail method
	def _fail(self, code = 0, msg = 'websocket failure'):
		"""Fail

		Called to close the current connection with the default error message

		Args:
			code (uint): The error code
			msg (str): The error msg

		Returns:
			None
		"""

		self.ws.send('{"error":{"code":%d,"msg":"%s"},"data":null}' % (code, msg))
		self.ws.close()

	# on close method
	def on_close(self, reason=None):
		"""On Close

		Called when an existing client websocket is closed

		Args:
			reason (str?): The reason the connection closed?
		"""
		if _verbose: print('Connection closed: %s' % reason)

		# If we have any subpubs, ubsubscribe
		for track in self.tracking:

			# If we have a subpub, ubsubscribe
			try:_r_clients[track].length == 1 and _r_pubsub.unsubscribe(track)
			except:	pass

			# If we're in the list of clients
			try: _r_clients[track].remove(self)
			except:	pass

	# on message method
	def on_message(self, message):
		"""On Message

		Called when a new message is received from an existing client websocket
		"""

		if _verbose: print('Message received: %s' % str(message))

		# If it's None, we do nothing
		if not message:
			return

		# Catch any potential exceptions
		try:

			# Convert the JSON data
			try:
				messages	= json.loads(message)
			except ValueError as e:
				if _verbose: print('Failed to decode JSON: "%s"' % message)
				return self._fail(1, 'Failed to decode JSON: "%s"' % message)

			# If the message is not a list
			if not isinstance(messages, list):
				messages = [messages]

			# Go through each message
			for data in messages:

				# If the message has no type
				if '_type' not in data:
					if _verbose: print('Type missing from message: "%s"' % message)
					return self._fail(2, 'Type missing from message: "%s"' % message)

				# If it's a connect message
				if data['_type'] == 'connect':

					# If the message has no key
					if 'key' not in data:
						if _verbose: print('Key missing from connect message: "%s"' % message)
						return self._fail(3, 'Key missing from connect message: "%s"' % message)

					# Fetch the data associated with the key in the message
					sConnect = _r.get(data['key']);

					# If the key doesn't exist
					if not sConnect:
						if _verbose: print('Key found no data: \'%s\'' % data['key'])
						return self._fail(4, 'Key found no data: \'%s\'' % data['key'])

					# Delete the key
					_r.delete(data['key'])

					# Convert the JSON data
					try:
						dConnect	= json.loads(sConnect)
					except ValueError as e:
						if _verbose: print('Failed to decode JSON: "%s"' % sConnect)
						return self._fail(5, 'Failed to decode JSON: "%s"' % sConnect)

					# If the session ID doesn't exist
					if 'phpsid' not in dConnect:
						if _verbose: print('Session ID missing: "%s"', sConnect)
						return self._fail(6, 'Session ID missing: "%s"' % sConnect)

					# If the PHP session ID doesn't match
					if dConnect['phpsid'] != self.phpsid:
						if _verbose: print('Session IDs don\'t match: "%s" != "%s"' % (dConnect['phpsid'], self.phpsid))
						return self._fail(7, 'Session IDs don\'t match: "%s" != "%s"' % (dConnect['phpsid'], self.phpsid))

					# Allow further messages
					self.authorized = True

				# Else if it's a message to track something new
				elif data['_type'] == 'track':

					# Make sure we are authorized or else fuck off
					if not self.authorized:
						if _verbose: print('Received track message before authorization')
						self._fail(8, 'Received track message before authorization')

					# Check for an object and key
					for s in ['service', 'key']:

						# If the data is missing
						if s not in data:
							if _verbose: print('Missing `%s` in message: ""' % (s, message))
							return self._fail(9, 'Missing `%s` in message: ""' % (s, message))

						# Make sure the data is a string
						if not isinstance(data[s], basestring):
							data[s] = str(data[s])

					# Combine the two
					track = "%s%s" % (data['service'], data['key'])

					# Add the track code to the client list
					try:
						_r_clients[track].append(self)
					except:
						_r_clients[track] = [self]
						_r_pubsub.subscribe(track)

					# Add it to the list on this socket
					if _verbose: print('Successfully started tracking: "%s"' % track)
					self.tracking.append(track)

				# Else if it's a message to ping
				elif data['_type'] == 'ping':

					# Make sure we are authorized
					if not self.authorized:
						if _verbose: print('Received ping message before authorization')
						self._fail(8, 'Received ping message before authorization')

					_r.ping()

					self.ws.send(json.dumps('pong'))


				# Else this is an invalid message
				else:
					if _verbose: print('Invalid message type: "%s"' % str(data['_type']))
					return self._fail(10, 'Invalid message type: "%s"' % str(data['_type']))

		# Catch any redis connection errors
		except ConnectionError as e:
			print(str(e))
			self.ws.close()

		# Catch any websocket errors
		except WebSocketError as e:
			print(str(e))
			self.ws.close()

	# on open method
	def on_open(self):
		"""On Open

		Will be called when a new client connects to the server
		"""

		if _verbose: print('on_open called')

		# If there is no cookie
		if 'HTTP_COOKIE' not in self.ws.environ:
			if _verbose: print('HTTP_COOKIE missing')
			return self._fail(11, 'HTTP_COOKIE missing')

		# If the cookie lacks the PHPSESSID value
		oCookies = SimpleCookie()
		oCookies.load(self.ws.environ['HTTP_COOKIE'])
		dCookies = {k:v.value for k,v in oCookies.items()}
		if 'PHPSESSID' not in dCookies:
			if _verbose: print('PHPSESSID not in cookies')
			return self._fail(12, 'PHPSESSID not in cookies')

		# Store the session ID
		self.phpsid	= dCookies['PHPSESSID']
		self.authorized = False
		self.tracking = []

	# on publish method
	def on_publish(self, message):
		"""On Publish

		Called when new pubsub messages arrive on a channel this web socket
		is subscribed to

		Args:
			message (str): A published message

		Returns:
			None
		"""
		if _verbose: print('on_publish called with message: %s' % message)
		self.ws.send(message)