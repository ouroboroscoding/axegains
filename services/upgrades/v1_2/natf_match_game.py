# Auth imports
from apps.natf.Records import MatchGame

# Entry point
def run():

	# Install `natf_match_game` table in the primary DB
	print('Creating `natf_match_game`')
	MatchGame.tableCreate()

	# Return OK
	return True
