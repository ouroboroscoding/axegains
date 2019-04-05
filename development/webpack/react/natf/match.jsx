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
			"matchState": false,
			"mode": "opponent",
			"thrower": props.thrower,
			"is": '',
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
			"game": "1",
			"throw": "1"
		};

		// Are we opponent or initiator
		var w = (this.state.thrower._id == data.initiator) ? 'i' : 'o';

		// If there's any bigaxe data it's safe to assume we're done with the
		//	regular match
		if(data.bigaxe && !Tools.empty(data.bigaxe)) {

			// If we have points
			if(data.bigaxe.points && data.bigaxe.points.length) {

				// Set bigaxe to points
				state.bigaxe = 'points';

				// Step through the points
				for(var i = 0; i < data.bigaxe.points.length; ++i) {
					if(typeof data.bigaxe.points[i][w] == 'undefined') {
						state.throw = i;
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
						state.throw = i;
					}
				}
			}
		}

		// Else, assume we are in games
		else {

			// Go through each game
			var g = "1";
			for(g of ["1", "2", "3"]) {

				// If it doesn't exist
				if(typeof data.games[g] == 'undefined') {
					break;
				}

				// Store the game
				state.game = g;

				// If the game is finished
				if(data.games[g].finished) {
					continue;
				}

				// Go through each throw
				var t = "1";
				for(t of ["1", "2", "3", "4", "5"]) {

					// If it doesn't exist
					if(typeof data.games[g][w][t] == 'undefined') {
						break;
					}
				}

				// Store the round
				state.throw = t;
			}
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
						"1": {
							"i": {},
							"o": {}
						}
					},
					"id": id[1],
					"matchState": {
						"game": 1,
						"throw": 1,
						"bigaxe": false
					},
					"mode": "match",
					"opponent": {"alias": ''},
					"is": "i"
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
							"is": t,
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

		// Clone the match state
		var ms = Tools.clone(this.state.matchState);

		// Change the throw
		ms.throw = ev.currentTarget.dataset.throw;

		// Set the board mode
		this.refs.board.clutchMode = ms.throw == 5 ? 'selected' : 'none';

		// Set the new state
		this.setState({
			"matchState": ms,
			"overwrite": true
		});
	}

	points(clutch, value) {

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// Clone the games and match state
		var games = Tools.clone(this.state.games);
		var ms = Tools.clone(this.state.matchState);

		// Get the value or value/clutch
		var value = (ms.throw == 5) ? {"clutch": clutch, "value": value} : value;

		// Store the point value
		games[ms.game][this.state.is][ms.throw] = value;

		// Save the value and notify the opponent
		Services.update('natf', 'match/game', {
			"id": games[ms.game]._id,
			"match": this.state.id,
			"throw": ms.throw,
			"value": value
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

				// If the overwrite flag is set
				if(self.state.overwrite) {
					var t = "6"
					for(t of ["1", "2", "3", "4", "5", "6"]) {
						if(typeof games[ms.game][this.state.is][t] == 'undefined') {
							break;
						}
					}
					ms.throw = t;
				} else {
					ms.throw = (parseInt(ms.throw) + 1).toString();
				}

				// Update the state
				self.setState({
					"games": games,
					"matchState": ms,
					"overwrite": false
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		})
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
						<div className="stats">
							{this.renderOverall()}
							{this.state.bigaxe ?
								this.renderBigAxe()
							:
								this.renderGame()
							}
						</div>
					</div>
				}
			</div>
		);
	}

	renderBigAxe() {
		return <div />
	}

	renderGame() {

		// Opponent is opposite of thrower
		var sO = this.state.is == 'i' ? 'o': 'i';

		// What game are we in?
		var g = this.state.games[this.state.matchState.game];

		return (
			<div className="game">
				<table>
					<thead>
						<tr>
							<th>T</th>
							<th>{this.state.thrower.alias}</th>
							<th>{this.state.alias}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							{this.renderGameThrow("1")}
							<td>{g[sO]["1"] == -1 ? 'd' : g[sO]["1"]}</td>
						</tr>
						<tr>
							<td>2</td>
							{this.renderGameThrow("2")}
							<td>{g[sO]["2"] == -1 ? 'd' : g[sO]["2"]}</td>
						</tr>
						<tr>
							<td>3</td>
							{this.renderGameThrow("3")}
							<td>{g[sO]["3"] == -1 ? 'd' : g[sO]["3"]}</td>
						</tr>
						<tr>
							<td>4</td>
							{this.renderGameThrow("4")}
							<td>{g[sO]["4"] == -1 ? 'd' : g[sO]["4"]}</td>
						</tr>
						<tr>
							<td>5</td>
							{this.renderGameThrow("5")}
							<td className={g[sO]["5"] && g[sO]["5"].clutch ? 'clutch' : ''}>{g[sO]["5"] ? (g[sO]["5"].value == -1 ? 'd' : g[sO]["5"].value) : ''}</td>
						</tr>
					</tbody>
				</table>
				{this.state.matchState.throw == '6' &&
					<button onClick={this.gameFinish}>Finished</button>
				}
			</div>
		);
	}

	renderGameThrow(t) {

		// The game
		var g = this.state.matchState.game;

		// The value of the throw
		var v = this.state.games[g][this.state.is][t];

		// If we're working on 5
		if(t == '5') {

			// If the game is finished
			if(this.state.games[g][this.state.is].finished) {
				return <td className={v.clutch ? 'clutch' : ''}>{v}</td>
			}

			// Else, we're not finished, but the value exists
			else if(v) {
				return <td
							className={this.state.overwrite && this.state.matchState.throw == t ? 'overwrite' : (v.clutch ? 'clutch' : '')}
							data-throw={t}
							onClick={this.overwrite}
						>{v.value == -1 ? 'd' : v.value}</td>
			}

			// Else, there's no value
			else {
				return <td></td>
			}
		}

		// Else it's 1 to 4
		else {

			// If the game is finished
			if(this.state.games[g][this.state.is].finished) {
				return <td>{v}</td>
			}

			// Else, we're not finishd, but the value exists
			else if(v) {
				return <td
							className={this.state.overwrite && this.state.matchState.throw == t ? 'overwrite' : ''}
							data-throw={t}
							onClick={this.overwrite}
						>{v == -1 ? 'd' : v}</td>
			}

			// Else, there's no value
			else {
				return <td></td>
			}
		}
	}

	renderOverall() {

		// Init the points per game
		var oPoints = {
			"i": [0, 0, 0],
			"o": [0, 0, 0]
		}

		// Opponent is opposite of thrower
		var sO = this.state.is == 'i' ? 'o': 'i';

		// Calculate the points
		for(var g of ["1", "2", "3"]) {
			var iG = parseInt(g) - 1;
			if(this.state.games[g]) {
				for(var t of ["1", "2", "3", "4", "5"]) {
					if(this.state.games[g]['i'][t]) {
						if(t == '5') {
							oPoints['i'][iG] += this.state.games[g]['i'][t].value;
						} else {
							oPoints['i'][iG] += this.state.games[g]['i'][t];
						}
					}
					if(this.state.games[g]['o'][t]) {
						if(t == '5') {
							oPoints['o'][iG] += this.state.games[g]['o'][t].value;
						} else {
							oPoints['o'][iG] += this.state.games[g]['o'][t];
						}
					}
				}
			}
		}

		return (
			<div className="overall">
				<table>
					<thead>
						<tr>
							<th>G</th>
							<th>{this.state.thrower.alias}</th>
							<th>{this.state.alias}</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>{oPoints[this.state.is][0]}</td>
							<td>{oPoints[sO][0]}</td>
						</tr>
						<tr>
							<td>2</td>
							<td>{oPoints[this.state.is][1]}</td>
							<td>{oPoints[sO][1]}</td>
						</tr>
						<tr>
							<td>3</td>
							<td>{oPoints[this.state.is][2]}</td>
							<td>{oPoints[sO][2]}</td>
						</tr>
					</tbody>
				</table>
			</div>
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
