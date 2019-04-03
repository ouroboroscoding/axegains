/**
 * Utils
 *
 * Shared utilities
 */

// External modules
var moment = require('moment');

// Generic modules
var Events = require('./generic/events.js');

/**
 * Utils
 */
var Utils = {

	date: function(ts) {
		var d = moment.unix(ts);
		return d.format('YYYY/MM/DD');
	},

	errorTree: function(errors) {

		// Init the return
		var oRet = {}

		// Go through each error
		for(let i = 0; i < errors.length; ++i) {

			// If the error field has a period
			if(errors[i][0].includes('.')) {

				// Split it
				lField = errors[i][0].split(/\.(.*)/)

				// If we don't have the field already
				if(!oRet[lField[0]]) {
					oRet[lField[0]] = []
				}

				// Add the rest
				oRet[lField[0]].push([lField[1], errors[i][1]]);
			}

			// Else it's a flat field
			else {
				oRet[errors[i][0]] = errors[i][1];
			}
		}

		// Go through all the errors we found
		for(let k in oRet) {

			// If we find an array
			if(Array.isArray(oRet[k])) {

				// Recurse
				oRet[k] = Utils.errorTree(oRet[k]);
			}
		}

		// Return the Tree
		return oRet;
	},

	serviceError: function(err) {

		// What error is it?
		switch(err.code) {

			// No Session
			case 102:

				// Trigger signout
				Events.trigger("signout");

				// Nothing else to do
				return true;

			// Invalid fields
			case 1001:

				// Rebuild the error message
				err.msg = Utils.errorTree(err.msg);

				// But allow the child to deal with the messages themselves
				return false;
		}

		// Failed to process error
		return false;
	}
}

// Export the module
module.exports = Utils;
