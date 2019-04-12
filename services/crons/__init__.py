# coding=utf8
""" Crons code

Available classes/functions for running crons
"""

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2019-04-12"

# Python imports
import atexit
import os
import sys

# Keep a list of running pidfiles
_lPidFiles = []

def _cleanupPidfiles():
	"""Cleanup Pidfiles

	Called when the interpreter closes

	Returns:
		None
	"""

	# Go through each pidfile and delete it
	for s in _lPidFiles:
		os.unlink(s)

# Register at exit function
atexit.register(_cleanupPidfiles)

def isRunning(name):
	"""Is Running

	Checks if the cron job is already running, if not, creates pidfile so
	future calls return true

	Arguments:
		name {str} -- The name of the cron job to check

	Returns:
		bool
	"""

	# Generate the nameof the files
	sFile = '/tmp/%s.pid' % name

	# If the file already exists
	if os.path.isfile(sFile):
		return True

	# Create the file
	file(pidfile, 'w').write(str(os.getpid()))
	return False
