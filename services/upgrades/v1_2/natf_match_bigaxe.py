# Auth imports
from apps.natf.Records import MatchBigAxe

# Entry point
def run():

	# Install `natf_match_bigaxe` table in the primary DB
	print('Creating `natf_match_bigaxe`')
	MatchBigAxe.tableCreate()

	# Return OK
	return True
