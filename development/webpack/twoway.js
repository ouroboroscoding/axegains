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

/**
 * The websockets
 *
 * will contain a string for the URL, pointing to an object of key types with
 * callbacks for those keys, e.g. {
 *	"https://somedomain.com/ws": {
 *		"socket": socket,
 *		"services" : {
 *			"service1": {
 *				"key1": [function1, function2],
 *				"key2": [function3]
 *			},
 *			"service2": {
 *				"key3": [function4]
 *			}
 *		}
 *	}
 * }
 */
_sockets = {};

/**
 * Add Track
 *
 * Adds tracking for a specific service key
 *
 * @name _addTrack
 * @param string url
 * @param string service
 * @param string key
 * @param function callback
 * @return void
 */
function _addTrack(url, service, key, callback) {

	// If the URL doesn't exist
	if(!(url in _sockets)) {
		console.error('twoway: something went wrong, no socket found for "' + url + '"');
		return;
	}

	// Send the tracking message through the websocket
	_sockets[url].socket.send(JSON.stringify({
		"_type": "track",
		"service": service,
		"key": key
	}));

	// If we don't have the service for the given url, add it
	if(!(service in _sockets[url])) {
		_sockets[url]['services'] = {
			service: {}
		}
	}

	// If we don't have the key for the given url/service, add the list with
	//	the callback
	if(!(key in _sockets[url]['services'][service])) {
		_sockets[url]['services'][service][key] = [callback]
	}

	// Else, add the callback, to the given url/service/key
	else {
		_sockets[url]['services'][service][key].push(callback);
	}
}

/**
 * Handle Messages
 *
 * Recieves messages from websockets and directs the data to the appropriate
 * callback
 *
 * @name _handleMessage
 * @param object socket			The socket the message arrived on
 * @param string data			The JSON data sent with the message
 * @return void
 */
function _handleMessage(socket, data) {

	// Parse the data
	oMsg = JSON.parse(data);

	// If we have the url
	if(socket.url in _sockets) {

		// If we have the service
		if(oMsg.service in _sockets[socket.url]['services']) {

			// If we have the key
			if(key in _sockets[socket.url]['services'][oMsg.service]) {

				// Call each callback
				for(var f of _sockets[socket.url]['services'][oMsg.service]) {
					f(oMsg.data);
				}
			}
		}
	}
}

/**
 * Track
 *
 * Takes a URL and an event type and a) opens a new websocket or uses an
 * existing one, then b) sends a tracking message through the websocket so the
 * backend knowsn to send the key type to us
 *
 * @name _track
 * @param string url			The url of the websocket to connect to
 * @param string service		The name of the service the key is associated with
 * @param string key			The key to track
 * @param function callback		The callback for any messages of the key value
 * @return void
 */
function _track(url, service, key, callback) {

	// If we don't have the URL
	if(!(url in _sockets)) {

		// Create a new entry in sockets
		_sockets[url] = {
			"socket": null,
			"services": {}
		}

		// Notify the backend of a new ws connection
		Services.read('webpoll', 'websocket', {}).done(res => {

			// Create the websocket
			_sockets[url]['socket'] = WSHelper(url, {
				"open": function(sock) {
					sock.send(JSON.stringify({
						"_type": "connect",
						"key": res.data
					}))
					_addTrack(url, service, key, callback)
				},
				"message": _handleMessage
			})
		})

	} else {
		_addTrack(url, service, key, callback);
	}
}

/**
 * Untrack
 *
 * Removes a callback and notifies the websocket we are not tracking anymore
 *
 * @name _untrack
 * @param string url			The url of the websocket connected to
 * @param string service		The name of the service the key is associated with
 * @param string key			The key to untrack
 * @param function callback		The callback associated with the track
 * @return bool
 */
function _untrack(url, service, key, callback) {

	// If we have the url
	if(url in _sockets) {

		// If we have the service
		if(service in _sockets[url]['services']) {

			// If we have the key
			if(key in _sockets[url]['services'][service]) {

				// Go through each callback
				for(var i = 0; i < _sockets[url]['services'][service][key].length; ++i) {

					// If the callback matches
					if(callback == _sockets[url]['services'][service][key][i]) {

						// Remove the callback
						_sockets[url]['services'][service][key].splice(i, 1);

						// If we have no more callbacks
						if(_sockets[url]['services'][service][key].length) {

							// Notify the websocket we aren't tracking the key
							//	anymore
							_sockets[url].socket.send(JSON.stringify({
								"_type": "untrack",
								"service": service,
								"key": key
							}));

							// Remove the key
							delete _sockets[url]['services'][service][key];

							// If we have no more keys in the service
							if(Tools.empty(_sockets[url]['services'][service])) {

								// Remove the service
								delete _sockets[url]['services'][service];

								// If there's no more services
								if(Tools.empty(_sockets[url]['services'])) {

									// Close the socket
									_sockets[url].socket.close(1000);

									// Remove it
									delete _sockets[url];
								}
							}
						}

						// Callback found and removed
						return true;
					}
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
