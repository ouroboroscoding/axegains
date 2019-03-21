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
			/*"points": [],*/
			"points": [],
			"showPoints": false
		};

		// Bind methods
		this.modeChange = this.modeChange.bind(this);
		this.points = this.points.bind(this);
		this.pointsHide = this.pointsHide.bind(this);
		this.pointsShow = this.pointsShow.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	componentWillMount() {
		// Track any signin/signout events
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);
	}

	componentWillUnmount() {
		// Track any signin/signout events
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);
	}

	modeChange(ev) {
		this.refs.board.clutchMode = ev.currentTarget.dataset.mode;
	}

	points(clutch, value) {
		this.state.points.push([clutch, value]);
		this.setState({"points": this.state.points});
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
					<Board ref="board" clutchMode="select" onPoints={self.points} />
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
					<div>
						<button data-mode="select" onClick={self.modeChange}>Free</button>
						<button data-mode="expected" onClick={self.modeChange}>Clutch</button>
						<button data-mode="no" onClick={self.modeChange}>Target</button>
					</div>
				</div>
			</div>
		);
	}

	reset() {
		this.setState({
			"points": []
		})
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
