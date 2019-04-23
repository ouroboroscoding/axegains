/**
 * NATF Games: Around The World
 *
 * NATF's Around The World Game
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-23
 */

// Generic modules
var Events = require('../../generic/events.js');

// Generic components
var Modal = require('../elements/modal.jsx');

// Components
var Board = require('./board.jsx');

// ATW component
class ATW extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"overwrite": false,
			"showThrows": false,
			"throws": []
		};

		// Bind methods
		this.atw = this.atw.bind(this);
		this.overwrite = this.overwrite.bind(this);
		this.reset = this.reset.bind(this);
		this.throwsHide = this.throwsHide.bind(this);
		this.throwsShow = this.throwsShow.bind(this);
	}

	atw(value) {

		// Init the new state
		var state = {
			"overwrite": false,
			"throws": this.state.throws
		};

		// If the overwrite flag is set
		if(this.state.overwrite) {

			// Remove the last item
			state.throws.pop();
		}

		// Add to the points list
		state.throws.push(value);

		// Set the state
		this.setState(state);
	}

	componentWillMount() {

		// If we have data in local storage
		if('natf_atw' in localStorage) {
			var new_state = JSON.parse(localStorage['natf_atw']);
			this.setState(new_state, function() {

				// Get the last value that's not a 0
				for(var i = this.state.throws.length-1; i >= 0; --i) {
					if(this.state.throws[i] != '0') {
						this.refs.board.atw(this.state.throws[i]);
						return;
					}
				}

				// Or else reset the ATW
				this.refs.board.atw(1);
			});
			delete localStorage['natf_atw'];
		}
	}

	componentWillUnmount() {

		// If we have throws, store them in local storage
		if(this.state.throws.length) {
			localStorage['natf_atw'] = JSON.stringify(this.state);
		}
	}

	overwrite() {

		// New state
		var state = {
			"overwrite": true
		}

		// If the last throw was some form of ATW
		if(this.state.throws[this.state.throws.length-1] != "0") {
			this.refs.board.atw(-1);
		}

		// Set the state
		this.setState(state);
	}

	render() {
		var self = this;

		// If we have throws
		if(this.state.throws.length) {

			// Init the last index
			var last = 28;

			// If we have less than 29
			if(this.state.throws.length < 29) {
				last = this.state.throws.length - 1;
			}
		}

		return (
			<div className="atw">
				<Board ref="board" clutchMode="none" atw={true} onATW={this.atw} />
				{self.state.throws.length > 0 &&
					<React.Fragment>
						<div className="points">
							{self.state.throws.length > 29 &&
								<span key={-1} className="link bold" onClick={self.throwsShow}>...</span>
							}
							{self.state.throws.slice(-29).map(function(p, i) {
								if(i == last) {
									return <span key={i} className={"last " + (self.state.overwrite ? 'overwrite' : '')} onClick={self.overwrite}>{p}</span>
								} else {
									return <span key={i}>{p}</span>
								}
							})}
						</div>
						<div className="reset fright" onClick={self.reset}>Reset</div>
						{self.state.showThrows &&
							<Modal
								title="All Throws"
								close={self.throwsHide}
							>
								<div className="allPoints">
									{self.state.throws.map(function(p, i) {
										return <span key={i}>{p}</span>
									})}
								</div>
							</Modal>
						}
					</React.Fragment>
				}
			</div>
		);
	}

	reset() {

		// Init the reset flag
		var reset = true;

		// If there's throws
		if(this.state.throws.length) {
			// Update the flag based on the user's response
			reset = confirm('Are you sure you want to reset Around The World?');
		}

		// If we can reset
		if(reset) {
			this.setState({
				"overwrite": false,
				"showThrows": false,
				"throws": []
			});

			// Reset the board
			this.refs.board.atw(1);
		}
	}

	throwsHide() {
		this.setState({"showThrows": false});
	}

	throwsShow() {
		this.setState({"showThrows": true});
	}
}

// Export the component
module.exports = ATW;
