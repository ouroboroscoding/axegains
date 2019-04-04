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
var Hash = require('./generic/hash.js');
var Loader = require('./generic/loader.js');
var Services = require('./generic/services.js');

// Site specific
var TwoWay = require('./twoway.js');
var Utils = require('./utils.js');

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
	for(var o of __pending['opponent']) {

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

	// Go through each in which the thrower is the initiator
	for(var o of __pending['initiator']) {

		// Add a new message
		Events.trigger('message', o._id, {
			"text": "You initiated an " + o.org + " match with " +
					o.alias + ". Do you want to wait for this match to start?",
			"buttons": [
				{"title": "Delete", "callback": _requestDelete},
				{"title": "Wait", "callback": _requestWait}
			]
		});
	}
}

/**
 * Request Accept
 *
 * Called when a match request is accepted by the opponent
 *
 * @name _requestAccept
 * @return bool
 */
function _requestAccept(id) {

	// Let the server know the match was accepted
	Services.update('auth', 'match/request', {
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

			// Find the pending match, store it, then remove it from pending
			var req = null;
			for(var i in __pending['opponent']) {
				if(__pending['opponent'][i]._id == id) {
					req = __pending['opponent'][i];
					__pending['opponent'].splice(i, 1);
				}
			}

			Hash.set({
				"page": "match",
				"org": req.org.toLowerCase(),
				"id": "m|" + res.data + "|" + req.alias
			})
		}
	})

	// Return true, assume the request was accepted
	return true;
}

/**
 * Request Decline
 *
 * Called when a match request is declined by the opponent
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
 * Request Delete
 *
 * Called when a match request is deleted by the initiator
 *
 * @name _requestDelete
 * @return bool
 */
function _requestDelete(id) {

	// Let the server know we are removing our request
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
			for(var i in __pending['initiator']) {
				if(__pending['initiator'][i]._id == id) {
					__pending['initiator'].splice(i, 1);
				}
			}
		}
	});

	// Return true, assume the request was deleted
	return true;
}

/**
 * Request New
 *
 * Called when the thrower recieves a new match request
 *
 * @name _requestNew
 * @param object msg
 * @return void
 */
function _requestNew(msg) {

	// If this is a new request
	if(msg.type == 'match_request') {

		// Add it to the pending
		__pending['opponent'].push(msg);

		// Add a new message
		Events.trigger('message', msg._id, {
			"text": "You have an " + msg.org + " match request from " +
					msg.alias + ". Do you want to start this match now?",
			"buttons": [
				{"title": "Decline", "callback": _requestDecline},
				{"title": "Accept", "callback": _requestAccept}
			]
		});
	}

	// Else if we need to delete
	else if(msg.type == "match_request_delete") {

		// Delete the request from the pending
		for(var i in __pending['opponent']) {
			if(__pending['opponent'][i]._id == msg.id) {
				__pending['opponent'].splice(i, 1);
			}
		}

		// Remove the message
		Events.trigger('message_remove', msg.id);
	}
}

/**
 * Request Wait
 *
 * Called when the initiator of a match request has chosen to wait for it
 *
 * @name _requestWait
 * @return bool
 */
function _requestWait(id) {

	// Find the pending match, store it, then remove it from pending
	var req = null;
	for(var i in __pending['initiator']) {
		if(__pending['initiator'][i]._id == id) {
			req = __pending['initiator'][i];
		}
	}

	// Change the page and store the request info
	Hash.set({
		"page": "match",
		"org": req.org.toLowerCase(),
		"id": "r|" + req._id + '|' + req.alias
	})

	// Return OK
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
	__thrower = thrower._id;

	// Fetch the pending requests
	_pending();

	// Track any new requests
	TwoWay.track(
		'auth', 'requests-' + __thrower,
		_requestNew
	);
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
		Events.trigger('message_remove', o._id);
	}

	// Stop tracking the thrower
	TwoWay.untrack(
		'auth', 'requests-' + __thrower,
		_requestNew
	);
}

// Export the module
module.exports = {
	"init": _init,
}
