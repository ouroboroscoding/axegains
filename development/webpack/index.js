// External
var React = require('react');
var ReactDOM = require('react-dom');

// Generic
var Services = require('./generic/services.js');

// Components
var Site = require('./react/site.jsx');

(function() {

	// Init the services
	Services.init("services", function(xhr) {

		// If we got a 401
		if(xhr.status == 401) {
			Events.trigger('signout');
		}
	});

	// Render the LoginComponent
	ReactDOM.render(
		React.createElement(Site, {
			"thrower": Services.session() ? true : false
		}),
		document.getElementById('react')
	);
})();

// Export
module.exports = null;
