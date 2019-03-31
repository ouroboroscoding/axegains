/**
 * Requests
 *
 * Manages match requests
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-31
 */

// Generic
var Events = require('./generic/events.js');
var Loader = require('./generic/loader.js');
var Services = require('./generic/services.js');

// Site specific
var TwoWay = require('./twoway.js');

// Signed in thrower
__thrower = null;

// Pending requests
__pending = [];

/**
 * Init
 *
 * Initialises the module by tracking any sign in / sign out events
 *
 * @name _init
 * @return void
 */
function _init() {

	// Get notified of any change in thrower
	Events.add('signin', _signin);
	Events.add('signout', _signout);
}

/**
 * Pending
 *
 * Fetches pending requests
 *
 * @name _pending
 * @return void
 */
function _pending() {

	// Show the loader
	Loader.show();

	// Fetch the requests
	Services.read('auth', 'match/requests', {}).done(res => {

		// If there's an error
		if(res.error && !Utils.serviceError(res.error)) {
			Events.trigger('error', JSON.stringify(res.error));
		}

		// If there's a warning
		if(res.warning) {
			Events.trigger('warning', JSON.stringify(res.warning));
		}

		// If there's data
		if(res.data) {
			_pendingProcess(res.data);
		}
	}).always(() => {
		Loader.hide();
	})
}

/**
 * Pending Process
 *
 * Processes any pending requests that are returned from the server
 *
 * @name _pendingProcess
 * @return void
 */
function _pendingProcess(requests) {

	// Store the pending requests
	__pending = requests;

	// Go through each in which the thrower is the opponent
	for(var o in __pending['opponent']) {

		// Add a new message
		Events.trigger('message', o._id, {
			"text": "You have an " + o.org + " match request from " +
					o.alias + ". Do you want to start this match now?",
			"buttons": [
				{"title": "Decline", "callback": _requestDecline},
				{"title": "Accept", "callback": _requestAccept}
			]
		});
	}
}

/**
 * Request Accept
 *
 * Called when a match request is accepted
 *
 * @name _requestAccept
 * @return bool
 */
function _requestAccept(id) {

}

/**
 * Request Decline
 *
 * @name _requestDecline
 * @return bool
 */
function _requestDecline(id) {

	// Let the server know the match was declined
	Services.delete('auth', 'match/request', {
		"id": id
	}).done(res => {

		// If there's an error
		if(res.error && !Utils.serviceError(res.error)) {
			Events.trigger('error', JSON.stringify(res.error));
		}

		// If there's a warning
		if(res.warning) {
			Events.trigger('warning', JSON.stringify(res.warning));
		}

		// If there's data
		if(res.data) {

			// Delete the request from the pending
			for(var i in __pending['opponent']) {
				if(__pending['opponent'][i]._id == id) {
					__pending['opponent'].splice(i, 1);
				}
			}
		}
	})

	// Return true, assume the request was deleted
	return true;
}

/**
 * Signin
 *
 * Called when the user signs in (or was already signed in). Fetches pending
 * requests and starts tracking any new requests
 *
 * @name _signin
 * @return void
 */
function _signin(thrower) {

	// Store the thrower
	__thrower = thrower;

	// Fetch the pending requests
	_pending();

	// Track any new requests
	TwoWay.track('auth', 'requests-' + __thrower);
}

/**
 * Signout
 *
 * Called when the user signs out or is signed out. Removes all messages and
 * stops tracking requests
 *
 * @name _signout
 * @return void
 */
function _signout() {

	// Delete all messages
	for(var o in __pending) {
		Event.trigger('message_remove', o._id);
	}

	// Stop tracking the thrower
	TwoWay.untrack('auth', 'requests-' + __thrower);
}

// Export the module
module.exports = {
	"init": _init,
}
