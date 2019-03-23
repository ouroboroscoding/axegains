// External modules
var React = require('react');

// Generic modules
var Events = require('../generic/events.js');

// Components
var Header = require('./header.jsx');
var {Menu, Item} = require('./menu.jsx');
var NatfPractice = require('./natf/practice.jsx');

// Site component
class Site extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"primary": "practice",
			"secondary": "natf",
			"thrower": props.thrower
		};

		// Bind methods
		this.primaryChange = this.primaryChange.bind(this);
		this.secondaryChange = this.secondaryChange.bind(this);
	}

	componentWillMount() {
		// Track any signin/signout events
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);
	}

	componentWillUnmount() {
		// Stop tracking any signin/signout events
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);
	}

	primaryChange(name) {
		this.setState({"primary": name})
	}

	render() {
		var self = this;
		return (
			<div id="site">
				<Header thrower={self.props.thrower} />
				<Menu className="menu primary" selected={self.state.primary} onChange={self.primaryChange}>
					<Item name="games">Games</Item>
					<Item name="practice">Practice</Item>
					<Item name="match">Match</Item>
					<Item name="league">League</Item>
				</Menu>
				<Menu className="menu secondary" selected={self.state.secondary} onChange={self.secondaryChange}>
					<Item name="natf">NATF</Item>
					<Item name="watl">WATL</Item>
				</Menu>
				<div id="content">
					<div id="centered">
						{self.state.primary == 'practice' && self.state.secondary == 'natf' && <NatfPractice />}
					</div>
				</div>
			</div>
		);
	}

	secondaryChange(name) {
		this.setState({"secondary": name})
	}
}

// Export the component
module.exports = Site;
