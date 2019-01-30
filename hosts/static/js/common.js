"use strict";
(function() {

	// Set the root and store any previous package under the same name
	var	root = this;

	// Init the callbacks object
	var callbacks = {}

	// Init the visibility property name and event values
	var bVis = null;
	var dVis = {};

	// Init the date vars
	var lMonths	= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
					'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var lDays	= ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	// Figure out the name of the visibility property and event
	function getPageVisProps() {

		// Valid browser prefixes
		var lPrefixes	= ['moz', 'ms', 'o', 'webkit'];

		// If no prefix is needed
		if('hidden' in document) {
			dVis['property'] = 'hidden';
			dVis['event'] = 'visibilitychange';
			dVis['state'] = 'visibilityState';
			return true;
		}

		// Else, loop through the prefixes
		else {
			for(var i = 0; i < lPrefixes.length; ++i) {

				// If the prefixes version exists
				if((lPrefixes[i] + 'Hidden') in document) {
					dVis['property'] = lPrefixes[i] + 'Hidden';
					dVis['event'] = lPrefixes[i] + 'visibilitychange';
					dVis['state'] = lPrefixes[i] + 'VisibilityState';
					return true;
				}
			}
		}

		// otherwise it's not supported
		return false;
	}

	// Process AJAJ requests so they aren't so complicated in the app code
	function processAjaj(callback) {

		// Return a new function
		return function(res, status, xhr) {

			// If the result is a string
			if(typeof res == 'string') {

				// Try to conver it to JSON
				try {
					res	= JSON.parse(res);
				} catch(err) {
					console.error(xhr._url + ' returned invalid JSON\n' + err);
					res = {"error":{"code":0,"msg":err}};
				}
			}

			// If the special field is set
			if('special' in res) {

				// Trigger the special callbacks
				trigger(res.special);
			}

			// Call the callback
			callback(res);
		}
	}

	// Calls all callbacks associated with a special keyword
	function trigger(special) {
		// If we have callbacks for the special value
		if(special in callbacks) {
			var args = [];
			if(arguments.length > 1) {
				args = Array.apply(null, arguments).slice(1);
			}

			// If there's any callbacks, call them one by one
			for(var i in callbacks[special]) {
				try {
					var b = callbacks[special][i].apply(null, args);
				} catch(err) {
					console.error(special + ' callback ' + i + ' threw exception: ' + err);
					break
				}

				// If we got false back, stop calling the callbacks
				if(b === false) {
					break;
				}
			}
			return;
		} else {
			console.error('special value "' + special + '" returned, and no callbacks were found to handle it');
		}
	}

	// Create the library
	root.APP = {
		// Asynchronous Javascript and JSON
		"ajaj":	function(url, data, callback) {

			/*// Get the params type
			var dtype = typeof data;

			// if it's undefined
			if(dtype === 'undefined') {
				data = { "_ajaj_" : 'x'};
			}

			// Else if we got a string
			else if(dtype == 'string') {
				if(data == '') data = "_ajaj_=x";
				else data += "&_ajaj_=x";
			}

			// Else if we got an object
			else if(dtype == 'object') {

				// Strip out empty params
				for(var i in data) {
					if (data[i] === null || data[i] === undefined ) {
						delete data[i];
					}
				}

				// Add the ajax param
				data._ajaj_ = 'x';
			}*/

			// Call the jquery ajax method
			$.ajax({
				"beforeSend": function(xhr, settings) {
					xhr._url = url;
					xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				},
				"data": JSON.stringify(data),
				"method": "post",
				"processData": false,
				"success": processAjaj(callback),
				"url": url
			});
		},

		"callback": function(special, callback) {

			// If the name doesn't exist yet
			if(!(special in callbacks)) {
				callbacks[special] = []
			}

			// Add the callback to the list
			callbacks[special].push(callback);
			return true;
		},

		"emptyCB" : function() {
			console.log('Empty login callback')
			console.log(arguments);
		},

		"error": {
			"show": function(msg) {

				// If the message is an object
				if(typeof msg == 'object') {

					// Does it have an 'error' part?
					if(msg.error) {
						msg = msg.error;
					}

					// Does it have a 'msg' part?
					if(msg.msg) {

						// Does it also have a code?
						if(msg.code) {
							msg.msg = msg.msg + ' (' + msg.code + ')';
						}

						msg = msg.msg;
					}

					// Else, does it have a code?
					else if(msg.code) {
						msg = '' + msg.code;
					}

					// Else, turn it into JSON
					else {
						msg = JSON.stringify(msg);
					}
				}

				//Show an error message on the UI
				$('.message.error').addClass('active').show().find('span').text(msg);

				//if success message actually exists
				if ($('.message.error').length > 0) {

					//scroll to error message
					$('.message.error').get(0).scrollIntoView();
				}
			},
			"hide": function() {
				$('.message.error').removeClass('active');
			}
		},

		// Generate a nice date from a timestamp
		"nicedate": function(ts) {

			// Create a new Date object from the timestamp
			var o	= new Date(ts*1000);

			// Generate and return the string
			return lDays[o.getDay()] + ', ' +
					o.getDate() + ' ' +
					lMonths[o.getMonth()] + ' ' +
					o.getFullYear() + ' ' +
					o.toLocaleTimeString()
		},

		// Scoll to the bottom of an element
		"scroll": function(el) {
			var jEl	= (typeof el === 'string') ? $(el): el;
			jEl.get(0).scrollTop	= jEl.get(0).scrollHeight;
		},

		"overlay": function(show) {

			// Find the overlay class
			var j = $('#overlay');

			// If no value was passed
			if(typeof show == 'undefined') {
				show = !j.hasClass('on');
			}

			// If we want to show the overlay
			if(show) {
				j.addClass('on');
				j.find('.spinner').css({
					top: ((j[0].clientHeight/2) - 30) + 'px',
					left: ((j[0].clientWidth/2) - 30) + 'px'
				});
			} else {
				j.removeClass('on');
			}
		},

		"parseLocationHash": function() {

			// Init the return variable
			var ret = {};

			// If there's anything in the hash
			if(window.location.hash.length > 1) {
				var regex = /([^=&]+)=?([^&]*)/g
				var field = null;

				// Go through each part found
				while(field = regex.exec(window.location.hash.substring(1))) {
					ret[field[1]] = field[2].replace('+', ' ');
				}
			}

			// Return whatever was found, or an empty object
			return ret;
		},

		"removeCallback": function(special, callback) {

			// If the name exists in the object
			if(special in callbacks) {

				// If the callback exists in the list
				var i = callbacks[special].indexOf(callback);
				if(i != -1) {
					callbacks[special].splice(i,1);
					return true;
				}
			}

			// Nothing found, return false
			return false;
		},

		"success": {
			"show": function(msg) {
				// Show an error message on the UI
				$('.message.success').addClass('active').show().find('span').text(msg);

				//scroll to success message
				$(window).scrollTop = 0;

				// Hide the message after 5 seconds
				setTimeout(function() {
					$('.message.success').slideUp(1000, function() {
						$('.message.success').removeClass('active');
					});
				}, 5000);
			},
			"hide": function() {
				$('.message.success').removeClass('active');
			}
		},

		// Trigger the special callbacks
		"trigger": trigger,

		// Attach a callback to the Page Visibility API change event, or call
		//	the callback with the current state
		"visibilitychange": function(callback) {

			// If the callback is not sent
			if(typeof callback == 'undefined') {

				// If there is no current callback
				if(dVis['callback'] == null) {
					console.error('No callback set for visibilitychange');
					return false;
				}

				// Else call the callback with the current state
				dVis['callback'](document[dVis['property']], document[dVis['state']]);
				return
			}

			// If the Page Visibility  API is not available
			if(bVis === false || (bVis == null && (bVis = getPageVisProps()) === false)) {
				console.error('Page Visibility API not available');
				return;
			}

			// Save the callback for later
			dVis['callback']	= callback;

			// Attach an event listener
			document.addEventListener(dVis['event'], function() {

				// Call the callback and pass the bool and state values
				dVis['callback'](document[dVis['property']], document[dVis['state']]);
			})
		},

		// Create a new websocket connection and return it
		"websocket": function(url, conf) {

			// If we can't handle websockets
			if(!('WebSocket' in window)) {
				console.log('websocket: WebSockets not supported');
				return false;
			}

			// If conf is not defined
			if(typeof conf == 'undefined') {
				conf	= {}
			}

			// Else, if it's not an object, we have a problem
			else if(typeof conf != 'object') {
				console.error('websocket: second argument must be an object');
				return false;
			}

			// If the url is a string as expected
			if(typeof url == 'string') {
				conf['url']	= url;
			}

			// Else if it's an object
			else if(typeof url == 'object') {
				conf	= url;

				// If the actual url is missing
				if(!('url' in conf)) {
					console.error("websocket: 'url' must be passed if first argument is an object");
					return false;
				}
			}

			// Else we have a problem
			else {
				console.error('websocket: first argument must be a string or an object');
				return false;
			}

			// Create the WebSocket
			var oSock	= new WebSocket(conf['url']);

			// Set the open callback
			oSock.onopen	= function() {

				// If an open callback is set
				if('open' in conf) {
					conf['open'](oSock);
				}

				// Else, just log the event
				else {
					console.log('websocket: opened');
				}
			}

			// Set the message callback
			oSock.onmessage	= function(ev) {

				// If a message callback is set
				if('message' in conf) {
					conf['message'](oSock, ev);
				}

				// Else, just log the event
				else {
					console.log('websocket: message received, ' + ev.data);
				}
			}

			// Set the error callback
			oSock.onerror	= function(ev) {

				// If an error callback is set
				if('error' in conf) {
					conf['error'](oSock, ev);
				}

				// Else, just log the event
				else {
					console.log('websocket: error, ' + JSON.stringify(ev));
				}
			}

			// Set the close callback
			oSock.onclose	= function() {

				// If a close callback is set
				if('close' in conf) {
					conf['close'](oSock);
				}

				// Else, just log the event
				else {
					console.log('websocket: closed');
				}
			}

			// Return the socket
			return oSock;
		},

		"hideError" : function (message) {

			//Show an error message on the UI
			$('.message.error').text('').removeClass('active');
		},

		"hideSuccess" : function (message) {

			//Show an error message on the UI
			$('.message.success').text('').removeClass('active');
		},

		"ajajPostForm" : function (form, options) {

			console.log('ajaj post form');

			// Set default options
			var default_options = {

				'action' : '', //form action

				'submit' : function() {

					//Hide success & error messages
					APP.hideError();
					APP.hideSuccess();
				},

				'success' : function(response) { //success message callback

					//show success message
					APP.showSuccess(response.data);

				},
				'error' : function(response) { //error message callback

					//show error message
					APP.showError(response.error);
				},
				'filter' : null
			};

			//default action to form action if specified
			if (typeof form.attr('action') !== 'undefined') {

				default_options.action = form.attr('action');
			}

			// Override default options with user specified options
			options = $.extend(default_options, options);

			if (typeof options.filter == 'function') {

				to_serialize = options.filter(form);
			}
			else {

				var to_serialize = form;
			}

			console.log('serialize', to_serialize);

			// Asynchronous Javascript and JSON
			APP.ajaj(options.action, to_serialize.serialize(), function(response) {

				//Submit callback
				if (typeof options.submit == 'function') {

					options.submit();
				}

				//An error occured
				if (response.error !== false) {

					//Error callback
					if (typeof options.error == 'function') {

						options.error(response);
					}
				}
				else {

					//Success callback
					if (typeof options.success == 'function') {

						options.success(response);
					}
				}
			});
		},

		"validEmailFormat" : function(email) {
			return email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
		},
	};

	$('.message.error .close').click(function() {
		root.APP.error.hide();
	})

//Call the closure with this
}).call(this);
