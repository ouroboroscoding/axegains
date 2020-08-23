# Pip imports
from RestOC import Record_ReDB

# IATF imports
from apps.iatf.Records import Practice

# Entry point
def run():

	# Notify
	print("Updating IATF practices to version 2", end='')

	# Get the structure for the practices
	dStruct = Practice.struct()

	# Get a connection to the DB
	with Record_ReDB._with(dStruct['host']) as oCon:

		# Go through all the practices that haven't been converted
		while True:

			# Get a single unconverted practice
			itRes = Record_ReDB.r \
						.db(dStruct['db']) \
						.table(dStruct['table']) \
						.filter(lambda row: row.has_fields({"_version": True}).not_()) \
						.limit(1) \
						.run(oCon)
			dOld = [d for d in itRes]

			# If there's none, we're done with the loop
			if not dOld:
				break

			# Flatten
			dOld = dOld[0]

			# Init the new document
			dNew = {
				"_id": dOld['_id'],
				"_created": dOld['_created'],
				"_version": 2,
				"thrower": dOld['thrower'],
				"data": [],
				"stats": {
					"bigaxe": {
						"clutches": {
							"attempts": 0,
							"drops": 0,
							"hits": 0,
							"points": 0
						},
						"regular": {
							"attempts": 0,
							"fives": 0,
							"threes": 0,
							"ones": 0,
							"zeros": 0,
							"drops": 0,
							"hits": 0,
							"points": 0
						}
					},
					"standard": {
						"clutches": {
							"attempts": 0,
							"drops": 0,
							"hits": 0,
							"points": 0
						},
						"regular": {
							"attempts": 0,
							"fives": 0,
							"threes": 0,
							"ones": 0,
							"zeros": 0,
							"drops": 0,
							"hits": 0,
							"points": 0
						}
					},
				}
			}

			# Go through each throw
			for d in dOld['data']:

				# Add the bigaxe field to the throw
				d['bigaxe'] = False

				# Add it to the data
				dNew['data'].append(d)

				# If it's a clutch
				if d['clutch']:

					# Increase the attempts
					dNew['stats']['standard']['clutches']['attempts'] += 1

					# If it's a drop
					if d['value'] == 'd':
						dNew['stats']['standard']['clutches']['drops'] += 1

					# If it's a hit
					elif d['value'] == 7:
						dNew['stats']['standard']['clutches']['hits'] += 1
						dNew['stats']['standard']['clutches']['points'] += 7

				# Else it's a standard throw
				else:

					# Increase the attempts
					dNew['stats']['standard']['regular']['attempts'] += 1

					# Increase the appropriate value
					if d['value'] == 'd':
						dNew['stats']['standard']['regular']['drops'] += 1
					elif d['value'] == 5:
						dNew['stats']['standard']['regular']['fives'] += 1
						dNew['stats']['standard']['regular']['hits'] += 1
						dNew['stats']['standard']['regular']['points'] += 5
					elif d['value'] == 3:
						dNew['stats']['standard']['regular']['threes'] += 1
						dNew['stats']['standard']['regular']['hits'] += 1
						dNew['stats']['standard']['regular']['points'] += 3
					elif d['value'] == 1:
						dNew['stats']['standard']['regular']['ones'] += 1
						dNew['stats']['standard']['regular']['hits'] += 1
						dNew['stats']['standard']['regular']['points'] += 1
					elif d['value'] == 0:
						dNew['stats']['standard']['regular']['zeros'] += 1

			# Replace the entire record
			dRes = Record_ReDB.r \
					.db(dStruct['db']) \
					.table(dStruct['table']) \
					.get(dOld['_id']) \
					.replace(dNew) \
					.run(oCon)

			# Notify of work (or failure)
			print(dRes['replaced'] and '.' or 'failed', end='')

		# Clear line
		print('')

	# Return OK
	return True
