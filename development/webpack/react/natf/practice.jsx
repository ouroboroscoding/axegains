/**
 * NATF Practice
 *
 * Manages tracking and storing practice on an NATF board
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-20
 */

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');
var Tools = require('../../generic/tools.js');

// Site modules
var Utils = require('../../utils.js');

// React components
var Modal = require('../elements/modal.jsx');
var Board = require('./board.jsx');

class Pattern extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"descr": props.descr || '',
			"throws": props.throws || [
				{"bigaxe": false, "clutch": false},
				{"bigaxe": false, "clutch": false}
			],
			"title": props.title || ''
		}

		// Bind methods
		this.countChange = this.countChange.bind(this);
		this.descrChange = this.descrChange.bind(this);
		this.radioClick = this.radioClick.bind(this);
		this.titleChange = this.titleChange.bind(this);
	}

	countChange(ev) {

		// Pull out the count
		var count = parseInt(ev.currentTarget.value);

		// If the value is more than
		if(count > this.state.throws.length) {
			for(var i = this.state.throws.length; i < count; ++i) {
				this.state.throws.push({"bigaxe": false, "clutch": false});
			}
		}

		// Else if it's less
		else if(count < this.state.throws.length) {
			this.state.throws.splice(count, this.state.throws.length - count);
		}

		// Set the new state
		this.setState({"throws": this.state.throws});
	}

	descrChange(ev) {
		this.setState({"descr": ev.currentTarget.value});
	}

	titleChange(ev) {
		this.setState({"title": ev.currentTarget.value});
	}

	radioClick(ev) {

		// Pull out the index and type
		var name = ev.currentTarget.name.split('.');
		var index = parseInt(name[1]);
		var type = name[0];
		var value = ev.currentTarget.value == 'true';

		// Set the state
		this.state.throws[index][type] = value;
		this.setState({"throws": this.state.throws});
	}

	render() {
		var self = this;
		return (
			<div className="pattern form">
				<p><input type="text" title="Pattern Title" placeholder="Pattern Title" value={this.state.title} onChange={this.titleChange} /></p>
				<p><textarea title="Pattern Description" placeholder="Pattern Description" value={this.state.descr} onChange={this.descrChange} /></p>
				<p><select value={this.state.throws.length} onChange={this.countChange}>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
					<option value={6}>6</option>
					<option value={7}>7</option>
					<option value={8}>8</option>
					<option value={9}>9</option>
					<option value={10}>10</option>
					<option value={11}>11</option>
					<option value={12}>12</option>
					<option value={13}>13</option>
					<option value={14}>14</option>
					<option value={15}>15</option>
					<option value={16}>16</option>
					<option value={17}>17</option>
					<option value={18}>18</option>
					<option value={19}>19</option>
					<option value={20}>20</option>
					<option value={21}>21</option>
					<option value={22}>22</option>
					<option value={23}>23</option>
					<option value={24}>24</option>
					<option value={25}>25</option>
					<option value={26}>26</option>
					<option value={27}>27</option>
					<option value={28}>28</option>
					<option value={29}>29</option>
					<option value={30}>30</option>
					<option value={31}>31</option>
					<option value={32}>32</option>
				</select></p>
				{this.state.throws.map(function(t, i) {
					return (
						<div key={i} className="throw">
							<h3>{"Throw #" + (i+1)}</h3>
							<p>
								<span>Big Axe: </span>
								<label><input type="radio" name={"bigaxe." + i} value="true" checked={t.bigaxe} onClick={self.radioClick} /> True</label>
								<label><input type="radio" name={"bigaxe." + i} value="false" checked={!t.bigaxe} onClick={self.radioClick} /> False</label>
							</p>
							<p>
								<span>Clutch: </span>
								<label><input type="radio" name={"clutch." + i} value="true" checked={t.clutch} onClick={self.radioClick} /> True</label>
								<label><input type="radio" name={"clutch." + i} value="false" checked={!t.clutch} onClick={self.radioClick} /> False</label>
							</p>
						</div>
					);
				})}
			</div>
		);
	}

	get pattern() {
		return this.state;
	}
}

// Practice Component
class Practice extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"bigaxe": false,
			"clutchAttempts": 0,
			"clutchHits": 0,
			"mode": null,
			"pattern": false,
			"patterns": false,
			"points": [],
			"showPoints": false,
			"thrower": props.thrower,
			"totalPoints": 0
		};

		// Bind methods
		this.bigaxe = this.bigaxe.bind(this);
		this.modeSelect = this.modeSelect.bind(this);
		this.overwrite = this.overwrite.bind(this);
		this.patternClose = this.patternClose.bind(this);
		this.patternCreate = this.patternCreate.bind(this);
		this.patternDelete = this.patternDelete.bind(this);
		this.patternEdit = this.patternEdit.bind(this);
		this.patternNew = this.patternNew.bind(this);
		this.patternUpdate = this.patternUpdate.bind(this);
		this.points = this.points.bind(this);
		this.pointsHide = this.pointsHide.bind(this);
		this.pointsShow = this.pointsShow.bind(this);
		this.reset = this.reset.bind(this);
		this.save = this.save.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	bigaxe(ev) {
		ev.stopPropagation();
		this.setState({"bigaxe": !this.state.bigaxe});
	}

	componentWillMount() {

		// Track any signin/signout events
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);

		// If we have data in local storage
		if('natf_practice' in localStorage) {
			var new_state = JSON.parse(localStorage['natf_practice']);
			new_state.thrower = this.state.thrower;
			this.setState(new_state, function() {
				if(this.state.mode == 'clutch') {
					this.refs.board.clutchMode = 'expected';
				} else if(this.state.mode == 'darkunicorn') {
					this.refs.board.clutchMode = (this.state.points.length % 5 == 4) ? 'none' : 'expected';
				} else if(this.state.mode == 'supernatural') {
					this.refs.board.clutchMode = (this.state.points.length % 5 == 4) ? 'expected' : 'none';
				} else {
					this.refs.board.clutchMode = 'select';
				}
			});
			delete localStorage['natf_practice'];
		}

		// If there's a thrower
		if(this.state.thrower) {

			// Get the custom practice patterns
			this.patternFetch();
		}
	}

	componentWillUnmount() {

		// Stop tracking any signin/signout events
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);

		// If we have points, store them in local storage
		if(this.state.points.length) {
			localStorage['natf_practice'] = JSON.stringify(this.state);
		}
	}

	modeSelect(ev) {
		this.setState({
			"mode": ev.currentTarget.dataset.mode
		}, function() {
			switch(this.state.mode) {
				case 'clutch':
				case 'darkunicorn':
					this.refs.board.clutchMode = 'expected'; break;
				case 'free':
					this.refs.board.clutchMode = 'select'; break;
				case 'supernatural':
					this.refs.board.clutchMode = 'none'; break;
			}
		});
	}

	patternClose() {
		this.setState({"pattern": false});
	}

	patternCreate() {

		// Show the loader
		Loader.show();

		// Generate the pattern object
		pattern = this.refs.pattern.pattern;

		// Send the data to the service
		Services.create('natf', 'practice/pattern', pattern).done(res => {

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

				// Add the pattern to the state
				pattern._id = res.data;
				this.state.patterns.push(pattern);
				this.setState({
					"pattern": false,
					"patterns": this.state.patterns
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	patternDelete(id, ev) {
		ev.stopPropagation();

		// Confirm
		if(confirm("Are you sure you want to delete this practice pattern?")) {

			// Show the loader
			Loader.show();

			// Delete it
			Services.delete('natf', 'practice/pattern', {
				"id": id
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

					// Remove the pattern deleted
					this.state.patterns.splice(
						Tools.afindi(this.state.patterns, '_id', id),
						1
					);

					// Set the state
					this.setState({"patterns": this.state.patterns});
				}

			}).always(() => {
				// Hide the loader
				Loader.hide();
			});
		}
	}

	patternEdit(id, ev) {
		ev.stopPropagation();
		this.setState({
			"pattern": Tools.afindo(
				this.state.patterns,
				'_id',
				id
			)
		});
	}

	patternFetch() {

		// Show the loader
		Loader.show();

		// Fetch the patterns from the service
		Services.read('natf', 'practice/patterns', {}).done(res => {

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
				this.setState({"patterns": res.data});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	patternNew() {
		this.setState({"pattern": true});
	}

	patternUpdate() {

		// Show the loader
		Loader.show();

		// Generate the pattern object
		pattern = this.refs.pattern.pattern;
		pattern._id = this.state.pattern._id;

		// Send the data to the service
		Services.update('natf', 'practice/pattern', pattern).done(res => {

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

				// Find the pattern
				var i = Tools.afindi(this.state.patterns, '_id', pattern._id);

				// Update it
				this.state.patterns[i] = pattern;

				// Set the state
				this.setState({
					"pattern": false,
					"patterns": this.state.patterns
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	overwrite(ev) {
		this.setState({"overwrite": true}, function() {

			// If the mode is dark unicorn
			if(this.state.mode == 'darkunicorn') {
				this.refs.board.clutchMode = (this.state.points.length % 5 == 0) ? 'none' : 'expected';
			}

			// Else if the mode is free
			else if(this.state.mode == 'free') {
				this.refs.board.clutchMode = 'select';
			}

			// Else if the mode is supernatural
			else if(this.state.mode == 'supernatural') {
				this.refs.board.clutchMode = (this.state.points.length % 5 == 0) ? 'expected' : 'none';
			}
		});
	}

	pointsClass(d) {
		var l = [];
		if(d[0]) l.push('bigaxe');
		if(d[1]) l.push('clutch');
		return l.join(' ');
	}

	points(clutch, value) {

		// Get the int version of the value
		var v = parseInt(value);

		// If the overwrite flag is set
		if(this.state.overwrite) {

			// Grab the last value
			var last = this.state.points[this.state.points.length-1];

			// Backtrack the clutch stats
			if(last[0]) {
				this.state.clutchAttempts -= 1;
				if(last[1] == 7) {
					this.state.clutchHits -= 1;
				}
			}

			// Backtrack the points stats
			if(last[1] != 'd') {
				this.state.totalPoints -= last[1];
			}

			// Remove the last item
			this.state.points.pop();
		}

		// Add to the points list
		this.state.points.push([this.state.bigaxe, clutch, (value == 'd' ? 'd' : v)]);

		// If we got a clutch attempt
		if(clutch) {
			this.state.clutchAttempts += 1;
			if(value == 7) {
				this.state.clutchHits += 1;
			}
		}

		// If we got a value
		if(v > 0) {
			this.state.totalPoints += v;
		}

		this.setState({
			"clutchAttempts": this.state.clutchAttempts,
			"clutchHits": this.state.clutchHits,
			"overwrite": false,
			"points": this.state.points,
			"totalPoints": this.state.totalPoints
		}, function() {
			if(this.state.mode == 'darkunicorn') {
				this.refs.board.clutchMode = (this.state.points.length % 5 == 4) ? 'none' : 'expected';
			} else if(this.state.mode == 'supernatural') {
				this.refs.board.clutchMode = (this.state.points.length % 5 == 4) ? 'expected' : 'none';
			}
		});
	}

	pointsHide() {
		this.setState({"showPoints": false});
	}

	pointsShow() {
		this.setState({"showPoints": true});
	}

	render() {
		var self = this;

		// If we have points
		if(this.state.points.length) {

			// Init the last index
			var last = 28;

			// If we have less than 29
			if(this.state.points.length < 29) {
				last = this.state.points.length - 1;
			}
		}

		return (
			<div className="natf">
				{this.state.thrower &&
					<div className="aright">
						<i class="fas fa-plus" onClick={this.patternNew}></i>
					</div>
				}
				<dl className="select" style={{"display": self.state.mode == null ? 'block':'none'}}>
					{this.state.patterns && this.state.patterns.map(function(p, i) {
						return (
							<React.Fragment key={i}>
								<dt data-mode={"custom:" + p._id} onClick={this.modeSelect}>
									<span className="fright">
										<i class="fas fa-edit" title="Edit Pattern" onClick={self.patternEdit.bind(self, p._id)}></i>
										<i class="far fa-trash-alt" title="Delete Pattern" onClick={self.patternDelete.bind(self, p._id)}></i>
									</span>
									<span>{p.title}</span>
								</dt>
								<dd>{p.descr}</dd>
							</React.Fragment>
						);
					})}
					<dt data-mode="free" onClick={this.modeSelect}>Free Practice</dt>
					<dd>Anything is avaialble at any time, you must select the clutch to score it.</dd>
					<dt data-mode="supernatural" onClick={this.modeSelect}>81s / Supernaturals / Unicorns</dt>
					<dd>Every fifth throw is for clutch, and it will be pre-selected for you on those turns.</dd>
					<dt data-mode="darkunicorn" onClick={this.modeSelect}>Gretzky / Dark Unicorns</dt>
					<dd>Four clutches and a bullseye.</dd>
					<dt data-mode="clutch" onClick={this.modeSelect}>Clutch</dt>
					<dd>Every throw is for the clutch and it's pre-selected every throw.</dd>
				</dl>
				{Tools.isObject(this.state.pattern) &&
					<Modal
						buttons={[{"name": "update pattern", "callback": this.patternUpdate}]}
						close={this.patternClose}
						title="Edit Pattern"
						width="95%"
					>
						<Pattern
							descr={this.state.pattern.descr}
							ref="pattern"
							throws={this.state.pattern.throws}
							title={this.state.pattern.title}
						/>
					</Modal>
				}
				{this.state.pattern === true &&
					<Modal
						buttons={[{"name": "create pattern", "callback": this.patternCreate}]}
						close={this.patternClose}
						title="New Pattern"
						width="95%"
					>
						<Pattern ref="pattern" />
					</Modal>
				}
				<div style={{"display": self.state.mode == null ? 'none':'block'}}>
					<Board ref="board" clutchMode={self.state.mode} onPoints={self.points} />
					<div className={"bigaxe" + (this.state.bigaxe ? ' on' : '')} onClick={this.bigaxe}>BA</div>
					{self.state.points.length > 0 &&
						<React.Fragment>
							<div className="averages">
								<span className="clutches fright"><b>Clutch %: </b><span>{self.state.clutchAttempts == 0 ? "0.0" : ((self.state.clutchHits / self.state.clutchAttempts) * 100.0).toFixed(1)}</span></span>
								<span className="average fleft"><b>Avg Throw: </b><span>{(self.state.totalPoints / self.state.points.length).toFixed(2)}</span></span>
								<br />
							</div>
							<div className="points">
								{self.state.points.length > 29 &&
									<span key={-1} className="link bold" onClick={self.pointsShow}>...</span>
								}
								{self.state.points.slice(-29).map(function(p, i) {
									if(i == last) {
										return <span key={i} className={"last " + (self.state.overwrite ? 'overwrite' : self.pointsClass(p))} onClick={self.overwrite}>{p[2]}</span>
									} else {
										return <span key={i} className={self.pointsClass(p)}>{p[2]}</span>
									}
								})}
							</div>
						</React.Fragment>
					}
					<div className="reset fright" onClick={self.reset}>Reset</div>
					{(this.state.thrower && this.state.points.length > 0) &&
						<div className="save fleft" onClick={self.save}>Save & Reset</div>
					}
					{self.state.showPoints &&
						<Modal
							title="All points this practice"
							close={self.pointsHide}
						>
							<div className="allPoints">
								{self.state.points.map(function(p, i) {
									return <span key={i} className={self.pointsClass(p)}>{p[2]}</span>
								})}
							</div>
						</Modal>
					}
				</div>
			</div>
		);
	}

	reset() {

		// Init the reset flag
		var reset = true;

		// If there's points
		if(this.state.points.length) {
			// Update the flag based on the user's response
			reset = confirm('Are you sure you want to reset your practice?');
		}

		// If we can reset
		if(reset) {
			this.setState({
				"clutchAttempts": 0,
				"clutchHits": 0,
				"mode": null,
				"points": [],
				"showPoints": false,
				"totalPoints": 0
			});
		}
	}

	save(ev) {

		// Show loader
		Loader.show();

		// Send the practice to the NATF service
		Services.create('natf', 'practice', {
			"points": this.state.points
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

				// Notify
				Events.trigger('success', 'Practice saved!');

				// Reset
				this.setState({
					"clutchAttempts": 0,
					"clutchHits": 0,
					"mode": null,
					"points": [],
					"showPoints": false,
					"totalPoints": 0
				});
			}

		}).always(() => {
			// Hide loader
			Loader.hide();
		});
	}

	signin(thrower) {

		// Set the thrower
		this.setState({"thrower": thrower});

		// Get the custom practice patterns
		this.patternFetch();
	}

	signout() {

		// Remove the thrower and patterns
		this.setState({
			"patterns": false,
			"thrower": false
		});


	}
}

// Export the component
module.exports = Practice;
