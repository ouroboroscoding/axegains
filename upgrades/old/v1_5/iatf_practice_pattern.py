# Pip imports
from RestOC import Record_ReDB

# IATF imports
from apps.iatf.Records import PracticePattern

# Entry point
def run():

	# Create the new stats table
	print('Creating `iatf_practice_pattern` table')
	if not PracticePattern.tableCreate():
		return False

	# Return OK
	return True
