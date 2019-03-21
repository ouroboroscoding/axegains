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

# Python imports
import os, platform

# Framework imports
from RestOC import Conf, Record_Base, Record_ReDB, REST, Services, Sesh

# App imports
from apps.auth import Auth

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

# Create a list of all available services, override Auth
dServices = {k:None for k in Conf.get(('rest', 'services'))}
dServices['auth'] = Auth()

# Register all services
Services.register(dServices, oRestConf, Conf.get(('services', 'salt')))

# Create the HTTP server and map requests to service
REST.Server({
	"/signin": {"methods": REST.POST},
	"/signout": {"methods": REST.POST, "session": True},
	"/signup": {"methods": REST.POST},
	"/user": {"methods": REST.READ | REST.UPDATE, "session": True}
}, 'auth', "https?://.*\\.%s" % Conf.get(("domain","primary")).replace('.', '\\.')).run(
	host=oRestConf['auth']['host'],
	port=oRestConf['auth']['port'],
	workers=oRestConf['auth']['workers']
)
