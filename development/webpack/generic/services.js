/**
 * Services
 *
 * Handles connecting to and retrieving data from services
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-24
 */

// External modules
var $ = require('../3rd/jquery.ajax.js');

// Generic modules
var Cookies = require('../generic/cookies.js');

// Services domain
var _domain = '';

// Default error function
var _error = function() {}

/**
 * Clear
 *
 * Clears the session from local storage and cookies
 *
 * @name _clear
 * access private
 * @return void
 */
function _clear() {

	// Delete from localStorage
	delete localStorage['_session'];

	// Delete the cookie
	Cookies.remove('_session', '.' + window.location.hostname, '/');
}

/**
 * Request
 *
 * Handles actual requests
 *
 * @name request
 * @access private
 * @param string method			The method used to send the request
 * @param string url			The full URL to the service/noun
 * @param object data			The data to send to the service
 * @param string auth			Optional Authorization token
 * @return xhr
 */
function _request(method, url, data) {

	// Generate the ajax config
	var oConfig = {
		"beforeSend": function(xhr, settings) {
			xhr._url = url;

			// If we have a session
			if('_session' in localStorage) {
				xhr.setRequestHeader('Authorization', localStorage['_session']);
			}
		},
		"contentType": "application/json; charset=utf-8",
		"error": function(xhr, status, error) {

			// If we got an Authorization error
			if(xhr.status == 401) {

				// Clear the current token
				_clear();
			}

			// Put the error in the console
			console.error(method + ' ' + xhr._url + ' returned: ' + error);

			// Return the xhr to the error callback
			_error(xhr);
		},
		"method": method,
		"url": url
	}

	// If it's a get request
	if(method == 'get') {
		if(typeof data !== 'undefined') {
			oConfig['data'] = "d=" + encodeURIComponent(JSON.stringify(data));
		}
	}
	// Else it's any other method
	else {
		oConfig.data = JSON.stringify(data);
	}

	// Make the request and return the xhr
	return $.ajax(oConfig);
}

/**
 * Store
 *
 * Stores the session token in local storage and cookies
 *
 * @name _store
 * @access private
 * @param string token
 * @return void
 */
function _store(token) {

	// Set the session in localStorage
	localStorage['_session'] = token

	// Set the session in a cookie
	Cookies.set('_session', token, 86400, '.' + window.location.hostname, '/');
}

/**
 * Success
 *
 * Handles success from xhr
 *
 * @name _success
 * @access private
 * @param string res			The result from the server
 * @param string status			The status of the request
 * @param xhr xhr				The request object
 * @return void
 */
function _success(res, status, xhr) {

	// If the result is a string
	if(typeof res == 'string') {

		// Try to conver it to JSON
		try {
			res	= JSON.parse(res);
		} catch(err) {
			console.error(method + ' ' + xhr._url + ' returned invalid JSON: ' + err);
			res = {"error":{"code":0,"msg":err}};
		}
	}
}

/**
 * Services
 */
var Services = {

	/**
	 * Init
	 *
	 * Initialises the Services modules
	 *
	 * @name init
	 * @access public
	 * @param string subdomain		The sub-domain services can be reached through
	 * @return void
	 */
	"init": function(subdomain, error) {

		// Store the full domain name for service calls
		_domain = '//' + subdomain +
					'.' + window.location.hostname +
					'/';

		// Do we have a session in storage
		if('_session' in localStorage && localStorage['_session']) {
			this.session(localStorage['_session'])
		}

		// Else do we have one in a cookie
		else {
			var cookie = Cookies.get('_session');
			if(cookie) {
				this.session(cookie);
			}
		}

		// If an error was passed
		if(typeof error !== 'undefined') {
			_error = error;
		}
	},

	/**
	 * Create
	 *
	 * Calls the create action on a specific service noune
	 *
	 * @name create
	 * @access public
	 * @param string service		The name of the service to call
	 * @param string noun			The noun to call on the service
	 * @param object data			The data to send to the service
	 * @return xhr
	 */
	"create": function(service, noun, data) {
		return _request('post', _domain + service + '/' + noun, data);
	},

	/**
	 * Delete
	 *
	 * Calls the delete action on a specific service noune
	 *
	 * @name delete
	 * @access public
	 * @param string service		The name of the service to call
	 * @param string noun			The noun to call on the service
	 * @param object data			The data to send to the service
	 * @return xhr
	 */
	"delete": function(service, noun, data) {
		return _request('delete', _domain + service + '/' + noun, data);
	},

	/**
	 * Read
	 *
	 * Calls the read action on a specific service noune
	 *
	 * @name read
	 * @access public
	 * @param string service		The name of the service to call
	 * @param string noun			The noun to call on the service
	 * @param object data			The data to send to the service
	 * @return xhr
	 */
	"read": function(service, noun, data) {
		return _request('get', _domain + service + '/' + noun, data);
	},

	/**
	 * Session
	 *
	 * Set or get the session token
	 *
	 * @name session
	 * @access public
	 * @param string token			The token to store
	 * @return void|str
	 */
	"session": function(token) {

		// If we are setting the session
		if(typeof token !== 'undefined') {

			// If null was passed, delete the session
			if(token == null) {
				_clear();
			}

			// Else, set the session
			else {
				_store(token);
			}
		}

		// Else we are returning the session
		else {
			return ('_session' in localStorage) ?
				localStorage['_session'] :
				'';
		}
	},

	/**
	 * Update
	 *
	 * Calls the update action on a specific service noune
	 *
	 * @name update
	 * @access public
	 * @param string service		The name of the service to call
	 * @param string noun			The noun to call on the service
	 * @param object data			The data to send to the service
	 * @return xhr
	 */
	"update": function(service, noun, data) {
		return _request('put', _domain + service + '/' + noun, data);
	}
};

// Export the module
module.exports = Services;
