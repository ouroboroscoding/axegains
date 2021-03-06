# coding=utf8
"""Communications Loader

Loads the Communications service and maps HTTP requests to specific Service
requests
"""

__author__ = "Chris Nasr"
__copyright__ = "OuroborosCoding"
__version__ = "1.0.0"
__created__ = "2018-11-17"

# Python imports
import os, platform

# Pip imports
from RestOC import Conf, REST, Services, SMTP

# App imports
from apps.communications import Service as Communications

# Load the config
Conf.load('../config.json')
sConfOverride = '../config.%s.json' % platform.node()
if os.path.isfile(sConfOverride):
	Conf.load_merge(sConfOverride)

# Init the SMTP module
SMTP.init(**Conf.get(('email', 'smtp')))

# Create the REST config instance
oRestConf = REST.Config(Conf.get("rest"))

# Set verbose mode if requested
if 'AXE_VERBOSE' in os.environ and os.environ['AXE_VERBOSE'] == '1':
	Services.verbose()

# Register the Services that will be accessible
Services.register({
	"communications": Communications()
}, oRestConf, Conf.get(('services', 'salt')))

# Create the HTTP server and map requests to service
REST.Server({
	"/email": {"methods": REST.POST},
	"/sms": {"methods": REST.POST},
}, 'communications').run(
	host=oRestConf['communications']['host'],
	port=oRestConf['communications']['port'],
	workers=oRestConf['communications']['workers']
)
