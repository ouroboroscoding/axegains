# Pip imports
from RestOC import Record_ReDB

# WATL imports
from apps.watl.Records import Practice, PracticePattern, PracticeStats

# Entry point
def run():

	# Create the new tables
	print('Creating `watl_practice` table')
	if not Practice.tableCreate():
		return False

	print('Creating `watl_practice_pattern` table')
	if not PracticePattern.tableCreate():
		return False

	print('Creating `watl_practice_stats` table')
	if not PracticeStats.tableCreate():
		return False

	# Return OK
	return True
