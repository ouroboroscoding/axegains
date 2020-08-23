# Auth imports
from apps.auth.Records import MatchRequest

# Entry point
def run():

	# Install `match_request` table in the primary DB
	print('Creating `match_request`')
	MatchRequest.tableCreate()

	# Return OK
	return True
