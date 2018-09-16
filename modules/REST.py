# coding=utf8
""" REST Module

Holds methods and classes for simplifying REST operations
"""

# Import future
from __future__ import print_function, absolute_import

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2018-09-12"

## PathInfo class
class PathInfo(object):
	"""Path INFO

	Holds information on how to access a list of services given the shared
	config

	Extends:
		object
	"""

	# __contains__ method
	def __contains__(self, service):
		"""__contains__

		Returns true if the specific key exists in the session

		Args:
			service (str): The name of the service to check for

		Returns:
			bool
		"""
		return service in self.__services or service in self.__loaders

	# __getitem__ method
	def __getitem__(self, service):
		"""__getitem__

		Returns a specific key from the dict

		Args:
			service (str): The name of the service return

		Raises:
			KeyError

		Returns:
			mixed
		"""

		# If it's in services
		if service in self.__services:
			return self.__services[service].copy()

		# If it's in the loaders
		elif service in self.__loaders:
			return self.__loaders[service].copy()

		# Else, throw an exception
		else:
			raise KeyError(service)

	# Constructor method
	def __init__(self, services):
		"""Constructor

		Instantiates the instance

		Args:
			services (dict): The list of services, defaults, and loaders

		Returns:
			PathInfo
		"""

		# If we didn't get a dictionary for the services
		if not isinstance(services, dict) or 'specific' not in services:
			raise ValueError('services')

		# If we are missing the defaults
		if 'defaults' not in services:
			services['defaults'] = {}

		# Init the port modifier var
		port_modifier	= 0

		# If there's a port in the defaults
		if 'port' in services['default']:

			# Check it's an int
			if not isinstance(services['default']['port'], (int,long)):
				raise ValueError('default.port must be an int')

			# Pop it
			port_modifier	= services['default'].pop('port')

		# Init the list of Services
		self.__services = {}

		# Go through each service
		for service in services['specific']:

			# If it's not a dictionary
			if not isinstance(services['specific'][service], dict):
				raise ValueError('specific.%s' % service)

			# Copy the defaults to the parts var
			parts = services['default'].copy()

			# Update parts with the service info
			parts.update(services['specific'][service])

			# If we have no port
			if 'port' not in parts:

				# But we have a modifier
				if port_modifier:
					parts['port'] = 80 + port_modifier

			else:
				parts['port'] += port_modifier

			# Get defaults for the missing parts
			if not parts['protocol']:	parts['protocol']	= 'http'
			if not parts['domain']:		parts['domain']		= 'localhost'
			if 'path' not in parts:		parts['path']		= ''
			else:						parts['path']		= '%s/' % str(parts['path'])

			# Store the parts
			self.__services[service]	= parts.copy()

			# Generate and store the URL
			self.__services[service]['url']	= '%s://%s%s/%s' % (
				parts['protocol'],
				parts['domain'],
				'port' in parts and ":%d" % parts['port'] or '',
				parts['path']
			)

			# If there's no port at all, store 80 so that calls to it won't fail
			if 'port' not in self.__services[service]:
				self.__services[service]['port'] = 80

		# Init the list of loaders
		self.__loaders = {}

		# If we have loaders
		if 'loaders' in services:

			# Go through each one
			for loader in services['loaders']:

				# If it's not a dictionary
				if not isinstance(services['loaders'][loader], dict):
					raise ValueError('loaders.%s' % loader)

				# Copy the values
				parts = services['loaders'][loader].copy()

				# If we have no port
				if 'port' not in parts:

					# But we have a modifier
					if port_modifier:
						parts['port'] = 80 + port_modifier

				# Else we have the port
				else:
					parts['port'] += port_modifier

				# Store the parts
				self.__loaders[loader] = parts.copy()

	# __iter__ method
	def __iter__(self):
		"""__iter__

		Return an iterator for the services

		Returns:
			iterator
		"""
		return iter(self.__services)

	# __str__ method
	def __str__(self):
		"""__str__

		Returns a string representation of the services

		Returns:
			str
		"""
		return str(self.__services)

	# loaders method
	def loaders(self):
		"""loaders

		Returns the list of loaders in the instance

		Returns:
			str[]
		"""
		return self.__loaders.keys()

	# services method
	def services(self):
		"""services

		Returns the list of services in the instance

		Returns:
			str[]
		"""
		return self.__services.keys()
