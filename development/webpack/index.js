// External
var React = require('react');
var ReactDOM = require('react-dom');

// Components
var Site = require('./react/site.jsx');

(function() {

	// Render the LoginComponent
	ReactDOM.render(
		React.createElement(Site, {}),
		document.getElementById('main')
	);
})();

// Export
module.exports = null;
