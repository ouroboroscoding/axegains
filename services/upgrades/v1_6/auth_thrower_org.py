# Pip imports
from RestOC import Record_ReDB

# Auth imports
from apps.auth.Records import Thrower

# Entry point
def run():

	# Get the thrower struct
	dStruct = Thrower.struct()

	# Get a connection to the host
	with Record_ReDB._with(dStruct['host']) as oCon:

		# Add NATF as prefered org to all throwers
		dRes = Record_ReDB.r \
				.db(dStruct['db']) \
				.table(dStruct['table']) \
				.update({"org": 'natf'}) \
				.run(oCon)

		# Return based on update result
		return dRes['replaced'] != 0
