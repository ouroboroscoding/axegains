/**
 * Tools
 *
 * Useful functions that belong to any specific module
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-25
 */

/**
 * Tools
 */
var Tools = {

	/**
	 * Clone
	 *
	 * Deep clone any type of object, returning a new one
	 *
	 * @name clone
	 * @param mixed o				The variable to clone
	 * @return mixed
	 */
	clone: function(o) {
		// New var
		var n = null;

		// If it's an array
		if(Array.isArray()) {
			n = [];
			for(var i in o) {
				n.push(Tools.clone(o[k]));
			}
		}

		// Else if the value is an object
		else if(Tools.isObject(o)) {
			n = {}
			for(var k in o) {
				n[k] = Tools.clone(o[k]);
			}
		}

		// Else, copy as is
		else {
			n = o;
		}

		// Return the new var
		return n;
	},

	/**
	 * Compare
	 *
	 * Compares two values of any type to see if they contain the same
	 * data or not
	 *
	 * @name compare
	 * @access public
	 * @param mixed v1				The first value
	 * @param mixed v2				The second value
	 * @return bool
	 */
	compare(v1, v2) {

		// If they're both arrays
		if(Array.isArray(v1) && Array.isArray(v2)) {

			// If they don't have the same length
			if(v1.length != v2.length) {
				return false;
			}

			// Compare the values
			for(var i = 0; i < v1.length; ++i) {
				if(!Tools.compare(v1[i], v2[i])) {
					return false;
				}
			}
		}

		// Else if they're both objects
		else if(Tools.isObject(v1) && Tools.isObject(v2)) {

			// If they don't have the same keys
			if(!Tools.compare(Object.keys(v1).sort(), Object.keys(v2).sort())) {
				return false;
			}

			// Compare each key
			for(var k in v1) {
				if(!Tools.compare(v1[k], v2[k])) {
					return false;
				}
			}
		}

		// Else, compare as is
		else {
			if(v1 !== v2) {
				return false;
			}
		}

		// Return equal
		return true;
	},

	/**
	 * Empty
	 *
	 * Returns true if the value type is empty
	 *
	 * @name empty
	 * @access public
	 * @param mixed m				The value to check, can be object, array, string, etc
	 * @return bool
	 */
	empty: function(m) {

		// If it's an object
		if(Tools.isObject(m)) {
			for(var p in m) {
				return false;
			}
			return true;
		}

		// Else if it's an array or a string
		else if(Array.isArray(m) || typeof m == 'string') {
			return m.length > 0 ? true : false;
		}

		// Else
		else {

			// If it's null or undefined
			if(typeof m == 'undefined' || m == null) {
				return true;
			}

			// Else return false
			return false;
		}
	},

	/**
	 * Is Decimal
	 *
	 * Returns true if the variable is a number
	 *
	 * @name isDecimal
	 * @access public
	 * @param mixed m				The variable to test
	 * @return bool
	 */
	isDecimal: function(m) {
		return typeof m == 'number';
	},

	/**
	 * Is Integer
	 *
	 * Returns true if the variable is a true integer
	 *
	 * @name isInteger
	 * @access public
	 * @param mixed m				The variable to test
	 * @return bool
	 */
	isInteger: function(m) {
		return m === +m && m === (m|0);
	},

	/**
	 * Is Object
	 *
	 * Returns true if the variable is a true object
	 *
	 * @name isObject
	 * @access public
	 * @param mixed m				The variable to test
	 * @return bool
	 */
	isObject: function(m) {
		if(m === null) return false;
		if(typeof m != 'object') return false;
		if(Array.isArray(m)) return false;
		return true;
	},

	/**
	 * Object Map
	 *
	 * Works like map for arrays, but iterates over an object
	 *
	 * @name omap
	 * @param {object} o			The object to map
	 * @param {Function} callback	The function to call each iteration
	 * @return array
	 */
	omap: function(o, callback) {
		var ret = [];
		for(var k in o) {
			ret.push(callback(k, o[k]));
		}
		return ret;
	},

	/**
	 * UUID v4
	 *
	 * Returns a psuedo random string in UUID format (NOT ACTUALLY A UUID)
	 *
	 * @name uuidv4
	 * @return str
	 */
	uuidv4: function() {
		return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
			(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
		)
	}
}

// Export the module
module.exports = Tools;
