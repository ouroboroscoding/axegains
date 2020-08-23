# coding=utf8
""" IATF Crons

Process IATF queue
"""

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2019-04-12"

# Python imports
from time import time

# Pip imports
from RestOC import Conf, Record_ReDB

# Record imports
from records.iatf import Match, MatchStats

# Cron imports
from . import isRunning

def run(which):
	"""Run

	Main entry into the IATF cron script

	Returns:
		int
	"""

	# If we're working on matches
	if which == 'match':

		# If it's already running
		if isRunning('iatfMatch'):
			return 0

		# Else, get matches
		if not matches():
			return 1

	# Return OK
	return 0

def matches():
	"""Matches

	Calculates the stats for the given match

	Returns:
		bool
	"""

	# Find matches that are finished but uncalculated
	lMatches = Match.get((True, False), index="calculate")

	# Go through each one
	for oMatch in lMatches:

		# Calculate the stats for the initiator
		dStats = oMatch.calculateStats('i')

		# Add them to the initiator
		MatchStats.add(oMatch['initiator'], dStats)

		# Calculate the stats for the opponent
		dStats = oMatch.calculateStats('o')

		# Add them to the initiator
		MatchStats.add(oMatch['opponent'], dStats)

		# Mark the match as calculated
		Match.calculated(oMatch['_id'])

	# Return OK
	return True
