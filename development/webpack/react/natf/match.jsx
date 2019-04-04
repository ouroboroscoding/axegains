/**
 * NATF Match
 *
 * Manages creating and playing a standard NATF match
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-26
 */

// Generic modules
var Events = require('../../generic/events.js');
var Hash = require('../../generic/hash.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');
var Tools = require('../../generic/tools.js');

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
			"alias": '',
			"bigaxe": false,
			"existing" : false,
			"games": false,
			"id": false,
			"match_state": false,
			"mode": "opponent",
			"thrower": props.thrower,
			"throwerIs": '',
			"opponent": false
		};

		// Bind methods
		this.existingContinue = this.existingContinue.bind(this);
		this.existingDelete = this.existingDelete.bind(this);
		this.idCallback = this.idCallback.bind(this);
		this.matchCallback = this.matchCallback.bind(this);
		this.overwrite = this.overwrite.bind(this);
		this.points = this.points.bind(this);
		this.requestCallback = this.requestCallback.bind(this);
		this.requestCancel = this.requestCancel.bind(this);
		this.requestCreate = this.requestCreate.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	calculateMatchState(data) {

		// Init the state
		var state = {
			"round": 1,
			"throw": 1
		};

		// Are we opponent or initiator
		var t = (this.state.thrower == data.initiator) ? 'i' : 'o';

		// If there's any bigaxe data it's safe to assume we're done with the
		//	regular match
		if(data.bigaxe && !Tools.empty(data.bigaxe)) {

			// If we have points
			if(data.bigaxe.points && data.bigaxe.points.length) {

				// Set bigaxe to points
				state.bigaxe = 'points';

				// Step through the points
				for(var i = 0; i < data.bigaxe.points.length; ++i) {
					if(typeof data.bigaxe.points[i][t] == 'undefined') {
						state.round = i;
					}
				}
			}

			// Else we're still on target
			else {

				// Set bigaxe to target
				state.bigaxe = 'target';

				// Step through the target
				for(var i; i < data.bigaxe.target.length; ++i) {
					if(typeof data.bigaxe.target[i][t] == 'undefined') {
						state.round = i;
					}
				}
			}
		}

		// Else, assume we are in games
		else {

			// Go through each game
			var g = 1;
			for(; g <= 3; ++i) {

				// As a string
				var sG = g.toString();

				// If it doesn't exist
				if(typeof data.games[sG] == 'undefined') {
					break;
				}

				// If there's no data for the thrower
				if(typeof data.games[sG][t] == 'undefined') {
					break;
				}

				// Go through each round
				var r = 1;
				for(; r <= 5; ++r) {

					// As a string
					var sR = r.toString();

					// If it doesn't exist
					if(typeof data.games[sG][t][sR] == 'undefined') {
						break;
					}
				}

				// Store the round
				state.round = r;
			}

			// Store the game
			state.game = g;
		}

		// Return the state
		return state;
	}

	componentWillMount() {

		// Track any signin/signout events
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);

		// Track ID in hash
		Hash.watch('id', this.idCallback);

		// If we're signed in
		if(this.state.thrower) {

			// If there's an ID in the hash
			var id = Hash.get('id');
			if(id) {
				this.idCallback(id);
			} else {
				this.existingFetch();
			}
		}
	}

	componentWillUnmount() {

		// Stop tracking any signin/signout events
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);

		// Stop tracking ID in hash and remove it
		Hash.unwatch('id', this.idCallback);
		Hash.set('id', null);

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

	existingContinue(ev) {
		Hash.set('id', 'm|' + ev.currentTarget.parentNode.dataset.id);
	}

	existingDelete(ev) {

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// Store the id
		var id = ev.currentTarget.parentNode.dataset.id;

		// Notify the service the match won't be completed
		Services.delete('natf', 'match', {
			"id": id
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {

				// If the thrower can't delete that record, or it's finished
				if(res.error.code == 1000) {
					self.existingRemove(id);
				}
				// If it's already deleted
				else if(res.error.code == 1104) {
					self.existingRemove(id);
				}
				// Unknown error
				else {
					Events.trigger('error', JSON.stringify(res.error));
				}
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {
				self.existingRemove(id);
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		})
	}

	existingFetch() {

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// Find out if there's any unfinished games associated with this
		//	thrower
		Services.read('natf', 'match/unfinished', {}).done(res => {

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

				// If there's any
				if(res.data.length) {

					// Set the state
					self.setState({
						"mode": "existing",
						"existing": res.data
					})
				}
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		})
	}

	existingRemove(id) {

		// Store the existing
		var existing = Tools.clone(this.state.existing);

		// Go through each one
		for(var i = 0; i < existing.length; ++i) {
			if(existing[i]._id == id) {
				existing.splice(i, 1);
			}
		}

		// Init the new state
		var state = {"existing": existing}

		// If there's no more existing
		if(existing.length == 0) {
			state.mode = 'opponent';
		}

		// Set the new state
		this.setState(state);
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
					"bigaxe": false,
					"games": {
						"1": {}
					},
					"id": id[1],
					"matchState": {
						"round": 1,
						"throw": 1,
						"bigaxe": false
					},
					"mode": "match",
					"opponent": {"alias": ''},
					"throwerIs": "i"
				})

				// List for an update on the match
				TwoWay.track(
					'natf', 'match-' + id[1],
					this.matchCallback
				)

				// Save this
				var self = this;

				// Fetch the match
				Services.read('natf', 'match', {
					"id": id[1]
				}).done(res => {

					// If there's an error
					if(res.error && !Utils.serviceError(res.error)) {

						// If the match no longer exists
						if(res.error.code == 1104) {
							Hash.set('id', null);
							return;
						}

						Events.trigger('error', JSON.stringify(res.error));
					}

					// If there's a warning
					if(res.warning) {
						Events.trigger('warning', JSON.stringify(res.warning));
					}

					// If there's data
					if(res.data) {

						// Are we initiator or opponent?
						var t = res.data.initiator == self.state.thrower._id ? 'i' : 'o';

						// Store it in the state
						self.setState({
							"alias": t == 'i' ? res.data['opponent_alias'] : res.data['initiator_alias'],
							"bigaxe": res.data.bigaxe,
							"games": res.data.games,
							"matchState": self.calculateMatchState(res.data),
							"throwerIs": t,
						});
					}

				})
			}
		}

		// Else reset
		else {
			this.setState({"mode": "opponent"});
		}
	}

	matchCallback(msg) {

		console.log(msg);
	}

	overwrite(ev) {

	}

	points(clutch, value) {

	}

	render() {
		var self = this;
		return (
			<div className="natf">
				{this.state.mode == 'opponent' &&
					<Opponent thrower={this.state.thrower} onSelect={this.requestCreate} />
				}
				{this.state.mode == 'request' &&
					<div className="acenter">
						<p>Waiting for {self.state.opponent.alias} to accept your match request</p>
						<button onClick={self.requestCancel}>Cancel Request</button>
					</div>
				}
				{this.state.mode == 'existing' &&
					<div className="acenter">
						{this.state.existing.map(function(m, i) {
							return (
								<div key={i} data-id={m._id} className="existing">
									<p>You have an existing match with {m.alias}, do you wish to continue?</p>
									<button onClick={self.existingDelete}>Delete</button>
									<button onClick={self.existingContinue}>Continue</button>
								</div>
							);
						})}
					</div>
				}
				{this.state.mode == 'match' &&
					<div>
						<Board ref="board" clutchMode="none" onPoints={self.points} />
						{this.renderMatch()}
					</div>
				}
			</div>
		);
	}

	renderBigAxe() {
		return <div />
	}

	renderGame() {
		return <div />
	}

	renderMatch() {

		// If we're in big axe mode
		if(this.state.bigaxe) {
			return [
				this.renderOverall(),
				this.renderBigAxe()
			]
		} else {
			return [
				this.renderOverall(),
				this.renderGame()
			]
		}
	}

	renderOverall() {
		return (
			<table>
				<thead>
					<tr><th>Thrower</th><th>1</th><th>2</th><th>3</th></tr>
				</thead>
				<tbody>

					<tr><td>{this.state.thrower.alias}</td><td>1</td><td>2</td><td>3</td></tr>
					<tr><td>{this.state.alias}</td><td>1</td><td>2</td><td>3</td></tr>
				</tbody>
			</table>
		);
	}

	requestCallback(msg) {

		// If the match was accepted
		if(msg.type == 'accepted') {
			Hash.set('id', 'm|' + msg.match);
		}

		// Else if it was rejected
		else if(msg.type == 'rejected') {
			this.requestReset();
		}
	}

	requestCancel() {
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

					// If it's already deleted
					if(res.error.code != 1104) {
						self.requestReset();
					} else {
						Events.trigger('error', JSON.stringify(res.error));
					}
				}

				// If there's a warning
				if(res.warning) {
					Events.trigger('warning', JSON.stringify(res.warning));
				}

				// If there's data
				if(res.data) {
					self.requestReset();
				}

			}).always(() => {
				// Hide the loader
				Loader.hide()
			})
		}
	}

	requestCreate(opponent) {

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

	requestReset() {

		// Stop listening for an update on the request
		TwoWay.untrack(
			'auth',
			'request-' + this.state.id,
			this.requestCallback
		);

		// Remove the ID from the hash
		Hash.set('id', null);

		// Change the mode
		this.setState({
			"id": false,
			"mode": "opponent",
			"opponent": false
		});
	}

	signin(thrower) {

		// Set state
		this.setState({"thrower": thrower});

		// If there's an ID in the hash
		var id = Hash.get('id');
		if(id) {
			this.idCallback(id);
		} else {
			this.existingFetch();
		}
	}

	signout() {

		// Set state
		this.setState({"thrower": false});

		// Remove the ID from the hash
		Hash.set('id', null);
	}
}

// Export the component
module.exports = Match;
