// External modules
var React = require('react');

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');

// Site modules
var Utils = require('../../utils.js');

// React components
var Modal = require('../elements/modal.jsx');
var Board = require('./board.jsx');

// Practice Component
class Practice extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"clutchAttempts": 0,
			"clutchHits": 0,
			"mode": null,
			"points": [],
			"showPoints": false,
			"thrower": props.thrower,
			"totalPoints": 0
		};

		// Bind methods
		this.modeSelect = this.modeSelect.bind(this);
		this.overwrite = this.overwrite.bind(this);
		this.points = this.points.bind(this);
		this.pointsHide = this.pointsHide.bind(this);
		this.pointsShow = this.pointsShow.bind(this);
		this.reset = this.reset.bind(this);
		this.save = this.save.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	componentWillMount() {

		// Track any signin/signout events
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);

		// If we have data in local storage
		if('natf_practice' in localStorage) {
			this.setState(JSON.parse(localStorage['natf_practice']), function() {
				if(this.state.mode == 'supernatural') {
					if(this.state.points.length % 5 == 4) {
						this.refs.board.clutchMode = 'expected';
					} else {
						this.refs.board.clutchMode = 'none';
					}
				} else if(this.state.mode == 'clutch') {
					this.refs.board.clutchMode = 'expected';
				} else {
					this.refs.board.clutchMode = 'select';
				}
			});
			delete localStorage['natf_practice'];
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
				case 'free':
					this.refs.board.clutchMode = 'select'; break;
				case 'supernatural':
					this.refs.board.clutchMode = 'none'; break;
				case 'clutch':
					this.refs.board.clutchMode = 'expected'; break;
			}
		});
	}

	overwrite(ev) {
		this.setState({"overwrite": true}, function() {

			// If the mode is free
			if(this.state.mode == 'free') {
				this.refs.board.clutchMode = 'select';
			}

			// Else if the mode is supernatural
			else if(this.state.mode == 'supernatural') {

				// If we're divisible by 5
				if(this.state.points.length % 5 == 0) {
					this.refs.board.clutchMode = 'expected';
				} else {
					this.refs.board.clutchMode = 'none';
				}
			}
		});
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
		this.state.points.push([clutch, (value == 'd' ? value : v)]);

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
			if(this.state.mode == 'supernatural') {
				if(this.state.points.length % 5 == 4) {
					this.refs.board.clutchMode = 'expected';
				} else {
					this.refs.board.clutchMode = 'none';
				}
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

		return (
			<div id="content">
				<div id="centered">
					<div className="natf">
						<div className="practice">
							{self.state.mode == null ?
								self.returnSelectPractice()
							:
								self.returnBoard()
							}
						</div>
					</div>
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

	returnSelectPractice() {
		return (
			<dl className="select">
				<dt data-mode="free" onClick={this.modeSelect}>Free Practice</dt>
				<dd>In free practice any points are available at any time. You must select the clutch first if you wish to try for it.</dd>
				<dt data-mode="supernatural" onClick={this.modeSelect}>Supernatural</dt>
				<dd>In supernatural practice every fifth throw is for clutch, and it will be pre-selected for you on those turns.</dd>
				<dt data-mode="clutch" onClick={this.modeSelect}>Clutch</dt>
				<dd>In clutch practice every throw is for the clutch, and it will be pre-selected every turn.</dd>
			</dl>
		);
	}

	returnBoard() {
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
			<React.Fragment>
				<Board ref="board" clutchMode={self.state.mode} onPoints={self.points} />
				{self.state.points.length > 0 &&
					<React.Fragment>
						<div className="averages">
							<span className="clutches fright"><b>Clutch %: </b><span>{self.state.clutchAttempts == 0 ? "0.0" : ((self.state.clutchHits / self.state.clutchAttempts) * 100.0).toFixed(1)}</span></span>
							<span className="average fleft"><b>Avg Throw: </b><span>{(self.state.totalPoints / self.state.points.length).toFixed(2)}</span></span>
							<br />
						</div>
						<div className="points">
							{self.state.points.length > 29 &&
								<span key={-1} onClick={self.pointsShow}>...</span>
							}
							{self.state.points.slice(-29).map(function(p, i) {
								if(i == last) {
									return <span key={i} className={"last " + (self.state.overwrite ? 'overwrite' : (p[0] ? 'clutch' : ''))} onClick={self.overwrite}>{p[1]}</span>
								} else {
									return <span key={i} className={p[0] ? 'clutch':''}>{p[1]}</span>
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
								return <span key={i} className={p[0] ? 'clutch':''}>{p[1]}</span>
							})}
						</div>
					</Modal>
				}
			</React.Fragment>
		);
	}

	save(ev) {

		// Store this
		var self = this;

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

	signin() {
		this.setState({"thrower": true});
	}

	signout() {
		this.setState({"thrower": false});
	}
}

// Export the component
module.exports = Practice;
