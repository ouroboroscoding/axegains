// External modules
var React = require('react');

// Generic modules
var Events = require('../generic/events.js');

// Components
var Header = require('./header.jsx');
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
			<React.Fragment>
				<Header />
				<NatfPractice />
			</React.Fragment>
		);
	}
}

// Export the component
module.exports = Site;
