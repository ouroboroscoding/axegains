// External modules
var React = require('react');

// Generic modules
var Events = require('../generic/events.js');
var Services = require('../generic/services.js');

// Header component
class Header extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"signedin": false
		};
	}

	render() {
		return (
			<header>

			</header>
		);
	}
}

// Export the component
module.exports = Header;
