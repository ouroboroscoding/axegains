// External modules
var React = require('react');

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');

// Site modules
var TwoWay = require('../../twoway.js');
var Utils = require('../../utils.js');

// React components
var Board = require('./board.jsx');
var Opponent = require('../opponent.jsx');

// Match Component
class Match extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"id": false,
			"mode": "opponent",
			"thrower": props.thrower,
		};

		// Bind methods
		this.overwrite = this.overwrite.bind(this);
		this.setOpponent = this.setOpponent.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
		this.requestCallback = this.requestCallback.bind(this);
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

		// If we're in request mode
		if(this.state.mode == 'request') {

			// Stop tracking the request
			TwoWay.untrack(
				'/ws',
				'auth',
				'request-' + this.state.id,
				this.requestCallback
			)
		}
	}

	overwrite(ev) {

	}

	render() {
		var self = this;
		return (
			<div className="natf">
				{this.state.mode == 'opponent' &&
					<Opponent onSelect={this.setOpponent} />
				}
				{this.state.mode == 'request' &&
					<div></div>
				}
				{this.state.mode == 'match' &&
					<div></div>
				}
			</div>
		);
	}

	requestCallback(msg) {
		console.log(msg);
	}

	setOpponent(opponent) {

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// Make a match request for this opponent
		Services.create('auth', 'match/request', {
			"opponent": opponent._id,
			"org": "natf"
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				Events.trigger('error', JSON.stringify(res.error));
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {

				// Change the mode
				self.setState({
					"mode": "request",
					"id": res.data
				})

				// Listen for an update on the request
				TwoWay.track(
					'/ws',
					'auth',
					'request-' + res.data,
					this.requestCallback
				);
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
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
