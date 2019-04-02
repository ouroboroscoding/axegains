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

// The ping timer
var __ping = null;

// The valid close flag
var __close = false;

// The websocket
var __socket = null;

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
var __services = {};

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
	if(!__socket) {
		console.error('twoway: something went wrong, no socket found');
		return;
	}

	// Send the tracking message through the websocket
	__socket.send(JSON.stringify({
		"_type": "track",
		"service": service,
		"key": key
	}));

	// If we don't have the service, add it
	if(!(service in __services)) {
		__services[service] = {}
	}

	// If we don't have the key for the given service, add the list with
	//	the callback
	if(!(key in __services[service])) {
		__services[service][key] = [callback]
	}

	// Else, add the callback, to the given service/key
	else {
		__services[service][key].push(callback);
	}
}

/**
 * Handle Close
 *
 * Checks if it's a legitimate closed socket, or if we need to reconnect to
 * everything
 *
 * @name _handleClose
 * @return void
 */
function _handleClose() {

	// If it's a valid close
	if(__close) {
		__socket = null;
	}

	// Else, reopen the socket and re-track all events
	else {

		setTimeout(function() {

			// Notify the backend of a new ws connection
			Services.read('webpoll', 'websocket', {}).done(res => {

				// Create the websocket
				__socket = WSHelper('wss://' + window.location.hostname + '/ws', {
					"open": function(sock) {

						// Send the connect message
						sock.send(JSON.stringify({
							"_type": "connect",
							"key": res.data
						}))

						// Retrack every service/key
						for(var s in __services) {
							for(var k in __services[s]) {
								__socket.send(JSON.stringify({
									"_type": "track",
									"service": s,
									"key": k
								}));
							}
						}
					},
					"message": _handleMessage,
					"close": _handleClose
				});
			});
		}, 5000);
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

	// If it's pong
	if(ev.data == 'pong') {
		return;
	}

	// Screw you javascript
	var r = new FileReader();
	r.addEventListener("loadend", function() {

		// Parse the data
		oMsg = JSON.parse(r.result);

		// If we have the service
		if(oMsg.service in __services) {

			// If we have the key
			if(oMsg.key in __services[oMsg.service]) {

				// Call each callback
				for(var f of __services[oMsg.service][oMsg.key]) {
					f(oMsg.data);
				}
			}
		}
	});
	r.readAsText(ev.data);
}

/**
 * Ping
 *
 * Send a ping to keep the socket alive
 *
 * @name _ping
 * @return void
 */
function _ping() {

	// Send a ping message over the socket to keep it alive
	__socket.send(JSON.stringify({
		"_type": "ping"
	}));
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
	if(!__socket) {

		// Notify the backend of a new ws connection
		Services.read('webpoll', 'websocket', {}).done(res => {

			// Create the websocket
			__socket = WSHelper('wss://' + window.location.hostname + '/ws', {
				"open": function(sock) {

					// Reset the close flag
					__close = false;

					// Send the connect message
					sock.send(JSON.stringify({
						"_type": "connect",
						"key": res.data
					}))

					// Send the tracking message and store the callback
					_addTrack(service, key, callback)
				},
				"message": _handleMessage,
				"close": _handleClose
			});

			// Ping at 5 minute intervals
			__ping = setInterval(_ping, 300000);
		});

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
	if(service in __services) {

		// If we have the key
		if(key in __services[service]) {

			// Go through each callback
			for(var i = 0; i < __services[service][key].length; ++i) {

				// If the callback matches
				if(callback == __services[service][key][i]) {

					// Remove the callback
					__services[service][key].splice(i, 1);

					// If we have no more callbacks
					if(__services[service][key].length == 0) {

						// Notify the websocket we aren't tracking the key
						//	anymore
						__socket.send(JSON.stringify({
							"_type": "untrack",
							"service": service,
							"key": key
						}));

						// Remove the key
						delete __services[service][key];

						// If we have no more keys in the service
						if(Tools.empty(__services[service])) {

							// Remove the service
							delete __services[service];

							// If there's no more services
							if(Tools.empty(__services)) {

								// Turn off the ping interval
								clearInterval(__ping);

								// Close the socket
								__close = true;
								__socket.close(1000, 'nothing else to track');
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
