# Pip imports
from RestOC import Record_ReDB

# Auth imports
from apps.iatf.Records import Practice, PracticeStats

# Entry point
def run():

	# Notify
	print("Updating IATF practice stats to version 2")

	# Get the structures for the tables
	dPractStruct = Practice.struct()
	dStatsStruct = PracticeStats.struct()

	# Get a connection to the host
	with Record_ReDB._with(dPractStruct['host']) as oCon:

		# Fetch unique throwers in iatf practice table
		print('Fetching unique throwers in `iatf_practice`')
		itRes = Record_ReDB.r \
				.db(dPractStruct['db']) \
				.table(dPractStruct['table']) \
				.pluck('thrower') \
				.distinct() \
				.run(oCon)
		lThrowers = [d['thrower'] for d in itRes]

		# Go through each thrower and get all practices
		print('Compiling stats for each thrower', end='')
		for sThrower in lThrowers:

			# Init stats
			dStats = {}

			# Fetch all practices for this thrower
			lStats = [d['stats'] for d in Practice.get(sThrower, index="thrower", raw=['stats'])]

			# Go through each practice
			for d in lStats:

				# If we have no current stats
				if not dStats:
					dStats = d

				# Else, add to the existing
				else:
					dStats['bigaxe']['clutches']['attempts'] += d['bigaxe']['clutches']['attempts']
					dStats['bigaxe']['clutches']['drops'] += d['bigaxe']['clutches']['drops']
					dStats['bigaxe']['clutches']['hits'] += d['bigaxe']['clutches']['hits']
					dStats['bigaxe']['clutches']['points'] += d['bigaxe']['clutches']['points']

					dStats['bigaxe']['regular']['attempts'] += d['bigaxe']['regular']['attempts']
					dStats['bigaxe']['regular']['drops'] += d['bigaxe']['regular']['drops']
					dStats['bigaxe']['regular']['fives'] += d['bigaxe']['regular']['fives']
					dStats['bigaxe']['regular']['threes'] += d['bigaxe']['regular']['threes']
					dStats['bigaxe']['regular']['ones'] += d['bigaxe']['regular']['ones']
					dStats['bigaxe']['regular']['zeros'] += d['bigaxe']['regular']['zeros']
					dStats['bigaxe']['regular']['points'] += d['bigaxe']['regular']['points']
					dStats['bigaxe']['regular']['hits'] += d['bigaxe']['regular']['hits']

					dStats['standard']['clutches']['attempts'] += d['standard']['clutches']['attempts']
					dStats['standard']['clutches']['drops'] += d['standard']['clutches']['drops']
					dStats['standard']['clutches']['hits'] += d['standard']['clutches']['hits']
					dStats['standard']['clutches']['points'] += d['standard']['clutches']['points']

					dStats['standard']['regular']['attempts'] += d['standard']['regular']['attempts']
					dStats['standard']['regular']['drops'] += d['standard']['regular']['drops']
					dStats['standard']['regular']['fives'] += d['standard']['regular']['fives']
					dStats['standard']['regular']['threes'] += d['standard']['regular']['threes']
					dStats['standard']['regular']['ones'] += d['standard']['regular']['ones']
					dStats['standard']['regular']['zeros'] += d['standard']['regular']['zeros']
					dStats['standard']['regular']['points'] += d['standard']['regular']['points']
					dStats['standard']['regular']['hits'] += d['standard']['regular']['hits']

			# Add the thrower ID and version
			dStats['_thrower'] = sThrower
			dStats['_version'] = 2

			# Replace the stats
			dRes = Record_ReDB.r \
					.db(dStatsStruct['db']) \
					.table(dStatsStruct['table']) \
					.get(sThrower) \
					.replace(dStats) \
					.run(oCon)

			print(dRes['replaced'] and '.' or 'failed', end='')

		# Clear newline
		print('')

	# Return OK
	return True
