# coding=utf8
""" WebSocket Service

Handles syncing up changes using wevsockets and sessions
"""

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
import signal
import threading

# Import pip modules
from gevent import monkey; monkey.patch_all()
from geventwebsocket import Resource, WebSocketServer
from RestOC import Conf, REST

# Load the config
Conf.load('../config.json')
sConfOverride = '../config.%s.json' % platform.node()
if os.path.isfile(sConfOverride):
	Conf.load_merge(sConfOverride)

# Import service modules
from . import init as wsInit, redisThread, signalCatch, SyncApplication

# If verbose mode is requested
verbose	= False
if 'AXE_VERBOSE' in os.environ and os.environ['AXE_VERBOSE'] == '1':
	verbose	= True

# Catch SIGNTERM and
signal.signal(signal.SIGINT, signalCatch)
signal.signal(signal.SIGTERM, signalCatch)

# Init the sync application
wsInit(verbose)

# Start the Redis thread
try:
	if verbose: print('Starting the Redis thread')
	thread = threading.Thread(target=redisThread)
	thread.daemon = True
	thread.start()
except Exception as e:
	print('Failed to start Redis thread: %s' % str(e))

# Get the host and port
dConf = Conf.get('websocket', {
	"host": "0.0.0.0",
	"port": 8001
})

# Create the websocket server
if verbose: print('Starting the WebSocket server')
server = WebSocketServer(
	(dConf['host'], dConf['port']),
	Resource(OrderedDict([('/',SyncApplication)]))
)

try:
	server.serve_forever()
except KeyboardInterrupt:
	pass

server.close()
