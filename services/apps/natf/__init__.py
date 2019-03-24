# coding=utf8
""" NATF Service

Handles all NATF requests
"""

# Import future
from __future__ import print_function, absolute_import

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2019-03-24"

# Python imports
import re
from time import time

# Framework imports
from RestOC import Conf, DictHelper, Record_ReDB, Services, Sesh

# Service imports
from .Records import Practice

class Natf(Services.Service):
	"""NATF Service class

	Service for NATF practices and matches

	Extends: shared.Services.Service
	"""

	_install = [Practice]
	"""Record types called in install"""

	@classmethod
	def install(cls):
		"""Install

		The service's install method, used to setup storage or other one time
		install configurations

		Returns:
			bool
		"""

		# Go through each Record type
		for o in cls._install:

			# Install the table
			if not o.tableCreate():
				print("Failed to create `%s` table" % o.tableName())

	def practiceCreate(self, data, sesh):
		"""Practice Create

		Stores the details of a practice session

		Arguments:
			data {dict} -- Data sent with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['points'])
		except ValueError as e: return Services.Effect(error=(103, [(f, "missing") for f in e.args]))

		# Make sure the value is a list of data points
		if not isinstance(data['points'], list):
			return Services.Effect(error=(103, [('points', 'must be a list')]))

		# Init the stored structure
		dData = {
			"thrower": session['thrower']['_id'],
			"total": 0,
			"points": data['points'],
			"clutches": {
				"attempts": 0,
				"hits": 0
			}
		}

		# Go through every set
		for l in data['points']:

			# If it's a clutch
			if l[0]:
				dData['clutches']['attempts'] += 1

				# If it's a hit
				if l[1] == 7:
					dData['clutches']['hits'] +=1

			# Add to the total
			if isinstance(l[1], int):
				dData['total'] += l[1]

		# Create a new instance of the practice
		try:
			oPractice = Practice(dData)
		except ValueError as e:
			return Services.Effect(error=(103, e.args[0]))

		# Store the instance
		if not oPractice.create():
			return Services.Effect(error=300)

		# Return OK
		return Services.Effect(True)
