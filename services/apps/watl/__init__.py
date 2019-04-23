# coding=utf8
""" WATL Service

Handles all WATL requests
"""

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
from RestOC import Conf, DictHelper, Errors, Record_ReDB, Services, Sesh

# Project imports
from shared import Sync

# Service imports
from .Records import Practice, PracticePattern, PracticeStats

class Watl(Services.Service):
	"""WATL Service class

	Service for WATL practices and matches

	Extends: shared.Services.Service
	"""

	_install = [Practice, PracticePattern, PracticeStats]
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

	def practice_create(self, data, sesh):
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
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Make sure the value is a list of data points
		if not isinstance(data['points'], list):
			return Services.Effect(error=(1001, [('points', 'must be a list')]))

		# Init the stored structure
		dData = {
			"_created": int(time()),
			"data": [],
			"thrower": sesh['thrower']['_id'],
			"stats": {
				"ksLeft": {
					"attempts": 0,
					"drops": 0,
					"hits": 0,
					"points": 0
				},
				"ksRight": {
					"attempts": 0,
					"drops": 0,
					"hits": 0,
					"points": 0
				},
				"regular": {
					"attempts": 0,
					"sixes": 0,
					"fours": 0,
					"threes": 0,
					"twos": 0,
					"ones": 0,
					"zeros": 0,
					"drops": 0,
					"hits": 0,
					"points": 0
				}
			}
		}

		# Go through every set
		for l in data['points']:

			# If it's a killshot
			if l[0] == 'L':

				# Increase the attempts
				dData['stats']['ksLeft']['attempts'] += 1

				# If it's a drop
				if l[1] == 'd':
					dData['stats']['ksLeft']['drops'] += 1

				# If it's a hit
				elif l[1] == 8:
					dData['stats']['ksLeft']['hits'] += 1
					dData['stats']['ksLeft']['points'] += 8

				# Add the points
				else:
					dData['stats']['ksLeft']['points'] += l[1]

			elif l[0] == 'R':

				# Increase the attempts
				dData['stats']['ksRight']['attempts'] += 1

				# If it's a drop
				if l[1] == 'd':
					dData['stats']['ksRight']['drops'] += 1

				# If it's a hit
				elif l[1] == 8:
					dData['stats']['ksRight']['hits'] += 1
					dData['stats']['ksRight']['points'] += 8

				# Add the points
				else:
					dData['stats']['ksRight']['points'] += l[1]

			# Else it's a standard throw
			else:

				# Increase the attempts
				dData['stats']['regular']['attempts'] += 1

				# Increase the appropriate value
				if l[1] == 'd':
					dData['stats']['regular']['drops'] += 1
				elif l[1] == 6:
					dData['stats']['regular']['sixes'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 5
				elif l[1] == 4:
					dData['stats']['regular']['fours'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 5
				elif l[1] == 3:
					dData['stats']['regular']['threes'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 3
				elif l[1] == 2:
					dData['stats']['regular']['twos'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 3
				elif l[1] == 1:
					dData['stats']['regular']['ones'] += 1
					dData['stats']['regular']['hits'] += 1
					dData['stats']['regular']['points'] += 1
				elif l[1] == 0:
					dData['stats']['regular']['zeros'] += 1

			# Append the set
			dData['data'].append({
				"killshot": l[0],
				"value": l[1]
			})

		# Create a new instance of the practice
		try:
			oPractice = Practice(dData)
		except ValueError as e:
			return Services.Effect(error=(1001, e.args[0]))

		# Store the instance
		if not oPractice.create():
			return Services.Effect(error=1100)

		# Update the total stats
		PracticeStats.add(sesh['thrower']['_id'], dData['stats'])

		# Return OK
		return Services.Effect(True)

	def practiceData_read(self, data, sesh):
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
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Fetch the practice data
		dPractice = Practice.get(data['id'], raw=['data', 'stats'])
		if not dPractice:
			return Services.Effect(error=(1104, 'practice:%s' % data['id']))

		# Return the data
		return Services.Effect(dPractice)

	def practicePattern_create(self, data, sesh):
		"""Practice Pattern (Create)

		Creates a new Practice Pattern for the current thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['title', 'descr', 'throws'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Create the instance
		try:
			oPattern = PracticePattern({
				"_created": int(time()),
				"thrower": sesh['thrower']['_id'],
				"title": data['title'],
				"descr": data['descr'],
				"throws": data['throws']
			})
		except ValueError as e:
			return Services.Effect(error=(1001, e.args[0]))

		# Store the instance
		if not oPattern.create():
			return Services.Effect(error=1100)

		# Return the new ID
		return Services.Effect(oPattern['_id'])

	def practicePattern_delete(self, data, sesh):
		"""Practice Pattern (Delete)

		Deletes an existing Practice Pattern for the current thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the pattern
		oPattern = PracticePattern.get(data['id'])
		if not oPattern:
			return Services.Effect(error=(1104, 'practice_pattern:%s' % data['id']))

		# If the user has no rights
		if oPattern['thrower'] != sesh['thrower']['_id']:
			return Services.Effect(error=1000)

		# Delete the pattern
		if not oPattern.delete():
			return Services.Effect(False)

		# Return OK
		return Services.Effect(True)

	def practicePattern_update(self, data, sesh):
		"""Practice Pattern (Update)

		Replaces an existing Practice Pattern for the current thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['_id'])
		except ValueError as e: return Services.Effect(error=(1001, [(f, "missing") for f in e.args]))

		# Find the pattern
		oPattern = PracticePattern.get(data['_id'])
		if not oPattern:
			return Services.Effect(error=(1104, 'practice_pattern:%s' % data['_id']))

		# If the user has no rights
		if oPattern['thrower'] != sesh['thrower']['_id']:
			return Services.Effect(error=1000)

		# Remove fields that can't be changed
		del data['_id']
		if '_created' in data: del data['_created']
		if 'thrower' in data: del data['thrower']

		# Update whatever is left, catch any invalid values
		lErrors = []
		for k in data:
			try: oPattern[k] = data[k]
			except ValueError as e: lErrors.extend(e.args[0])

		# If there's any errors
		if lErrors:
			return Services.Effect(error=(103, lErrors))

		# Update the pattern
		oPattern.save()

		# Return OK
		return Services.Effect(True)

	def practicePatterns_read(self, data, sesh):
		"""Practice Patterns

		Fetches the list of patterns beloning to the logged in thrower

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# Fetch all patterns for the current thrower and return them
		return Services.Effect(
			PracticePattern.get(sesh['thrower']['_id'], index='thrower', raw=True, orderby='title')
		)

	def practiceStats_read(self, data, sesh):
		"""Practice Stats

		Fetches the total stats for all WATL practices

		Arguments:
			data {dict} -- Data sent with the request
			sesh {Sesh._Session} -- Session associated with the request

		Returns:
			Services.Effect
		"""

		# If the thrower is not passed, assume the logged in thrower
		if 'thrower' not in data:
			data['thrower'] = sesh['thrower']['_id']

		# Fetch the ids and created dates of all practices
		lPractices = Practice.get(data['thrower'], index='thrower', raw=['_id', '_created'], orderby='!_created')

		# Fetch the stats for the last ten practices
		lGraphs = Practice.get(data['thrower'], index='thrower', raw=['_created', 'stats'], orderby='!_created', limit=10)

		# Fetch the overall stats
		dOverall = PracticeStats.get(data['thrower'], raw=True)

		# Return both
		return Services.Effect({
			"graphs": lGraphs,
			"overall": dOverall,
			"practices": lPractices
		})
