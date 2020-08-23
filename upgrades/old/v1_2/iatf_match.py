# Auth imports
from apps.iatf.Records import Match

# Entry point
def run():

	# Install `iatf_match` table in the primary DB
	print('Creating `iatf_match`')
	Match.tableCreate()

	# Return OK
	return True
