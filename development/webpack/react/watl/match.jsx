/**
 * WATL Match
 *
 * Manages creating and playing a standard WATL match
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-25
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
			"overtime": false,
			"existing" : false,
			"game": false,
			"id": false,
			"loser": false,
			"match": false,
			"mode": "opponent",
			"points": {},
			"thrower": props.thrower,
			"is": '',
			"winner": false
		};

		// Bind methods
		this.overtimeFinish = this.overtimeFinish.bind(this);
		this.existingContinue = this.existingContinue.bind(this);
		this.existingDelete = this.existingDelete.bind(this);
		this.gameFinish = this.gameFinish.bind(this);
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

	overtimeFinish() {

		// Show the loader
		Loader.show();

		// Clone the match state
		var ms = this.state.match

		// Remove the finish and set the waiting
		ms.overtime_can_finish = false;
		ms.waiting = true;

		// Set the new state
		this.setState({"match": ms});

		// Let the service know
		Services.update('watl', 'match/finish/overtime', {
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

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	calculateOvertimeFinished(data) {

		// If the lengths don't match
		if(data.overtime['i'].length != data.overtime['o'].length) {

			// We aren't done
			return false;
		}

		// Loop through till we have no more throws
		for(var i = 0; i < data.overtime['i'].length; ++i) {

			// Don't overwrite the actual data
			var vals = {
				'i': data.overtime['i'][i],
				'o': data.overtime['o'][i]
			};

			// If we got a drop, consider it a zero
			if(vals['i'] == 'd') {
				vals['i'] = 0;
			}
			if(vals['o'] == 'd') {
				vals['o'] = 0;
			}

			// If the values don't match, someone won
			if(vals['i'] != vals['o']) {

				// Allow finishing
				return true;
			}
		}

		// Not done yet
		return false;
	}

	calculateMatchState(data) {

		// Init the state
		var state = {
			"throw": "1",
			"waiting": false
		};

		// Are we opponent or initiator
		var is = (this.state.thrower._id == data.initiator) ? 'i' : 'o';

		// If there's any overtime data it's safe to assume we're done with the
		//	regular match
		if(data.overtime && !Tools.empty(data.overtime)) {

			// Set mode
			state.mode = "overtime";

			// Set the throw to the current length of existing throws
			state.throw = data.overtime[is].length;

			// If we're finished
			if(data.overtime.finished[is]) {
				state.waiting = true;
				state.overtime_can_finish = false;
			}

			// Do we need to show the finish button?
			else {
				state.overtime_can_finish = this.calculateOvertimeFinished(data);
			}
		}

		// Else, assume we are in game
		else {

			// Set the mode
			state.mode = "game";

			// If we're finished
			if(data.game_finished[is]) {
				state.waiting = true;
			}

			// Else, go through each game
			else {

				// Go through each throw
				var t = "1";
				for(t of ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]) {

					// If it doesn't exist
					if(typeof data.game[is][t] == 'undefined') {
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

	calculatePoints(g) {

		// Init the return
		oPoints = {'i': 0, 'o': 0};

		// Calculate the points
		for(var t of ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]) {
			if(g['i'][t]) {
				if(['5', '10'].indexOf(t) != -1) {
					oPoints['i'] += g['i'][t].value == 'd' ? 0 : g['i'][t].value;
				} else {
					oPoints['i'] += g['i'][t] == 'd' ? 0 : g['i'][t];
				}
			}
			if(g['o'][t]) {
				if(['5', '10'].indexOf(t) != -1) {
					oPoints['o'] += g['o'][t].value == 'd' ? 0 : g['o'][t].value;
				} else {
					oPoints['o'] += g['o'][t] == 'd' ? 0 : g['o'][t];
				}
			}
		}

		return oPoints;
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
				'watl', 'match-' + this.state.id,
				this.matchCallback
			)
		}
	}

	existingContinue(ev) {
		Hash.set('id', 'm|' + ev.currentTarget.parentNode.dataset.id);
	}

	existingDelete(ev) {

		// Show the loader
		Loader.show();

		// Store the id
		var id = ev.currentTarget.parentNode.dataset.id;

		// Notify the service the match won't be completed
		Services.delete('watl', 'match', {
			"id": id
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {

				// If the thrower can't delete that record, or it's finished
				if(res.error.code == 1000) {
					this.existingRemove(id);
				}
				// If it's already deleted
				else if(res.error.code == 1104) {
					this.existingRemove(id);
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
				this.existingRemove(id);
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		})
	}

	existingFetch() {

		// Show the loader
		Loader.show();

		// Find out if there's any unfinished games associated with this
		//	thrower
		Services.read('watl', 'match/unfinished', {}).done(res => {

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
					this.setState({
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

	gameFinish(ev) {

		// Clone the match state
		var ms = Tools.clone(this.state.match);

		// Show the loader
		Loader.show()

		// Clone the match state
		var ms = Tools.clone(this.state.match);

		// Set the match state to waiting
		ms.waiting = true;
		this.setState({
			"match": ms
		});

		// Notify backend the match is over
		Services.update('watl', 'match/finish/game', {
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

		}).always(() => {
			// Hide loader
			Loader.hide();
		});
	}

	idCallback(id) {

		// If there's an ID
		if(id) {

			// Split the ID
			id = id.split('|');

			// If it's a request
			if(id[0] == 'r') {

				// Fetch the match
				Services.read('auth', 'match/request', {
					"id": id[1]
				}).done(res => {

					// If there's an error
					if(res.error && !Utils.serviceError(res.error)) {

						// If the match no longer exists
						if(res.error.code == 1104) {
							Events.trigger('error', "This match request no longer exists.");
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

						// Change the mode
						this.setState({
							"alias": res.data.alias,
							"id": id[1],
							"mode": "request"
						});

						// Listen for an update on the request
						TwoWay.track(
							'auth', 'request-' + id[1],
							this.requestCallback
						);
					}
				})
			}

			// Else if it's a match
			else if(id[0] == 'm') {

				// List for an update on the match
				TwoWay.track(
					'watl', 'match-' + id[1],
					this.matchCallback
				)

				// Fetch the match
				Services.read('watl', 'match', {
					"id": id[1]
				}).done(res => {

					// If there's an error
					if(res.error && !Utils.serviceError(res.error)) {

						// If the match no longer exists
						if(res.error.code == 1104) {
							Events.trigger('error', "This match no longer exists.");
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

						// If the game is finished
						if(res.data.finished) {
							Events.trigger('error', "This match is already finished.");
							Hash.set('id', null);
							return;
						}

						// Calculate the match state
						var ms = this.calculateMatchState(res.data);

						// Are we initiator or opponent?
						var t = res.data.initiator == this.state.thrower._id ? 'i' : 'o';

						// Store it in the state
						this.setState({
							"alias": t == 'i' ? res.data['opponent_alias'] : res.data['initiator_alias'],
							"overtime": res.data.overtime,
							"game": res.data.game,
							"id": id[1],
							"match": ms,
							"mode": "match",
							"points": this.calculatePoints(res.data.game),
							"is": t,
						}, function() {

							// If we're in game mode on throw five/ten
							if(ms.mode == 'game') {
								if(['5', '10'].indexOf(ms.throw) != -1) {
									this.refs.board.mode = 'select';
								} else {
									this.refs.board.mode = 'none';
								}
							} else {
								this.refs.board.mode = 'expected';
							}
						});
					}

				})
			}
		}

		// Else reset the state
		else {
			this.reset();
		}
	}

	matchCallback(msg) {

		// If we got an update on a big axe points throw
		if(msg.type == "overtime") {

			// If we need to start
			if(msg.subtype == "start") {

				// Clone the match state
				var ms = Tools.clone(this.state.match);

				// Set the mode to big axe target and reset the throw to 1
				ms.mode = "overtime";
				ms.throw = 0;
				ms.waiting = false;
				ms.overtime_can_finish = false;

				// Set the board mode
				this.refs.board.mode = 'expected';

				// Set the new state
				this.setState({
					"overtime": {
						"i": [],
						"o": []
					},
					"match": ms
				});
			}

			// Else if we got a throw
			else if(msg.subtype == "throw") {

				// Clone the overtime and match state
				var ms = Tools.clone(this.state.match);
				var ot = Tools.clone(this.state.overtime);

				// If it's false
				if(!ot || typeof ot == 'undefined') {
					ot = {
						"finished": {"i": false, "o": false},
						"i": [], "o": []
					}
				}

				// If the thrower doesn't exist
				if(typeof ot[msg.thrower] == 'undefined') {
					ot[msg.thrower] = [];
				}

				// If the throw doesn't exist
				if(ot[msg.thrower].length == msg.throw) {
					ot[msg.thrower].push(msg.value);
				} else {
					ot[msg.thrower][msg.throw] = msg.value;
				}

				// Calculate the throws so we can know if we're done
				ms.overtime_can_finish = this.calculateOvertimeFinished(this.state);
				ms.waiting = false;

				// Set the new state
				this.setState({
					"match": ms,
					"overtime": ot
				});
			}

			// Else we aren't actually finished
			else if(msg.subtype == 'notfinished') {

				// Clone the match state
				var ms = Tools.clone(this.state.match);

				// Remove waiting and set to bigaxe target just in case
				ms.mode = 'overtime';
				ms.waiting = false;

				// Set the new state
				this.setState({"match": ms});
			}
		}

		// Else if the match was deleted
		else if(msg.type == 'deleted') {

			// Notify the thrower
			Events.trigger('error', this.state.alias + " deleted the match.");

			// Reset
			this.reset();
		}

		// Else if we got a message about a new throw in a game
		else if(msg.type == 'throw') {

			// Clone the game and match state
			var game = Tools.clone(this.state.game);
			var ms = Tools.clone(this.state.match);

			// Create the game if it doesn't exist
			if(typeof game == 'undefined') {
				game = {
					"i": {},
					"o": {}
				};
			}

			// If the thrower section of the game doesn't exist
			if(typeof game[msg.thrower] == 'undefined') {
				game[msg.thrower] = {};
			}

			// Add the throw
			game[msg.thrower][msg.throw] = msg.value;

			// Set the new state
			this.setState({
				"game": game,
				"points": this.calculatePoints(game)
			});
		}

		// Else if we got a winner
		else if(msg.type == 'winner') {

			// If we're the winner
			if(msg.is == this.state.is) {
				this.setState({"winner": true});
			}

			// Else we're the loser
			else {
				this.setState({"loser": true});
			}

			// Set a timeout to reset
			setTimeout(function() {
				Hash.set("id", null);
			}, 5000);
		}
	}

	overwrite(ev) {

		// Clone the match state
		var ms = Tools.clone(this.state.match);

		// If we're in game mode
		if(ms.mode == 'game') {

			// Change the throw
			ms.throw = ev.currentTarget.dataset.throw;

			// Set the board mode
			this.refs.board.mode = ['5', '10'].indexOf(ms.throw) != -1 ? 'select' : 'none';
		}

		// Else if we're in overtime mode
		else if(ms.mode == "overtime") {

			// Change the throw
			ms.throw = parseInt(ev.currentTarget.dataset.throw);
		}

		// Set the new state
		this.setState({
			"match": ms,
			"overwrite": true
		});
	}

	points(killshot, value) {

		// Clone match state
		var ms = Tools.clone(this.state.match);

		// If we're in game
		if(ms.mode == "game") {

			// If we're on throw "11", aka, waiting to finish
			if(ms.throw == '11') {
				Events.trigger('error', "Finish the game or select a throw to overwrite.");
				return false;
			}

			// Show the loader
			Loader.show();

			// Get the value or value/killshot
			var value = ['5', '10'].indexOf(ms.throw) != -1 ? {"killshot": killshot, "value": value} : value;

			// Save the value and notify the opponent
			Services.update('watl', 'match/game', {
				"id": this.state.id,
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

					// Clone the game state
					var game = Tools.clone(this.state.game);

					// Store the point value
					game[this.state.is][ms.throw] = value;

					// If the overwrite flag is set
					if(this.state.overwrite) {
						var t = "11"
						for(t of ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]) {
							if(typeof game[this.state.is][t] == 'undefined') {
								break;
							}
						}
						ms.throw = t;
					} else {
						ms.throw = (parseInt(ms.throw) + 1).toString();
					}

					// Set the board mode
					this.refs.board.mode = ['5', '10'].indexOf(ms.throw) != -1 ? 'select' : 'none';

					// Update the state
					this.setState({
						"game": game,
						"match": ms,
						"overwrite": false,
						"points": this.calculatePoints(game)
					});
				}

			}).always(() => {
				// Hide the loader
				Loader.hide();
			})
		}

		// Else we're in a overtime mode
		else {

			// Clone the overtime state
			var overtime = this.state.overtime;

			// Opponent is opposite of thrower
			var sO = this.state.is == 'i' ? 'o' : 'i';

			// If there's no points
			if(typeof overtime == 'undefined') {
				overtime = {
					"finished": 0,
					"i": [],
					"o": []
				};
			}

			// If the length of this throwers throws is not equal or 1 less
			//	than the opponents, we can't accept this throw
			if(!this.state.overwrite && overtime[this.state.is].length > overtime[sO].length) {
				Events.trigger('error', "Please wait for " + this.state.alias + " to make their throw.");
				return false;
			}

			// Killshots count, anything else fails
			value = value == 8 ? 1 : 0;

			// Show the loader
			Loader.show();

			// If the value doesn't exist yet, push it
			if(overtime[this.state.is].length == ms.throw) {
				overtime[this.state.is].push(value);
			}

			// Else, overwrite it
			else {
				overtime[this.state.is][ms.throw] = value;
			}

			// Save the value and notify the opponent
			Services.update('watl', 'match/overtime', {
				"id": this.state.id,
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
					if(this.state.overwrite) {
						var t = 0;
						for(; true; ++t) {
							if(typeof overtime[this.state.is][t] == 'undefined') {
								break;
							}
						}
						ms.throw = t;
					} else {
						ms.throw += 1;
					}

					// Calculate the throws so we can know if we're done
					ms.overtime_can_finish = this.calculateOvertimeFinished(this.state);

					// Set the new state
					this.setState({
						"overtime": overtime,
						"match": ms,
						"overwrite": false
					});
				}

			}).always(() => {
				// Hide loader
				Loader.hide();
			})
		}
	}

	render() {
		var self = this;
		return (
			<div className="watl">
				{self.state.mode == 'opponent' &&
					<Opponent thrower={self.state.thrower} onSelect={self.requestCreate} />
				}
				{self.state.mode == 'request' &&
					<div className="acenter">
						<div className="existing">
							<p>Waiting for {self.state.alias} to accept your match request</p>
							<button onClick={self.requestCancel}>Cancel Request</button>
						</div>
					</div>
				}
				{self.state.mode == 'existing' &&
					<div className="acenter">
						{self.state.existing.map(function(m, i) {
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
				{self.state.mode == 'match' &&
					<div className="actual">
						<Board ref="board" clutchMode="none" onPoints={self.points} />
						<div className="stats">
							{self.renderGame()}
						</div>
						<div className="overlay" style={{"display": self.state.match.waiting ? 'block' : 'none'}}>
							<div><span>Waiting for {self.state.alias}</span></div>
						</div>
						{this.state.winner &&
							<div className="fireworks">
								<div className="overlay">
									<div><span className="winner">YOU WON!</span></div>
								</div>
								<div className="pyro">
									<div className="before"></div>
									<div className="after"></div>
								</div>
							</div>
						}
						{this.state.loser &&
							<div className="overlay">
								<div><span className="loser">Sadly, you lost. Better luck next time.</span></div>
							</div>
						}
					</div>
				}
			</div>
		);
	}

	renderGame() {

		// Opponent is opposite of thrower
		var sT = this.state.is;
		var sO = this.state.is == 'i' ? 'o': 'i';

		// Regulation or overtime
		var title = '';
		var cname = '';

		// Init the rows for each thrower
		var oRows = {"i": [], "o": []}

		// If we're in game mode
		if(this.state.match.mode == 'game') {

			// Go through each regulation throw
			for(var t of ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]) {
				if(this.state.game[sT][t]) {
					if(['5', '10'].indexOf(t) != -1) {
						oRows[sT].push(this.renderGameThrow(t));
					} else {
						oRows[sT].push(this.renderGameThrow(t));
					}
				} else {
					oRows[sT].push(<span> </span>);
				}
				if(this.state.game[sO][t]) {
					if(['5', '10'].indexOf(t) != -1) {
						oRows[sO].push(<span className={this.state.game[sO][t] && this.state.game[sO][t].killshot != '0' ? 'killshot' : ''}>{this.state.game[sO][t] ? (this.state.game[sO][t].value) : ''}</span>);
					} else {
						oRows[sO].push(<span>{this.state.game[sO][t]}</span>);
					}
				} else {
					oRows[sO].push(<span> </span>);
				}
			}

			// Store the title and class name
			title = 'Regulation';
			cname = 'throws';
		}

		// Else we're in overtime
		else {

			// Go through each overtime throw
			for(var i = 0; true; ++i) {
				if(this.state.overtime['i'].length <= i &&
					this.state.overtime['o'].length <= i) {
					break;
				}

				var columns = ['', ''];
				if(typeof this.state.overtime[sT][i] != 'undefined') {
					oRows[sT].push(
						<span
							className={this.state.overwrite && this.state.match.throw == i ? 'overwrite' : ''}
							data-throw={i}
							onClick={this.overwrite}
						>{this.state.overtime[sT][i]}</span>
					);
				}
				if(typeof this.state.overtime[sO][i] != 'undefined') {
					oRows[sO].push(<span>{this.state.overtime[sO][i]}</span>);
				}
			}

			// Store the title
			title = 'Overtime';
			cname = 'overtime';
		}

		return (
			<div className="game">
				<div className="thrower">
					<div className="overall">
						<p>{this.state.thrower.alias}</p>
						<div>{this.state.points[sT]}</div>
					</div>
					<div className={cname}>
						<p>{title}</p>
						<div>{oRows[sT]}</div>
					</div>
				</div>
				<div className="thrower">
					<div className="overall">
						<p>{this.state.alias}</p>
						<div>{this.state.points[sO]}</div>
					</div>
					<div className={cname}>
						<p>{title}</p>
						<div>{oRows[sO]}</div>
					</div>
				</div>
				{(this.state.match.mode == 'game' && this.state.match.throw == '11') &&
					<button onClick={this.gameFinish}>Finish</button>
				}
				{this.state.match.overtime_can_finish &&
					<button onClick={this.overtimeFinish}>Finish</button>
				}
			</div>
		);
	}

	renderGameThrow(t) {

		// The value of the throw
		var v = this.state.game[this.state.is][t];

		// If we're working on 5 or 10
		if(['5', '10'].indexOf(t) != -1) {

			// If the value exists
			if(typeof v != 'undefined') {
				return <span
							className={this.state.overwrite && this.state.match.throw == t ? 'overwrite' : (v.killshot != '0' ? 'killshot' : '')}
							data-throw={t}
							onClick={this.overwrite}
						>{v.value}</span>
			}

			// Else, there's no value
			else {
				return <span></span>
			}
		}

		// Else it's 1-4 or 6-9
		else {

			// If the value exists
			if(typeof v != 'undefined') {
				return <span
							className={this.state.overwrite && this.state.match.throw == t ? 'overwrite' : ''}
							data-throw={t}
							onClick={this.overwrite}
						>{v}</span>
			}

			// Else, there's no value
			else {
				return <span></span>
			}
		}
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
						this.requestReset();
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
					this.requestReset();
				}

			}).always(() => {
				// Hide the loader
				Loader.hide()
			})
		}
	}

	requestCreate(opponent) {

		// Show the loader
		Loader.show();

		// Make a match request for this opponent
		Services.create('auth', 'match/request', {
			"opponent": opponent._id,
			"org": "WATL"
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
				Hash.set('id', 'r|' + res.data)
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
			"mode": "opponent"
		});
	}

	reset() {
		this.setState({
			"alias": '',
			"overtime": false,
			"existing" : false,
			"game": false,
			"id": false,
			"loser": false,
			"match": false,
			"mode": "opponent",
			"is": '',
			"winner": false
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
