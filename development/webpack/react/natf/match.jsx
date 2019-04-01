// External modules
var React = require('react');

// Generic modules
var Events = require('../../generic/events.js');
var Hash = require('../../generic/hash.js');
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
			"opponent": false
		};

		// If there's an ID in the hash
		var id = Hash.get('id');
		if(id) {
			this.idCallback(id);
		}

		// Bind methods
		this.cancelRequest = this.cancelRequest.bind(this);
		this.idCallback = this.idCallback.bind(this);
		this.matchCallback = this.matchCallback.bind(this);
		this.overwrite = this.overwrite.bind(this);
		this.setOpponent = this.setOpponent.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
		this.requestCallback = this.requestCallback.bind(this);
	}

	cancelRequest() {
		if(this.state.mode == 'request') {

			// Store this
			var self = this;

			// Show the loader
			Loader.show();

			// Cancel the match request
			Services.delete('auth', 'match/request', {
				"id": this.state.id
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

					// Stop listening for an update on the request
					TwoWay.untrack(
						'auth',
						'request-' + self.state.id,
						this.requestCallback
					);

					// Remove the ID from the hash
					Hash.set('id', null);

					// Change the mode
					self.setState({
						"id": false,
						"mode": "opponent",
						"opponent": false
					});
				}

			}).always(() => {
				// Hide the loader
				Loader.hide()
			})
		}
	}

	componentWillMount() {

		// Track any signin/signout events
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);

		// Track ID in hash
		Hash.watch('id', this.idCallback);
	}

	componentWillUnmount() {

		// Stop tracking any signin/signout events
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);

		// Stop tracking ID in hash
		Hash.unwatch('id', this.idCallback);

		// If we're in request mode
		if(this.state.mode == 'request') {

			// Stop tracking the request
			TwoWay.untrack(
				'auth', 'request-' + this.state.id,
				this.requestCallback
			)
		}

		else if(this.state.mode == 'match') {

			// Stop tracking the match
			TwoWay.untrack(
				'natf', 'match-' + this.state.id,
				this.matchCallback
			)
		}
	}

	idCallback(id) {

		// If there's an ID
		if(id) {

			// Split the ID
			id = id.split('|');

			// If it's a request
			if(id[0] == 'r') {

				// Change the mode
				this.setState({
					"id": id[1],
					"mode": "request",
					"opponent": {"alias": id[2]}
				});

				// Listen for an update on the request
				TwoWay.track(
					'auth', 'request-' + id[1],
					this.requestCallback
				);
			}

			// Else if it's a match
			else if(id[0] == 'm') {

				// Change the mode
				this.setState({
					"id": id[1],
					"mode": "match",
					"opponent": {"alias": id[2]}
				})

				// List for an update on the match
				TwoWay.track(
					'natf', 'match-' + id[1],
					this.matchCallback
				)
			}
		}
	}

	matchCallback(msg) {
		console.log(msg);
	}

	overwrite(ev) {

	}

	render() {
		var self = this;
		return (
			<div className="natf">
				{this.state.mode == 'opponent' &&
					<Opponent thrower={this.state.thrower} onSelect={this.setOpponent} />
				}
				{this.state.mode == 'request' &&
					<div className="acenter">
						<p>Waiting for {self.state.opponent.alias} to accept your match request</p>
						<button onClick={self.cancelRequest}>Cancel Request</button>
					</div>
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
			"org": "NATF"
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

				// Set the hash
				Hash.set('id', 'r|' + res.data + '|' + opponent.alias)
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
