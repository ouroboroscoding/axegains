# Auth imports
from apps.natf.Records import Match

# Entry point
def run():

	# Install `natf_match` table in the primary DB
	print('Creating `natf_match`')
	Match.tableCreate()

	# Return OK
	return True
