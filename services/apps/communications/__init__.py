# coding=utf8
""" Communications Service

Manages communications, email, sms, etc
"""

__author__ = "Chris Nasr"
__copyright__ = "OuroborosCoding"
__version__ = "1.0.0"
__created__ = "2018-11-17"

# Python imports
from hashlib import md5

# Pip imports
from RestOC import Conf, DictHelper, Services, SMTP, StrHelper

class Service(Services.Service):
	"""Service

	The Communications class that extends the base Service class

	Extends:
		Services.Service
	"""

	_queue_key = b'QrJKSczgfuiYh!*R'
	"""Key for encrypting messages between communications and queue"""

	@classmethod
	def _queueKey(cls, data, key=None):
		"""Queue Key

		If nothing is passed, we are generating the key, else we are validating
		it

		Arguments:
			data {dict} -- The data that was passed or retrieved
			key {str} -- The key to validate if passed

		Returns:
			str|bool
		"""

		# Turn the data into a str and md5 it
		sMD5 = md5(str(data).encode('utf-8')).hexdigest()

		# If a key was received
		if key:

			# Decode it and see if it matches the data
			return StrHelper.decrypt(cls._queue_key, key) == sMD5

		# Else
		else:

			# Generate and return a key
			return StrHelper.encrypt(cls._queue_key, sMD5)

	def create(self, path, data, sesh=None):
		"""Create

		Overrides base create so we can manage direct requests vs queued

		Arguments:
			path {str} -- The path/noun of the request
			data {mixed} -- The data passed with the request
			sesh {Sesh._Session} -- Not used

		Returns:
			Effect
		"""

		# If we are sending an email
		if path == 'email':
			return self.email(data)

		# If we are sending an sms
		if path == 'sms':
			return self.sms(data)

		# Invalid path
		return Effect(error=(205, 'POST %s' % path))

	def email(self, data):
		"""Email

		Sends an e-mail, by either sending it to the queue, or sending it
		directly

		Arguments:
			data {dict} -- The data sent with the request

		Returns:
			Services.Effect
		"""

		# Verify fields
		try: DictHelper.eval(data, ['_internal_', 'subject', 'to', 'from'])
		except ValueError as e: return Services.Effect(error=(103, [(f, 'missing') for f in e.args]))

		# Verify the key, remove it if it's ok
		if not Services.internalKey(data['_internal_']):
			return Services.Effect(error=206)
		del data['_internal_']

		# Check that we have at least one type of body
		if 'html_body' not in data and 'text_body' not in data:
			return Services.Effect(error=601)

		# Add None if either body is missing
		if 'html_body' not in data:	data['html_body'] = None
		if 'text_body' not in data:	data['text_body'] = None

		# If we got a _queue_ value
		if '_queue_' in data:

			# Store it
			sQueueKey = data.pop('_queue_')

			# If it's not valid
			if not _queueKey(data, sQueueKey):
				return Services.Effect(error=600)

			# Else, we're good
			data['_queue_'] = True

		# If we are sending direct, or we got a valid request from the queue
		if self.emailMethod == 'direct' or '_queue_' in data:

			# Init the attachments var
			mAttachments = None

			# If there's an attachment
			if 'attachments' in data:

				# Make sure it's a list
				if not isinstance(data['attachments'], (list,tuple)):
					data['attachments'] = [data['attachments']]

				# Loop through the attachments
				for i in range(len(data['attachments'])):

					# If we didn't get a dictionary
					if not isinstance(data['attachments'][i], dict):
						return Services.Effect(error=(602, "attachments.%d" % i))

					# If the fields are missing
					try:
						DictHelper.eval(data['attachments'][i], ['body', 'filename'])
					except ValueError as e:
						return Services.Effects(error=(103, [("attachments.%d.%s" % (i, s), 'invalid') for s in e.args]))

					# Try to decode the base64
					try:
						data['attachments'][i]['body'] = b64decode(data['attachments'][i]['body'])
					except TypeError:
						return Services.Effect(error=602)

				# Set the attachments from the data
				mAttachments = data['attachments']

			# Send the e-mail
			#iRes = SMTP.send(data['to'], data['subject'], text_body=data['text_body'], html_body=data['html_body'], from_=data['from'], attachments=mAttachments)
			print('!!!Email sending turned off during development!!!')
			iRes = SMTP.OK

			# If there was an error
			if iRes != SMTP.OK:
				return Services.Effect(error=(603, '%i %s' % (iRes, SMTP.lastError())))

		# Else, we are sending to the queue first
		else:

			# Add a queue key to the data
			data['_queue_'] = self._queueKey(data)

			# Send the data to the queue service
			oEff = Services.create('queue', 'msg', {
				"_internal_": Services.internalKey(),
				"service": "communications",
				"path": "email",
				"method": "create",
				"data": data
			})

			# Return if there's an error
			if oEff.errorExists():
				return oEff

		# Return OK
		return Services.Effect(True)

	def initialise(self):
		"""Initialise

		Initialises the communications service

		Returns:
			None
		"""

		# Get the method for sending emails
		self.emailMethod = Conf.get(('email', 'method'))

		# If it's invalid
		if self.emailMethod not in ['direct', 'queue']:
			raise ValueError('Communications.emailMethod', self.emailMethod)
