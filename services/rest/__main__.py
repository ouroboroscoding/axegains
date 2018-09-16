# coding=utf8
""" Consent Forms Service

Handles adding consent forms and allowing patients to sign them
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
import os
import platform

# Import project modules
from modules import Config, Session, Storage
from modules.REST import PathInfo
from modules.Services import register, verbose
from modules.WebServer import WebServer, M

# Import service
from services.rest import Rest

# Load the config
Config.load('config.json')

# If there's a custom config for the system
sCustomConfig = 'config.%s.json' % platform.node()
if os.path.isfile(sCustomConfig):
	Config.merge(sCustomConfig)

print(os.environ)

# If verbose mode is requested
if 'LOGLEVEL' in os.environ and os.environ['LOGLEVEL'] == 'verbose':
	verbose()

# Add the default DB and prefix
Storage.server('default', Config.get(('nosql','hosts','default')))
Storage.globalPrefix(Config.get(('nosql', 'db_prefix'), ''))

# Init the Sessions
Session.init(Config.get(('redis', 'sync')))

# Create a PathInfo instance
path_info = PathInfo(Config.get(('services')))

# Register the service
register({
	'rest':Rest()
}, pathinfo=path_info)

# Set the host, port, and number of workers
_host = 'API_HOST' in os.environ and os.environ['API_HOST'] or '0.0.0.0'
_port = 'API_PORT' in os.environ and os.environ['API_PORT'] or path_info['rest']['port']
_workers = 'API_WORKERS' in os.environ and os.environ['API_WORKERS'] or 2

# Setup and start the WebServer
WebServer({
	"/rest/signin": {"service":"rest", "methods": M.CREATE, "noun": "signin"},
	"/rest/signout": {"service":"rest", "methods": M.CREATE, "noun": "signout"},
	"/rest/signup": {"service":"rest", "methods": M.CREATE, "noun": "signup"},
	"/rest/user": {"service":"rest", "methods": M.READ | M.UPDATE, "noun": "user"},
	"/rest/session": {"service":"rest", "methods": M.CREATE | M.READ, "noun": "session"},
	"/rest/stats": {"service":"rest", "methods": M.READ, "noun": "stats"}
}).run(host=_host, port=_port, server="gunicorn", workers=_workers)
