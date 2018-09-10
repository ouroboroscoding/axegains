# coding=utf8
""" OS Module

Holds several methods for interacting with the OS (including cli)
"""

# Import future
from __future__ import print_function, absolute_import, division

__author__		= "Chris Nasr"
__copyright__	= "OuroborosCoding"
__version__		= "1.0.0"
__maintainer__	= "Chris Nasr"
__email__		= "chris@fuelforthefire.ca"
__created__		= "2018-09-09"

# Import python modules
import sys

# print error function
def print_error(*args, **kwargs):
	"""Print Error

	Works exactly like the print() function, but sends to stderr instead of
	stdout

	Args:
		*objects (list): List of objects to print
		sep (str): Separator to use between objects
			defaults to ''
		end (str): Additional string to add to the end of the line
			defaults to '\n'

	Returns:
		None
	"""
	print(*args, file=sys.stderr, **kwargs)


class ProgressBar(object):
	"""Progress Bar

	Creates and maintains a console progress bar

	Extends:
		object
	"""

	def __init__(self, title="Progress Bar", total=100, sections=20, start=0):
		"""Constructor

		Initialises the object

		Arguments:
			title {str} -- The text before the progress bar
			total {uint} -- The total count of items
			start {uint} -- Optional, defaults to 0

		Returns:
			ConsoleProgress
		"""

		# If any values are invalid
		if not isinstance(total, (int,long)) or total < 1:
			raise ValueError('total must be at least 1 (one) or higher')
		if not isinstance(sections, (int,long)) or sections < 1:
			raise ValueError('sections must be at least 1 (one) or higher')
		if not isinstance(start, (int,long)) or start < 0:
			raise ValueError('start must be an unsigned integer')

		# Store the title and count
		self.title = title
		self.total = total
		self.sections = sections
		self.count = start

		# Figure out the steps from the sections
		self.steps = self.total / self.sections

		# Calculate percentage
		self.perc = round((self.count / self.total) * 100.0, 1)

		# Draw
		self.draw()

	def __add__(self, other):
		"""+ (overloaded)

		Handles adding to the count

		Arguments:
			other {uint} -- Should be an unsigned number

		Returns:
			None
		"""

		# Verify the other
		if not isinstance(other, (int,long)) or other < 1:
			raise ValueError('other must be 1 (one) or greater')

		# Add it to the count
		self.count += other

		# Recalculate the percentage
		self.perc = round((self.count / self.total) * 100.0, 1)

		# Update the drawing
		self.draw()

		# If we reached maximum
		if self.count >= self.total:
			print('')

	def clear(self):
		"""Clear

		Clears the screen

		Returns:
			None
		"""
		print("")

	def draw(self):
		"""Draw

		Draws the progress bar in the console

		Returns:
			None
		"""

		# Calculate the steps done
		iDone = int(self.count // self.steps)
		iDiff = self.count % self.steps

		# If the diff is more than half a step, add a step
		if self.steps - iDiff <= iDiff:
			iDone += 1

		# Generate the actual progress bar
		sDiff = (u'\u2588' * iDone) + (' ' * (self.sections - iDone))

		# Print everything
		print("\r%s [%s] %.1f%%" % (self.title, sDiff, self.perc), end=' ')
