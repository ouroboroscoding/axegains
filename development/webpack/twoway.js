/**
 * Two Way
 *
 * Allows clients to connect to the backend via websocket so events can be
 * tracked in real time
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-29
 */

// Generic modules
var Services = require('./generic/services.js');
var Tools = require('./generic/tools.js');
var WSHelper = require('./generic/websocket.js');

// The websocket
var _socket = null;

/**
 * The service callbacks
 *
 * will contain a string for the service / key with callbacks for those keys,
 * e.g. {
 *	"service1": {
 *		"key1": [function1, function2],
 *		"key2": [function3]
 *	},
 *	"service2": {
 *		"key3": [function4]
 *	}
 * }
 */
var _services = {};

/**
 * Add Track
 *
 * Adds tracking for a specific service key
 *
 * @name _addTrack
 * @param string service
 * @param string key
 * @param function callback
 * @return void
 */
function _addTrack(service, key, callback) {

	// If the URL doesn't exist
	if(!_socket) {
		console.error('twoway: something went wrong, no socket found');
		return;
	}

	// Send the tracking message through the websocket
	_socket.send(JSON.stringify({
		"_type": "track",
		"service": service,
		"key": key
	}));

	// If we don't have the service, add it
	if(!(service in _services)) {
		_services[service] = {}
	}

	// If we don't have the key for the given service, add the list with
	//	the callback
	if(!(key in _services[service])) {
		_services[service][key] = [callback]
	}

	// Else, add the callback, to the given service/key
	else {
		_services[service][key].push(callback);
	}
}

/**
 * Handle Messages
 *
 * Recieves messages from websockets and directs the data to the appropriate
 * callback
 *
 * @name _handleMessage
 * @param WebSocket sock		The socket the message came on
 * @param MessageEvent ev		The event message received
 * @return void
 */
function _handleMessage(sock, ev) {

	// Screw you javascript
	var r = new FileReader();
	r.addEventListener("loadend", function() {

		// Parse the data
		oMsg = JSON.parse(r.result);

		// If we have the service
		if(oMsg.service in _services) {

			// If we have the key
			if(oMsg.key in _services[oMsg.service]) {

				// Call each callback
				for(var f of _services[oMsg.service][oMsg.key]) {
					f(oMsg.data);
				}
			}
		}
	});
	r.readAsText(ev.data);
}

/**
 * Track
 *
 * Takes a URL and an event type and a) opens a new websocket or uses an
 * existing one, then b) sends a tracking message through the websocket so the
 * backend knowsn to send the key type to us
 *
 * @name _track
 * @param string service		The name of the service the key is associated with
 * @param string key			The key to track
 * @param function callback		The callback for any messages of the key value
 * @return void
 */
function _track(service, key, callback) {

	// If we don't have a socket
	if(!_socket) {

		// Notify the backend of a new ws connection
		Services.read('webpoll', 'websocket', {}).done(res => {

			// Create the websocket
			_socket = WSHelper('wss://' + window.location.hostname + '/ws', {
				"open": function(sock) {
					sock.send(JSON.stringify({
						"_type": "connect",
						"key": res.data
					}))
					_addTrack(service, key, callback)
				},
				"message": _handleMessage,
				"close": function() {
					_socket = null;
				}
			})
		})

	} else {
		_addTrack(service, key, callback);
	}
}

/**
 * Untrack
 *
 * Removes a callback and notifies the websocket we are not tracking anymore
 *
 * @name _untrack
 * @param string service		The name of the service the key is associated with
 * @param string key			The key to untrack
 * @param function callback		The callback associated with the track
 * @return bool
 */
function _untrack(service, key, callback) {

	// If we have the service
	if(service in _services) {

		// If we have the key
		if(key in _services[service]) {

			// Go through each callback
			for(var i = 0; i < _services[service][key].length; ++i) {

				// If the callback matches
				if(callback == _services[service][key][i]) {

					// Remove the callback
					_services[service][key].splice(i, 1);

					// If we have no more callbacks
					if(_services[service][key].length == 0) {

						// Notify the websocket we aren't tracking the key
						//	anymore
						_socket.send(JSON.stringify({
							"_type": "untrack",
							"service": service,
							"key": key
						}));

						// Remove the key
						delete _services[service][key];

						// If we have no more keys in the service
						if(Tools.empty(_services[service])) {

							// Remove the service
							delete _services[service];

							// If there's no more services
							if(Tools.empty(_services)) {

								// Close the socket
								_socket.close(1000, 'nothing else to track');
							}
						}
					}

					// Callback found and removed
					return true;
				}
			}
		}
	}

	// Callback not found
	return false;
}

// export the module
module.exports = {
	"track": _track,
	"untrack": _untrack
}
