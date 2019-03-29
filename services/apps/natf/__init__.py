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

# Pip imports
from RestOC import Conf, DictHelper, Record_ReDB, Services, Sesh

# Project imports
from shared import Sync

# Service imports
from .Records import Practice

class Natf(Services.Service):
	"""NATF Service class

	Service for NATF practices and matches

	Extends: shared.Services.Service
	"""

	_install = [Practice]
	"""Record types called in install"""

	def initialise(self):
		"""Initialise

		Initialises the instance and returns itself for chaining

		Returns:
			Auth
		"""

		# Init the sync module
		Sync.init(Conf.get(('redis', 'sync'), {
			"host": "localhost",
			"port": 6379,
			"db": 1
		}))

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
			sesh {Sesh._Session} -- Session associated with the request

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
			"_created": int(time()),
			"clutches": {
				"attempts": 0,
				"hits": 0
			},
			"data": [],
			"points": {
				"target": 0,
				"total": 0
			},
			"thrower": sesh['thrower']['_id'],
			"throws": {
				"attempts": len(data['points']),
				"drops": 0,
				"hits": 0
			}
		}

		# Go through every set
		for l in data['points']:

			# If it's a clutch
			if l[0]:

				# Increment the clutch attempts
				dData['clutches']['attempts'] += 1

				# If it's a hit
				if l[1] == 7:

					# Add to the total points
					dData['points']['total'] += 7

					# Increment the hits
					dData['throws']['hits'] += 1
					dData['clutches']['hits'] +=1

			# Else a target throw
			else:

				# If it's not a drop and it's over 0
				if isinstance(l[1], int) and l[1] > 0:

					# Add to the points
					dData['points']['total'] += l[1]
					dData['points']['target'] += l[1]

					# Increment the hits
					dData['throws']['hits'] += 1

			# If it's a drop
			if l[1] == 'd':
				dData['throws']['drops'] += 1

			# Append the set
			dData['data'].append({
				"clutch": l[0],
				"value": l[1]
			})

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

	def practiceDataRead(self, data, sesh):
		"""Practice Data

		Returns all the data points associated with a practice session

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(103, [(f, "missing") for f in e.args]))

		# Fetch the practice data
		dPractice = Practice.get(data['id'], raw=['data'])
		if not dPractice:
			return Services.Effect(error=(104, data['id']))

		# Return the data
		return Services.Effect(
			[[d['clutch'], d['value']] for d in dPractice['data']]
		)

	def practiceStatsRead(self, data, sesh):
		"""Practice Stats

		Fetches the total stats for all NATF practices

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# If the thrower is not passed, assume the logged in thrower
		if 'thrower' not in data:
			data['thrower'] = sesh['thrower']['_id']

		# Fetch all records
		lRecs = Practice.get(
			data['thrower'], index='thrower',
			raw=['_id', '_created', 'clutches', 'points', 'throws'],
			orderby='!_created'
		)

		# Init the return data
		dRet = {
			"total": {
				"average": {},
				"clutches": {"attempts": 0, "hits": 0},
				"points": {"total": 0, "target": 0},
				"rate": {},
				"throws": {"attempts": 0, "drops": 0, "hits": 0},
				"target": {}
			},
			"last": []
		}

		# Go through the indexes of the records
		for i in range(len(lRecs)):

			# Add to the total clutches
			dRet['total']['clutches']['attempts'] += lRecs[i]['clutches']['attempts']
			dRet['total']['clutches']['hits'] += lRecs[i]['clutches']['hits']

			# Add to the total points
			dRet['total']['points']['target'] += lRecs[i]['points']['target']
			dRet['total']['points']['total'] += lRecs[i]['points']['total']

			# Add to the total throws
			dRet['total']['throws']['attempts'] += lRecs[i]['throws']['attempts']
			dRet['total']['throws']['drops'] += lRecs[i]['throws']['drops']
			dRet['total']['throws']['hits'] += lRecs[i]['throws']['hits']

			# If the record is in the last five
			if i < 5 or ('all' in data and data['all']):

				# Target attempts / hits
				lRecs[i]['target'] = {
					"attempts": lRecs[i]['throws']['attempts'] - lRecs[i]['clutches']['attempts'],
					"hits": lRecs[i]['throws']['hits'] - lRecs[i]['clutches']['hits']
				}

				# Calculate the averages
				lRecs[i]['average'] = {}
				lRecs[i]['average']['total'] = (lRecs[i]['throws']['attempts'] != 0 and
					round(
						lRecs[i]['points']['total'] / lRecs[i]['throws']['attempts'],
						2
					) or
					0.0)
				lRecs[i]['average']['target'] = (lRecs[i]['target']['attempts'] != 0 and
					round(
						lRecs[i]['points']['target'] / lRecs[i]['target']['attempts'],
						2
					) or
					0.0)

				# Calculate the rates
				lRecs[i]['rate'] = {}
				lRecs[i]['rate']['total'] = (lRecs[i]['throws']['attempts'] != 0 and
					round(
						100.0 * (lRecs[i]['throws']['hits'] / lRecs[i]['throws']['attempts']),
						1
					) or
					0.0)
				lRecs[i]['rate']['target'] = (lRecs[i]['target']['attempts'] != 0 and
					round(
						100.0 * (lRecs[i]['target']['hits'] / lRecs[i]['target']['attempts']),
						1
					) or
					0.0)
				lRecs[i]['rate']['clutch'] = (lRecs[i]['clutches']['attempts'] != 0 and
					round(
						100.0 * (lRecs[i]['clutches']['hits'] / lRecs[i]['clutches']['attempts']),
						1
					) or
					0.0)

				# Insert the record at the beginning of the 'last' list
				dRet['last'].append(lRecs[i])

		# Target attempts / hits
		dRet['total']['target'] = {
			"attempts": dRet['total']['throws']['attempts'] - dRet['total']['clutches']['attempts'],
			"hits": dRet['total']['throws']['hits'] - dRet['total']['clutches']['hits']
		}

		# Calculate the averages
		dRet['total']['average']['total'] = (dRet['total']['throws']['attempts'] != 0 and
			round(
				dRet['total']['points']['total'] / dRet['total']['throws']['attempts'],
				2
			) or
			0.0)
		dRet['total']['average']['target'] = (dRet['total']['target']['attempts'] != 0 and
			round(
				dRet['total']['points']['target'] / dRet['total']['target']['attempts'],
				2
			) or
			0.0)

		# Calculate the rates
		dRet['total']['rate']['total'] = (dRet['total']['throws']['attempts'] != 0 and
			round(
				(100.0 * (
					dRet['total']['throws']['hits'] / dRet['total']['throws']['attempts']
				)),
				1
			) or
			0.0)
		dRet['total']['rate']['target'] = (dRet['total']['target']['attempts'] != 0 and
			round(
				(100.0 * (
					dRet['total']['target']['hits'] / dRet['total']['target']['attempts']
				)),
				1
			) or
			0.0)
		dRet['total']['rate']['clutch'] = (dRet['total']['clutches']['attempts'] != 0 and
			round(
				(100.0 * (
					dRet['total']['clutches']['hits'] / dRet['total']['clutches']['attempts']
				)),
				1
			) or
			0.0)

		# Return the data
		return Services.Effect(dRet)
