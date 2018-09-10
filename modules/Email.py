# coding=utf8
"""Email

Wrapper for python smtp module that works with Config
"""

# Import future
from __future__ import print_function

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2018-09-09"

# Import python modules
from email.mime.application import MIMEApplication
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.utils import formatdate
import smtplib
from os.path import basename

# Init the local variables
_aSMTP	= {
	"host":		"localhost",
	"port":		25,
	"tls":		False,
	"passwd":	""
}

# Init the last error message
_sErrMsg	= '';

# Create the defines
OK				= 0
FAILED_UNKNOWN	= -1
FAILED_CONNECT	= -2
FAILED_LOGIN	= -3
FAILED_BODY		= -4

# lastError function
def lastError():
	"""Last Error

	Returns the last error message if there is one

	Returns:
		str
	"""
	global _sErrMsg
	return _sErrMsg

# send function
def send(to_addr, subject, text_body = None, html_body = None, from_addr='root@localhost', bcc=None, attachments=None):
	"""Send

	Sends an e-mail to one or many addresses

	Args:
		to_addr (str|str[]): Address or addresses to send the e-mail to
		subject (str): The subject of the e-mail
		body (str): The body, or main content, of the e-amil
		from_addr (str): Optional from address of the e-mail
		bcc (str|str[]): Optional blind carbon copy address or addresses to send
			the e-mail to

	Returns:
		bool
	"""

	global _sErrMsg

	# If the to is not a list
	if not isinstance(to_addr, (list,tuple)):
		to_addr	= [to_addr]

	# Create a new Mime MultiPart message
	oMsg	= MIMEMultipart()
	oMsg['From']	= from_addr
	oMsg['To']		= ', '.join(to_addr)
	oMsg['Date']	= formatdate()
	oMsg['Subject']	= subject

	# Check that text or html body is set
	if not text_body and not html_body:
		return FAILED_BODY;

	# Attach the main message
	if text_body:
		oMsg.attach(MIMEText(text_body, 'plain'))

	if html_body:
		oMsg.attach(MIMEText(html_body, 'html'))

	# If there's any attachments
	if attachments:

		# For each attachment
		for m in attachments:

			# If the attachment is a string, it's a filename
			if isinstance(m, basestring):

				# Open the file and add it
				with open(m, "rb") as rFile:
					oMsg.attach(MIMEApplication(
						rFile.read(),
						Content_Disposition='attachment; filename="%s"' % basename(m),
						Name=basename(m)
					))

			# Else if we get a dictionary
			elif isinstance(m, dict):

				# Add it
				oMsg.attach(MIMEApplication(
					m['body'],
					Content_Disposition='attachment; filename="%s"' % m['filename'],
					Name=m['filename']
				))

	# Generate the body
	sBody	= oMsg.as_string()

	# Catch any Connect or Authenticate Errors
	try:

		# Create a new instance of the SMTP class
		oSMTP	= smtplib.SMTP(_aSMTP['host'], _aSMTP['port'])

		# If we need TLS
		if _aSMTP['tls']:

			# Start TLS
			oSMTP.starttls()

		# If there's a username
		if _aSMTP['user']:

			# Log in with the given credentials
			oSMTP.login(_aSMTP['user'], _aSMTP['passwd'])

		# Try to send the message
		oSMTP.sendmail(from_addr, to_addr, sBody)

		# Close the SMTP
		oSMTP.close()

		# Return ok
		return OK

	# If there's a connection error
	except smtplib.SMTPConnectError as e:
		_sErrMsg	= str(e)
		return FAILED_CONNECT

	# If there's am authentication error
	except smtplib.SMTPAuthenticationError as e:
		_sErrMsg	= str(e)
		return FAILED_LOGIN

	# If there's any other error
	except smtplib.SMTPException as e:
		_sErrMsg	= str(e)
		return FAILED_UNKNOWN

# smtp function
def smtp(host="localhost", port=25, tls=False, user=None, passwd=None):
	"""SMTP

	Called to change/set any SMTP information before sending out any e-mails

	Args:
		host (str): The fully qualified domain name of the host to connect to
		port (uint): The port on the host to use
		user (str): Set if the connection needs authorization
		passwd (str): Set if the connection needs authorization

	Returns:
		None
	"""

	# If the host is set
	if host:	_aSMTP['host']	= host

	# If the port is set
	if port:	_aSMTP['port']	= port

	# If we need TLS
	if tls:		_aSMTP['tls']	= tls

	# If the user is set
	if user:	_aSMTP['user']	= user

	# If the passwd is set
	if passwd:	_aSMTP['passwd']= passwd
