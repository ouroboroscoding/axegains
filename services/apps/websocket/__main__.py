# coding=utf8
""" WebSocket Service

Handles syncing up changes using wevsockets and sessions
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
from collections import OrderedDict
import os
import platform
import threading

# Import pip modules
from gevent import monkey; monkey.patch_all()
from geventwebsocket import Resource, WebSocketServer

# Import project modules
from shared import Config, REST

# Load the config
Config.load('config.json')

# If there's a custom config for the system
sCustomConfig	= 'config.%s.json' % platform.node()
if os.path.isfile(sCustomConfig):
	Config.merge(sCustomConfig)

# Import service modules
from . import Init as WSInit, SyncApplication, RedisThread

# Create a PathInfo instance
path_info = REST.PathInfo(Config.get(('services')))

# If verbose mode is requested
verbose	= False
if 'LOGLEVEL' in os.environ and os.environ['LOGLEVEL'] == 'verbose':
	verbose	= True

# Set the host, port, and number of workers
_host		= 'API_HOST' in os.environ and os.environ['API_HOST'] or '0.0.0.0'
_port		= 'API_PORT' in os.environ and int(os.environ['API_PORT']) or path_info['websocket']['port']

# Init the sync application
WSInit(verbose)

# Start the Redis thread
try:
	if verbose: print('Starting the Redis thread')
	thread	= threading.Thread(target=RedisThread)
	thread.daemon	= True
	thread.start()
except Exception as e:
	print('Failed to start Redis thread: %s' % str(e))

# Create the websocket server
if verbose: print('Starting the WebSocket server')
server	= WebSocketServer(
	(_host, _port),
	Resource(OrderedDict([('/',SyncApplication)]))
)

try:
	server.serve_forever()
except KeyboardInterrupt:
	pass

server.close()
