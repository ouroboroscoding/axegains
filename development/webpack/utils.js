/**
 * Utils
 *
 * Shared utilities
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-24
 */

// Generic modules
var Events = require('./generic/events.js');

/**
 * Utils
 */
var Utils = {

	date: function(ts) {
		var d = new Date(ts*1000);
		var Y = '' + d.getFullYear();
		var M = '' + (d.getMonth() + 1);
		if(M.length == 1) M = '0' + M;
		var D = '' + d.getDate();
		if(D.length == 1) D = '0' + D;
		return Y + '/' + M + '/' + D;
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
