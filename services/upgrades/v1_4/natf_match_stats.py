# Pip imports
from RestOC import Record_ReDB

# NATF imports
from apps.natf.Records import Match, MatchStats

# Entry point
def run():

	# Create the new stats table
	print('Creating `natf_match_stats` table')
	if not MatchStats.tableCreate():
		return False

	# Get a connection to the host
	dStruct = Match.struct()
	with Record_ReDB._with(dStruct['host']) as oCon:

		# Add the calculated field to matches
		print('Adding `calculated` field to `natf_match` table')
		dRes = Record_ReDB.r \
				.db(dStruct['db']) \
				.table(dStruct['table']) \
				.update({"calculated": False}) \
				.run(oCon)

		print('Adding `calculate` index to `natf_match` table')
		dRes = Record_ReDB.r \
				.db(dStruct['db']) \
				.table(dStruct['table']) \
				.index_create('calculate', [
					Record_ReDB.r.row['finished'],
					Record_ReDB.r.row['calculated']
				]) \
				.run(oCon)

	# Return OK
	return True
