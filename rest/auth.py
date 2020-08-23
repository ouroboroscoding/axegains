# coding=utf8
""" Auth Service

Handles adding throwers and letting them sign in/out
"""

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2018-09-09"

# Python imports
import os, platform

# Pip imports
from RestOC import Conf, Record_Base, Record_ReDB, REST, \
					Services, Sesh, Templates

# Service imports
from services.auth import Auth

# Load the config
Conf.load('config.json')
sConfOverride = 'config.%s.json' % platform.node()
if os.path.isfile(sConfOverride):
	Conf.load_merge(sConfOverride)

# Add the global prepend and primary host to rethinkdb
Record_Base.dbPrepend(Conf.get(("rethinkdb", "prepend"), ''))
Record_ReDB.addHost('primary', Conf.get(("rethinkdb", "hosts", "primary")))

# Init the Sesh module
Sesh.init(Conf.get(("redis", "session")))

# Create the REST config instance
oRestConf = REST.Config(Conf.get("rest"))

# Set verbose mode if requested
if 'AXE_VERBOSE' in os.environ and os.environ['AXE_VERBOSE'] == '1':
	Services.verbose()

# Get all the services
dServices = {k:None for k in Conf.get(('rest', 'services'))}
dServices['auth'] = Auth()

# Register all services
Services.register(dServices, oRestConf, Conf.get(('services', 'salt')))

# Init Templates
Templates.init('templates')

# Create the HTTP server and map requests to service
REST.Server({

	"/match/request": {"methods": REST.ALL, "session": True},
	"/match/requests": {"methods": REST.READ, "session": True},

	"/thrower": {"methods": REST.READ | REST.UPDATE, "session": True},
	"/thrower/alias": {"methods": REST.UPDATE, "session": True},
	"/thrower/aliases": {"methods": REST.READ},
	"/thrower/email": {"methods": REST.UPDATE, "session": True},
	"/thrower/favourite": {"method": REST.CREATE | REST.DELETE, "session": True},
	"/thrower/favourites": {"method": REST.READ, "session": True},
	"/thrower/org": {"methods": REST.UPDATE, "session": True},
	"/thrower/passwd": {"methods": REST.UPDATE, "session": True},
	"/thrower/passwd/forgot": {"methods": REST.CREATE | REST.UPDATE},
	"/thrower/search": {"methods": REST.READ, "session": True},
	"/thrower/session": {"methods": REST.READ, "session": True},
	"/thrower/signin": {"methods": REST.POST},
	"/thrower/signout": {"methods": REST.POST, "session": True},
	"/thrower/signup": {"methods": REST.POST},
	"/thrower/verify": {"methods": REST.UPDATE},

	"/venue": {"methods": REST.READ | REST.UPDATE, "session": True},
	"/venue/email": {"methods": REST.UPDATE, "session": True},
	"/venue/passwd": {"methods": REST.UPDATE, "session": True},
	"venue/passwd/forgot": {"methods": REST.CREATE | REST.UPDATE},
	"/venue/session": {"methods": REST.READ, "session": True},
	"/venue/signin": {"methods": REST.POST},
	"/venue/signout": {"methods": REST.POST, "session": True},
	"/venue/signup": {"methods": REST.POST},
	"/venue/verify": {"methods": REST.UPDATE}

}, 'auth', "https?://(.*\\.)?%s" % Conf.get(("domain","primary")).replace('.', '\\.')).run(
	host=oRestConf['auth']['host'],
	port=oRestConf['auth']['port'],
	workers=oRestConf['auth']['workers']
)
