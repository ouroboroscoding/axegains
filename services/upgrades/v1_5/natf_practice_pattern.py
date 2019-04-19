# Pip imports
from RestOC import Record_ReDB

# NATF imports
from apps.natf.Records import PracticePattern

# Entry point
def run():

	# Create the new stats table
	print('Creating `natf_practice_pattern` table')
	if not PracticePattern.tableCreate():
		return False

	# Return OK
	return True
