// External modules
var React = require('react');

// Generic modules
var Events = require('../generic/events.js');

// Components
var NatfPractice = require('./natf/practice.jsx');

// Site component
class Site extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {};
	}

	render() {
		return (
			<NatfPractice />
		);
	}
}

// Export the component
module.exports = Site;
