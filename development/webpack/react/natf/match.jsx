// External modules
var React = require('react');

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');

// Site modules
var Utils = require('../../utils.js');

// React components
var Board = require('./board.jsx');

// Match Component
class Match extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"thrower": props.thrower
		};

		// Bind methods
		this.overwrite = this.overwrite.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	componentWillMount() {

		// Track any signin/signout events
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);
	}

	componentWillUnmount() {

		// Stop tracking any signin/signout events
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);
	}

	overwrite(ev) {

	}

	render() {
		var self = this;
		return (
			<div className="natf"></div>
		);
	}

	signin() {
		this.setState({"thrower": true});
	}

	signout() {
		this.setState({"thrower": false});
	}
}

// Export the component
module.exports = Match;