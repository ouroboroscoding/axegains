# coding=utf8
""" NATF Service

Handles everything related to NATF practice, matches, etc.
"""

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2019-03-24"

# Python imports
import os, platform

# Pip imports
from RestOC import Conf, Record_Base, Record_ReDB, REST, \
					Services, Sesh

# App imports
from apps.natf import Natf

# Load the config
Conf.load('../config.json')
sConfOverride = '../config.%s.json' % platform.node()
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

# Register all necessary services
Services.register({
	"auth": None,
	"natf": Natf()
}, oRestConf, Conf.get(('services', 'salt')))

# Create the HTTP server and map requests to service
REST.Server({
	"/match": {"methods": REST.CREATE | REST.DELETE | REST.READ, "session": True},
	"/match/bigaxe/points": {"methods": REST.UPDATE, "session": True},
	"/match/bigaxe/target": {"methods": REST.UPDATE, "session": True},
	"/match/finish/bigaxe/points": {"methods": REST.UPDATE, "session": True},
	"/match/finish/bigaxe/target": {"methods": REST.UPDATE, "session": True},
	"/match/finish/games": {"methods": REST.UPDATE, "session": True},
	"/match/game": {"methods": REST.UPDATE, "session": True},
	"/match/stats": {"methods": REST.READ, "session": True},
	"/match/unfinished": {"methods": REST.READ, "session": True},

	"/practice": {"methods": REST.CREATE, "session": True},
	"/practice/data": {"methods": REST.READ, "session": True},
	"/practice/pattern": {"methods": REST.CREATE | REST.DELETE | REST.UPDATE, "session": True},
	"/practice/patterns": {"methods": REST.READ, "session": True},
	"/practice/stats": {"methods": REST.READ, "session": True}

}, 'natf', "https?://(.*\\.)?%s" % Conf.get(("domain","primary")).replace('.', '\\.')).run(
	host=oRestConf['natf']['host'],
	port=oRestConf['natf']['port'],
	workers=oRestConf['natf']['workers']
)
