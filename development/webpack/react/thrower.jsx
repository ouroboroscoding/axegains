// External modules
var React = require('react');

// Generic modules
var Events = require('../generic/events.js');

// Thrower component
class Thrower extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {};
	}

	render() {
		return <div />
	}
}

// Export the component
module.exports = Thrower;
