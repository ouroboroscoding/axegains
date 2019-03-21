# coding=utf8
""" External Service

Handles external links like email verification
"""

__author__ = "Chris Nasr"
__copyright__ = "OuroborosCoding"
__version__ = "1.0.0"
__created__ = "2018-11-17"

# Python imports
import os, platform

# Pip imports
import bottle

# Rest imports
from RestOC import Conf, REST, Services

# Load the config
Conf.load('../config.json')
sConfOverride = '../config.%s.json' % platform.node()
if os.path.isfile(sConfOverride):
	Conf.load_merge(sConfOverride)

# Create the REST config instance
oRestConf = REST.Config(Conf.get("rest"))

# Set verbose mode if requested
_bVerbose = False
if 'AXE_VERBOSE' in os.environ and os.environ['AXE_VERBOSE'] == '1':
	_bVerbose = True

# Register the Services that will be accessible
Services.register({
	"auth": None,
	"communications": None
}, oRestConf, Conf.get(('services', 'salt')))

def emailEffect(effect, info):
	"""Email Effect

	Sends the effect to a developer so they are aware of the error

	Arguments:
		effect {Services.Effect} -- The effect to send
		info {dict} -- Info about the request

	Returns:
		None
	"""

	# Try to send an e-mail
	oEffect = Services.create('communications', 'email', {
		"_internal_": Services.internalKey(),
		"from": "noreply@%s" % Conf.get(("domain", "primary")),
		"subject": "external error",
		"text_body": "Info: %s\nEffect: %s" % (str(info), str(effect)),
		"to": Conf.get(("email", "errors"))
	})

	# If there's an error
	if oEffect.errorExists():
		raise oEffect

def show500():
	bottle.response.status = 500
	return """
<!DOCTYPE html>
<html>
	<head>
		<title>500 Internal Server Error</title>
	</head>
	<body>
		<h1>500 Internal Server Error</h1>
		<p>An internal error has occured which caused your request to fail. An administrator has been notified of the failure and it will be worked on ASAP.</p>
	</body>
</html>"""

@bottle.route('/verify/<id>/<key>')
def verify(id, key):

	# Contact the auth service to verify the key
	oEffect = Services.update('auth', 'thrower/verify', {
		"_internal_": Services.internalKey(),
		"id": id,
		"verify": key
	})

	# If there's an error
	if oEffect.errorExists():
		print(oEffect)
		emailEffect(oEffect, {"request":"verify", "id": id, "key":key})
		return show500()

	# Redirect to my
	dConf = Conf.get("domain")
	bottle.redirect("%s://%s/#verified" % (
		dConf['protocol'],
		dConf['primary']
	))

# Run the webserver
bottle.run(
	host=oRestConf['external']['host'],
	port=oRestConf['external']['port'],
	server="gunicorn",
	workers=oRestConf['external']['workers']
)
