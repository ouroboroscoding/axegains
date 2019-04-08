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

// Defines
FINISHED_INITIATOR = 0x01;
FINISHED_OPPONENT = 0x02;
FINISHED_BOTH = 0x03;

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
		this.bigaxeFinish = this.bigaxeFinish.bind(this);
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

	bigaxeFinish() {

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// If we're in points mode
		var noun = '';
		if(this.state.matchState.mode == 'bigaxe_points') {
			noun = 'match/finish/bigaxe/points';
		} else {
			noun = 'match/finish/bigaxe/target';
		}

		// Let the service know
		Services.update('natf', noun, {
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

				// Clone the match state
				var ms = self.state.matchState

				// Remove the finish and set the waiting
				ms.bigaxe_can_finish = false;
				ms.waiting = true;

				// Set the new state
				self.setState({"matchState": ms});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	calculateBigAxeFinished(type, data) {

		// Make my life easier
		var throws = data.bigaxe[type];

		// If the lengths don't match
		if(throws['i'].length != throws['o'].length) {

			// We aren't done
			return false;
		}

		// If we're checking points
		if(type == 'points') {

			// Loop through till we have no more throws
			for(var i = 0; throws['i'].length < i; ++i) {

				// If we got a drop, consider it a zero
				if(throws['i'][i] == 'd') {
					throws['i'][i] = 0
				}
				if(throws['o'][i] == 'd') {
					throws['o'][i] = 0
				}

				// If the values don't match, someone won
				if(throws['i'][i] != throws['o'][i]) {

					// Allow finishing
					return true;
				}
			}
		}

		// Else we're checking target
		else {

			// Init consecutive hits
			var iCon = 0;

			// Loop through till we have no more throws
			for(var i = 0; i < throws['i'].length; ++i) {

				// If we got double failures
				if((throws['i'][i] == 'd' || throws['i'][i] == 0) &&
					(throws['o'][i] == 'd' || throws['o'][i] == 0)) {

					// Reset the consecutive and continue the loop
					iCon = 0;
					continue;
				}

				// If we got double 1s
				if(throws['i'][i] == 1 && throws['o'][i] == 1) {

					// Increase the consecutive
					++iCon;

					// If we got 3
					if(iCon == 3) {

						// Allow finishing
						return true;
					}

					// Continue the loop
					continue;
				}

				// Looks like someone won
				return true;
			}
		}

		// Not done yet
		return false;
	}

	calculateMatchState(data) {

		// Init the state
		var state = {
			"game": "1",
			"throw": "1",
			"waiting": false
		};

		// Are we opponent or initiator
		var is = (this.state.thrower._id == data.initiator) ? 'i' : 'o';

		// If there's any bigaxe data it's safe to assume we're done with the
		//	regular match
		if(data.bigaxe && !Tools.empty(data.bigaxe)) {

			// Bigaxe throw starts at 0
			state.throw = 0;

			// If we have points
			if(data.bigaxe.points && data.bigaxe.points[is].length) {

				// Set bigaxe to points
				state.mode = "bigaxe_points";

				// Step through the points
				for(var i = 0; i < data.bigaxe.points[is].length; ++i) {
					if(typeof data.bigaxe.points[is][i] == 'undefined') {
						state.throw = i;
					}
				}

				// If we're finished
				if(data.bigaxe.points.finished[is]) {
					state.waiting = true;
				}

				// Do we need to show the finish button?
				state.bigaxe_can_finish = this.calculateBigAxeFinished('points', data);
			}

			// Else we're still on target
			else {

				// Set bigaxe to target
				state.mode = "bigaxe_target";

				// Step through the target
				for(var i; i < data.bigaxe.target.length; ++i) {
					if(typeof data.bigaxe.target[i][t] == 'undefined') {
						state.throw = i;
					}
				}

				// If we're finished
				if(data.bigaxe.target.finished[is]) {
					state.waiting = true;
				}

				// Do we need to show the finish button?
				state.bigaxe_can_finish = this.calculateBigAxeFinished('target', data);
			}
		}

		// Else, assume we are in games
		else {

			// Set the mode
			state.mode = "games";

			// If we're finished
			if(data.games_finished[is]) {
				state.waiting = true;
			}

			// Else, go through each game
			else {
				var g = "1";
				for(g of ["1", "2", "3"]) {

					// If it doesn't exist
					if(typeof data.games[g] == 'undefined' ||
						typeof data.games[g][is] == 'undefined' ||
						Tools.empty(data.games[g][is])) {
						break;
					}

					// Store the game
					state.game = g;

					// Go through each throw
					var t = "1";
					for(t of ["1", "2", "3", "4", "5", "6"]) {

						// If it doesn't exist
						if(typeof data.games[g][is][t] == 'undefined') {
							break;
						}
					}

					// Store the round
					state.throw = t;
				}
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

	gameFinish(ev) {

		// Clone the match state
		var ms = Tools.clone(this.state.matchState);

		// If we're on game 3
		if(ms.game == "3") {

			// Store this
			var self = this;

			// Show the loader
			Loader.show()

			// Notify backend the match is over
			Services.update('natf', 'match/finish/games', {
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

					// Clone the match state
					var ms = Tools.clone(self.state.matchState);

					// Set the match state to waiting
					ms.waiting = true;
					self.setState({
						"matchState": ms
					});
				}

			}).always(() => {
				// Hide loader
				Loader.hide();
			});
		}

		// Else, go to the next game
		else {

			// Clone the games
			var games = Tools.clone(this.state.games);

			// Increase the game and throw in the match state
			ms.game = (parseInt(ms.game) + 1).toString();
			ms.throw = "1";

			// If we don't have the next game, add it
			if(typeof games[ms.game] == 'undefined') {
				games[ms.game] = {
					"i": {},
					"o": {}
				}
			}

			// Else if it does exist
			else {

				// If it doesn't have an initiator
				if(typeof games[ms.game]['i'] == 'undefined') {
					games[ms.game]['i'] = {};
				}

				// If it doesn't have an opponent
				if(typeof games[ms.game]['o'] == 'undefined') {
					games[ms.game]['o'] = {};
				}
			}

			// Set the new state
			this.setState({
				"games": games,
				"matchState": ms
			});
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
						"mode": "games",
						"waiting": false
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

						// Make sure each game has an intiator and opponent
						for(var k in res.data.games) {
							for(var w of ['i', 'o']) {
								if(typeof res.data.games[k][w] == 'undefined') {
									res.data.games[k][w] = {}
								}
							}
						}

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

		// If we got a message about a new throw in a game
		if(msg.type == 'games_throw') {

			// Clone the games
			var games = Tools.clone(this.state.games);

			// Create the game if it doesn't exist
			if(typeof games[msg.game] == 'undefined') {
				games[msg.game] = {
					"i": {},
					"o": {}
				};
			}

			// If the thrower section of the game doesn't exist
			if(typeof games[msg.game][msg.thrower] == 'undefined') {
				games[msg.game][msg.thrower] = {};
			}

			// Add the throw
			games[msg.game][msg.thrower][msg.throw] = msg.value;

			// Set the new state
			this.setState({"games": games});
		}

		// Else if we got an update on a big axe points throw
		else if(msg.type == "bigaxe_points") {

			// If we need to start
			if(msg.subtype == "start") {

				// Clone the match state and bigaxe
				var ms = Tools.clone(this.state.matchState);
				var ba = Tools.clone(this.state.bigaxe);

				// Set the mode to big axe target and reset the throw to 1
				ms.mode = "bigaxe_points";
				ms.throw = 0;
				ms.waiting = false;

				// Add the points section
				ba['points'] = {
					"i": [],
					"o": []
				}

				// Set the board mode
				this.refs.board.clutchMode = 'select';

				// Set the new state
				this.setState({
					"bigaxe": ba,
					"matchState": ms
				});
			}

			// Else if we got a throw
			else if(msg.subtype == "throw") {

				// Clone the bigaxe
				var ba = Tools.clone(this.state.bigaxe);

				// If points doesn't exist
				if(typeof ba['points'] == 'undefined') {
					ba['points'] = {"i": [], "o": []};
				}

				// If the thrower doesn't exist
				if(typeof ba['points'][msg.thrower] == 'undefined') {
					ba['points'][msg.thrower] = [];
				}

				// If the throw doesn't exist
				if(ba['points'][msg.thrower].length == msg.throw) {
					ba['points'][msg.thrower].push({"clutch": msg.clutch, "value": msg.value});
				} else {
					ba['points'][msg.thrower][msg.throw] = {"clutch": msg.clutch, "value": msg.value};
				}

				// Set the new state
				this.setState({"bigaxe": ba});
			}

			// Else we aren't actually finished
			else if(msg.subtype == 'notfinished') {

				// Clone the match state
				var ms = Tools.clone(this.state.matchState);

				// Remove waiting and set to bigaxe points just in case
				ms.mode = 'bigaxe_points';
				ms.waiting = false;

				// Set the new state
				this.setState({"matchState": ms});
			}
		}

		// If we got a message to start big axe
		else if(msg.type == "bigaxe_target") {

			// If we need to start
			if(msg.subtype == "start") {

				// Clone the match state
				var ms = Tools.clone(this.state.matchState);

				// Set the mode to big axe target and reset the throw to 1
				ms.mode = "bigaxe_target";
				ms.throw = 0;
				ms.waiting = false;

				// Set the board mode
				this.refs.board.clutchMode = 'none';

				// Set the new state
				this.setState({
					"bigaxe": {
						"target": {
							"i": [],
							"o": []
						}
					},
					"matchState": ms
				});
			}

			// Else if we got a throw
			else if(msg.subtype == "throw") {

				// Clone the bigaxe
				var ba = Tools.clone(this.state.bigaxe);

				// If it's false or target doesn't exist
				if(!ba || typeof ba['target'] == 'undefined') {
					ba = {"target": {"i": [], "o": []}}
				}

				// If the thrower doesn't exist
				if(typeof ba['target'][msg.thrower] == 'undefined') {
					ba['target'][msg.thrower] = [];
				}

				// If the throw doesn't exist
				if(ba['target'][msg.thrower].length == msg.throw) {
					ba['target'][msg.thrower].push(msg.value);
				} else {
					ba['target'][msg.thrower][msg.throw] = msg.value;
				}

				// Set the new state
				this.setState({"bigaxe": ba});
			}

			// Else we aren't actually finished
			else if(msg.subtype == 'notfinished') {

				// Clone the match state
				var ms = Tools.clone(this.state.matchState);

				// Remove waiting and set to bigaxe target just in case
				ms.mode = 'bigaxe_target';
				ms.waiting = false;

				// Set the new state
				this.setState({"matchState": ms});
			}
		}
	}

	overwrite(ev) {

		// Clone the match state
		var ms = Tools.clone(this.state.matchState);

		// If we're in games mode
		if(ms.mode == 'games') {

			// Change the throw
			ms.throw = ev.currentTarget.dataset.throw;

			// Set the board mode
			this.refs.board.clutchMode = ms.throw == "5" ? 'selected' : 'none';
		}

		// Else if we're in bigaxe target mode
		else if(ms.mode == "bigaxe_target" || ms.mode == 'bigaxe_points') {

			// Change the throw
			ms.throw = parseInt(ev.currentTarget.dataset.throw);
		}

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

		// Clone match state
		var ms = Tools.clone(this.state.matchState);

		// If we're in big axe mode
		if(ms.mode == "games") {

			// If we're on throw "6", aka, waiting to finish
			if(ms.throw == '6') {
				Loader.hide();
				alert("Go to next game or select a throw to overwrite");
				return;
			}

			// Clone the games and match state
			var games = Tools.clone(this.state.games);

			// Get the value or value/clutch
			var value = (ms.throw == 5) ? {"clutch": clutch, "value": value} : value;

			// Store the point value
			games[ms.game][this.state.is][ms.throw] = value;

			// Save the value and notify the opponent
			Services.update('natf', 'match/game', {
				"id": this.state.id,
				"game": ms.game,
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
							if(typeof games[ms.game][self.state.is][t] == 'undefined') {
								break;
							}
						}
						ms.throw = t;
					} else {
						ms.throw = (parseInt(ms.throw) + 1).toString();
					}

					// Set the board mode
					self.refs.board.clutchMode = ms.throw == 5 ? 'selected' : 'none';

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

		// Else we're in a bigaxe mode
		else {

			// Clone the bigaxe state
			var bigaxe = Tools.clone(this.state.bigaxe);

			// If we're in target
			if(ms.mode == "bigaxe_target") {

				// If the value is 1, 3, or 5, it's considered a 1
				if([1, 3, 5].indexOf(value) > 0) {
					value = 1;
				}

				// If there's no target
				if(typeof bigaxe['target'] == 'undefined') {
					bigaxe['target'] = {
						"finished": 0,
						"i": [],
						"o": []
					};
				}

				// If the value doesn't exist yet, push it
				if(bigaxe['target'][this.state.is].length == ms.throw) {
					bigaxe['target'][this.state.is].push(value);
				}

				// Else, overwrite it
				else {
					bigaxe['target'][this.state.is][ms.throw] = value;
				}

				// Save the value and notify the opponent
				Services.update('natf', 'match/bigaxe/target', {
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
						if(self.state.overwrite) {
							var t = 0;
							for(; true; ++t) {
								if(typeof bigaxe['target'][self.state.is][t] == 'undefined') {
									break;
								}
							}
							ms.throw = t;
						} else {
							ms.throw += 1;
						}

						// Calculate the throws so we can know if we're done
						ms.bigaxe_can_finish = self.calculateBigAxeFinished('target', self.state);

						// Set the new state
						self.setState({
							"bigaxe": bigaxe,
							"matchState": ms
						});
					}

				}).always(() => {
					// Hide loader
					Loader.hide();
				})
			}

			// Else we're in points
			else {

				// If there's no points
				if(typeof bigaxe['points'] == 'undefined') {
					bigaxe['points'] = {
						"finished": 0,
						"i": [],
						"o": []
					};
				}

				// If the value doesn't exist yet, push it
				if(bigaxe['points'][this.state.is].length == ms.throw) {
					bigaxe['points'][this.state.is].push(value);
				}

				// Else, overwrite it
				else {
					bigaxe['points'][this.state.is][ms.throw] = value;
				}

				// Save the value and notify the opponent
				Services.update('natf', 'match/bigaxe/points', {
					"id": this.state.id,
					"throw": ms.throw,
					"clutch": clutch,
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
							var t = 0;
							for(; true; ++t) {
								if(typeof bigaxe['points'][self.state.is][t] == 'undefined') {
									break;
								}
							}
							ms.throw = t;
						} else {
							ms.throw += 1;
						}

						// Calculate the throws so we can know if we're done
						ms.bigaxe_can_finish = self.calculateBigAxeFinished('target', self.state);

						// Set the new state
						self.setState({
							"bigaxe": bigaxe,
							"matchState": ms
						});
					}

				}).always(() => {
					// Hide loader
					Loader.hide();
				})
			}
		}
	}

	render() {
		var self = this;
		return (
			<div className="natf">
				{self.state.mode == 'opponent' &&
					<Opponent thrower={self.state.thrower} onSelect={self.requestCreate} />
				}
				{self.state.mode == 'request' &&
					<div className="acenter">
						<p>Waiting for {self.state.opponent.alias} to accept your match request</p>
						<button onClick={self.requestCancel}>Cancel Request</button>
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
							{self.renderPrimary()}
							{self.renderSecondary()}
						</div>
						<div className="overlay" style={{"display": self.state.matchState.waiting ? 'block' : 'none'}}>
							<div>
								<span>Waiting for {self.state.alias}</span>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}

	renderBigAxe() {
		var self = this;

		// Init the rows
		var rows = [];

		// Opponent is opposite of thrower
		var sO = this.state.is == 'i' ? 'o': 'i';

		// If we have a target section
		var add_to_points = 0;
		if(this.state.bigaxe.target) {
			var target = this.state.bigaxe.target;
			for(var i = 0; true; ++i) {
				if(target[this.state.is].length <= i &&
					target[sO].length <= i) {
					add_to_points = i;
					break;
				}
				var columns = ['', ''];
				if(target[this.state.is][i]) {
					columns[0] = target[this.state.is][i];
				}
				if(target[sO][i]) {
					columns[1] = target[sO][i];
				}

				// Add the row
				rows.push(<tr><td>{i+1}</td><td>{columns[0]}</td><td>{columns[1]}</td></tr>);
			}
		}

		// If we have a points section
		if(this.state.bigaxe.points) {
			var points = this.state.bigaxe.points;
			for(var i = 0; true; ++i) {
				if(points[this.state.is].length <= i &&
					points[sO].length <= i) {
					add_to_points = i;
					break;
				}
				var columns = ['', ''];
				if(points[this.state.is][i]) {
					columns[0] = points[this.state.is][i];
				}
				if(points[sO][i]) {
					columns[1] = points[sO][i];
				}

				// Add the row
				rows.push(<tr><td>{add_to_points+i+1}</td><td>{columns[0]}</td><td>{columns[1]}</td></tr>);
			}
		}

		return (
			<div className="bigaxe">
				<table>
					<thead>
						<tr>
							<th>B</th>
							<th>{this.state.thrower.alias}</th>
							<th>{this.state.alias}</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				{this.state.matchState.bigaxe_can_finish &&
					<button onClick={this.bigaxeFinish}>"Finish"</button>
				}
			</div>
		)
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
					<button onClick={this.gameFinish}>{this.state.matchState.game == "3" ? "Finish" : "Next Game"}</button>
				}
			</div>
		);
	}

	renderGameThrow(t) {

		// The game
		var g = this.state.matchState.game;

		// The value of the throw
		var v = null;
		if(this.state.games[g] && this.state.games[g][this.state.is]) {
			v = this.state.games[g][this.state.is][t];
		}

		// If we're working on 5
		if(t == '5') {

			// If the value exists
			if(v) {
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

			// If the value exists
			if(v) {
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

	renderPrimary() {

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
							oPoints['i'][iG] += this.state.games[g]['i'][t].value == 'd' ? 0 : this.state.games[g]['i'][t].value;
						} else {
							oPoints['i'][iG] += this.state.games[g]['i'][t] == 'd' ? 0 : this.state.games[g]['i'][t];
						}
					}
					if(this.state.games[g]['o'][t]) {
						if(t == '5') {
							oPoints['o'][iG] += this.state.games[g]['o'][t].value == 'd' ? 0 : this.state.games[g]['o'][t].value;
						} else {
							oPoints['o'][iG] += this.state.games[g]['o'][t] == 'd' ? 0 : this.state.games[g]['o'][t];
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

	renderSecondary() {

		// If we're in games mode
		if(this.state.matchState.mode == "games") {
			return this.renderGame();
		}

		// Else we're in a bigaxe mode
		else {
			return this.renderBigAxe();
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
