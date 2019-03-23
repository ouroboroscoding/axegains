// External modules
var React = require('react');

// Generic modules
var Events = require('../../generic/events.js');

// React components
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
			"totalPoints": 0
		};

		// Bind methods
		this.modeSelect = this.modeSelect.bind(this);
		this.points = this.points.bind(this);
		this.pointsHide = this.pointsHide.bind(this);
		this.pointsShow = this.pointsShow.bind(this);
		this.reset = this.reset.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	componentWillMount() {
		// Track any signin/signout events
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);
	}

	componentWillUnmount() {
		// // Stop tracking any signin/signout events
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);
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

	points(clutch, value) {

		// Add to the points list
		this.state.points.push([clutch, value]);

		// If we got a clutch attempt
		if(clutch) {
			this.state.clutchAttempts += 1;
			if(value == 7) {
				this.state.clutchHits += 1;
			}
		}

		// If we got a value
		var v = parseInt(value);
		if(v > 0) {
			this.state.totalPoints += v;
		}

		this.setState({
			"clutchAttempts": this.state.clutchAttempts,
			"clutchHits": this.state.clutchHits,
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
			<div className="natf">
				<div className="practice">
					{self.state.mode == null ?
						self.returnSelectPractice()
					:
						self.returnBoard()
					}
				</div>
			</div>
		);
	}

	reset() {
		if(confirm('Are you sure you want to reset your practice?')) {
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
		return (
			<React.Fragment>
				<Board ref="board" clutchMode={self.state.mode} onPoints={self.points} />
				{self.state.points.length > 0 &&
					<React.Fragment>
						<div className="averages">
							<span className="clutches fright"><b>Clutch %: </b><span>{self.state.clutchAttempts == 0 ? "0.00" : ((self.state.clutchHits / self.state.clutchAttempts) * 100.0).toFixed(2)}</span></span>
							<span className="average fleft"><b>Avg Throw: </b><span>{(self.state.totalPoints / self.state.points.length).toFixed(2)}</span></span>
							<br />
						</div>
						<div className="points">
							{self.state.points.length > 29 &&
								<span key={-1} onClick={self.pointsShow}>...</span>
							}
							{self.state.points.slice(-29).map(function(p, i) {
								return <span key={i} className={p[0] ? 'clutch':''}>{p[1]}</span>
							})}
						</div>
					</React.Fragment>
				}
				<div className="reset fright" onClick={self.reset}>Reset</div>
				{self.state.showPoints &&
					<div className="allPoints">
						<div className="header">
							<i className="fas fa-times-circle" onClick={this.pointsHide}></i>
							<span>All points this practice</span>
						</div>
						<div className="content">
							{self.state.points.map(function(p, i) {
								return <span key={i} className={p[0] ? 'clutch':''}>{p[1]}</span>
							})}
						</div>
					</div>
				}
			</React.Fragment>
		);
	}

	signin() {
		console.log('signed in');
	}

	signout() {
		console.log('signed out');
	}
}

// Export the component
module.exports = Practice;
