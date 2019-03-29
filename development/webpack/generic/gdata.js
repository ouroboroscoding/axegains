/**
 * GData
 *
 * Keeps track of global data
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-01-13
 */

/**
 * Global Data
 *
 * Receives the initial data and the function to fetch the real data
 *
 * @name GData
 * @param mixed initial
 * @param function get
 * @return function
 */
function GData(initial, get) {

	// Init the state
	var state = null;

	// Store the initial state
	var initial = initial;

	// Init the list of callbacks when the value changes
	var callbacks = []

	return function(callback) {

		// If the callback doesn't exist, add it
		if(typeof callback == 'function') {
			if(callbacks.indexOf(callback) < 0) {
				callbacks.push(callback);
			}
		}

		// We need to reload, or have no state
		if(callback === true || state === null) {

			// Call the get method for fetching the data
			get(function(data) {

				// Store the data returned in the state
				state = data;

				// Run through each callback passing it the data
				for(var i = 0; i < callbacks.length; ++i) {
					callbacks[i](data);
				}
			});

			// If we have state, return it
			return (state != null) ? state : initial;
		}

		// Return the current state
		return state;
	};
}

// Export the function
module.exports = GData;
