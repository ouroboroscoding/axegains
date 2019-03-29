/**
 * Loader
 *
 * Shows a loading graphic during requests/startup
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-24
 */

// Keep track of the show/hide calls
//	assume the loader started on
var _count = 1;

// Get the DOM element
var _el = document.getElementById('loader');

// Export the module
module.exports = {

	// Hide the loader
	hide: function() {

		// Decrement the count
		_count--;

		// If this is the last one
		if(_count == 0) {
			_el.style.display = 'none';
		}
	},

	// Show the loader
	show: function() {

		// Increment the count
		_count++;

		// If this is the first one
		if(_count == 1) {
			_el.style.display = 'block';
		}
	}
}
