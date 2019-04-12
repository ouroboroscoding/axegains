# Pip imports
from RestOC import Record_ReDB

# Auth imports
from apps.natf.Records import Practice, PracticeStats

# Entry point
def run():

	# Create the new stats table
	print('Creating `natf_practice_stats` table')
	PracticeStats.tableCreate()

	# Get a connection to the host
	dStruct = Practice.struct()
	with Record_ReDB._with(dStruct['host']) as oCon:

		# Fetch unique throwers in natf practice table
		print('Fetching unique throwers in `natf_practice`')
		itRes = Record_ReDB.r \
				.db(dStruct['db']) \
				.table(dStruct['table']) \
				.pluck('thrower') \
				.distinct() \
				.run(oCon)
		lThrowers = [d['thrower'] for d in itRes]

		# Go through each thrower and get all practices
		print('Adding stats to each thrower', end='')
		for sThrower in lThrowers:

			# Init stats
			dStats = {}

			# Fetch all practices for this thrower
			lStats = Practice.get(filter={"thrower": sThrower}, raw=['clutches', 'points', 'throws'])

			# Go through each practice
			for d in lStats:

				# If we have no current stats
				if not dStats:
					dStats = d

				# Else, add to the existing
				else:
					dStats['clutches']['attempts'] += d['clutches']['attempts']
					dStats['clutches']['hits'] += d['clutches']['hits']
					dStats['points']['target'] += d['points']['target']
					dStats['points']['total'] += d['points']['total']
					dStats['throws']['attempts'] += d['throws']['attempts']
					dStats['throws']['drops'] += d['throws']['drops']
					dStats['throws']['hits'] += d['throws']['hits']

			# Add the thrower ID
			dStats['_thrower'] = sThrower

			# Create the stats for the thrower
			oPS = PracticeStats(dStats)
			oPS.create()

			print('.', end='')

		print('')

	# Return OK
	return True
