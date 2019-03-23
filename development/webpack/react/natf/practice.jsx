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
			"mode": null,
			"points": [],
			"showPoints": false
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
		this.state.points.push([clutch, value]);
		this.setState({"points": this.state.points}, function() {
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
				"mode": null,
				"points": [],
				"showPoints": false
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
					<div className="points">
						{self.state.points.length > 29 &&
							<span key={-1} onClick={self.pointsShow}>...</span>
						}
						{self.state.points.slice(-29).map(function(p, i) {
							return <span key={i} className={p[0] ? 'clutch':''}>{p[1]}</span>
						})}
					</div>
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
