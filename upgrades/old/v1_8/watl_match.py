# Auth imports
from apps.watl.Records import Match, MatchStats

# Entry point
def run():

	# Install `watl_match` table in the primary DB
	print('Creating `watl_match`')
	Match.tableCreate()

	# Install `watl_match_stats` table in the primary DB
	print('Creating `watl_match_stats`')
	MatchStats.tableCreate()

	# Return OK
	return True
