/**
 * Hash
 *
 * JS Library to manage hash values
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-12-09
 */

// Generic modules
var Tools = require('./tools.js');

// Values
var _hash = {};

// name regex
var _nameRE = /^[a-z]+$/;

// Callbacks
var _watches = {};

/**
 * Check Watches
 *
 * Gets old values and compares them to existing values, if anyone is watching
 * any names that are changed, they are notified
 *
 * @name _checkWatches
 * @param object old			The old values to check again
 * @return void
 */
function _checkWatches(old) {

	// If there are watches
	if(!Tools.empty(_watches)) {

		// Check each watch
		for(var name in _watches) {

			// If the value didn't exist and now it does, or it did exist
			//	and now it doesn't, or the values don't match
			if((!(name in old) && name in _hash) ||
				(name in old && !(name in _hash)) ||
				old[name] != _hash[name]) {

				// Go through each callback and call it
				for(var f of _watches[name]) {
					f(_hash[name] || null);
				}
			}
		}
	}
}

/**
 * Hash Changed
 *
 * Called when the location hash has been altered, notifies any watchers of
 * hash values changing
 *
 * @name _hashChanged
 * @return void
 */
function _hashChanged() {

	// Store the current hash
	var old = Tools.clone(_hash);

	// Re-parse the current location hash
	_parseHash();

	// Check the watches
	_checkWatches(old);
}

/**
 * Parse Hash
 *
 * Parses the current location hash into an object
 *
 * @name _parseHash
 * @return void
 */
function _parseHash() {

	// If there's anything in the hash
	if(window.location.hash.length > 1) {
		var regex = /([^=&]+)=?([^&]*)/g
		var field = null;

		// Go through each part found
		while(field = regex.exec(window.location.hash.substring(1))) {
			_hash[field[1]] = field[2].replace('+', ' ');
		}
	}
}

// Export the module
var Hash = {

	/**
	 * Init
	 *
	 * Initialises the internal hash by fetching and parsing the current
	 * location hash
	 *
	 * @name init
	 * @access public
	 * @static
	 * @return void
	 */
	"init": function() {

		// Track changes
		window.addEventListener("hashchange", _hashChanged);

		// Parse the current location hash
		_parseHash();
	},

	/**
	 * Get
	 *
	 * Returns a hash name
	 *
	 * @name get
	 * @access public
	 * @static
	 * @param string name		The name to look for
	 * @param string default_	The value to return if the name isn't found
	 * @return str
	 */
	"get": function(name, default_) {

		// If the name is invalid
		if(!_nameRE.test(name)) {
			throw 'Invalid Hash name';
		}

		// If there is a value for the name
		if(typeof _hash[name] != 'undefined') {
			return _hash[name];
		}

		// Else, return the default
		else {
			return default_;
		}
	},

	/**
	 * Set
	 *
	 * Sets a specific name
	 *
	 * @name set
	 * @access public
	 * @static
	 * @param str|object name	The name to set, or an object of name/value pairs
	 * @param str value			The value to set the name to
	 */
	"set": function(name, value) {

		// If the name is not an object
		if(!Tools.isObject(name)) {

			// If the value is not defined
			if(typeof value == 'undefined') {
				value = null;
			}

			// JavaScript is dumb and thinks {name: value} is the same as
			//	{"name": value}
			var temp = name;
			name = {};
			name[temp] = value;
		}

		// Store the old hash
		var old = Tools.clone(_hash);

		// Go through each name
		for(var n in name) {

			// If the name is invalid
			if(!_nameRE.test(n)) {
				throw 'Invalid Hash name: ' + n;
			}

			// If we got null, delete the name
			if(name[n] == null) {
				delete _hash[n];
			}
			// Else, set the new value
			else {
				_hash[n] = name[n];
			}
		}

		// Check anyone watching this value
		_checkWatches(old);

		// Init an array to store the parts
		var hash = [];

		// Go through each name
		for(var k in _hash) {
			hash.push(k + '=' + encodeURIComponent(_hash[k]));
		}

		// Reset the window location hash
		window.location.hash = hash.join('&');
	},

	/**
	 * Unwatch
	 *
	 * Removes a callback from the watches
	 *
	 * @name unwatch
	 * @access public
	 * @static
	 * @param string name			The name of the value to stop watching
	 * @param function callback		The callback to remove
	 * @return void
	 */
	"unwatch": function(name, callback) {

		// If we have the name
		if(name in _watches) {

			// Go through the callbacks associated with the name
			for(var i = 0; i < _watches[name].length; ++i) {

				// If we find the callback
				if(_watches[name][i] == callback) {

					// Remove it
					_watches[name].splice(i, 1);
					return;
				}
			}
		}
	},

	/**
	 * Watch
	 *
	 * Adds a callback for a specific name which will be called if the name is
	 * added, deleted, or changed
	 *
	 * @name watch
	 * @access public
	 * @static
	 * @param string name			The name of the value to watch
	 * @param function callback		The function to call when the value changes
	 * @return void
	 */
	"watch": function(name, callback) {

		// If we already have the name
		if(name in _watches) {

			// Go through the callbacks associated with the name
			for(var i = 0; i < _watches[name].length; ++i) {

				// If we already have the callback there's no need to store it
				if(_watches[name][i] == callback) {
					return;
				}
			}
		}

		// Else if we don't have any callbacks for the name
		else {
			_watches[name] = [];
		}

		// Add the callback to the watches
		_watches[name].push(callback);
	}
}

// Export the module
module.exports = Hash;
