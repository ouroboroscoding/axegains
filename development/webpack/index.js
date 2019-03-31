// External
var React = require('react');
var ReactDOM = require('react-dom');

// Generic
var Events = require('./generic/events.js');
var Loader = require('./generic/loader.js');
var Services = require('./generic/services.js');

// Site specific
var Requests = require('./requests.js');

// Components
var Site = require('./react/site.jsx');

(function() {

	// Render the LoginComponent
	ReactDOM.render(
		React.createElement(Site, {}),
		document.getElementById('react')
	);

	// Init the requests
	Requests.init();

	// Init the services
	Services.init("services", function(xhr) {

		// If we got a 401, let everyone know we signed out
		if(xhr.status == 401) {
			Events.trigger('signout');
		}
	});

	// If we have a session, fetch the thrower
	if(Services.session()) {
		Loader.show();
		Services.read('auth', 'session', {}).done(res => {
			Events.trigger('signin', res.data);
		}).always(() => {
			Loader.hide();
		});
	}

	// Hide the loader
	Loader.hide();

	// Make Events available from console
	window.Events = Events;
})();

// Export
module.exports = null;
