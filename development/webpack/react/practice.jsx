/**
 * Pracitce
 *
 * Manages Org menu for practice and display the appropriate one based on what
 * is chosen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-26
 */

// Generic modules
var Events = require('../generic/events.js');
var Hash = require('../generic/hash.js');

// Generic components
var {Menu, Item} = require('./elements/menu.jsx');

// Site components
var Natf = require('./natf/practice.jsx');
var Watl = require('./watl/practice.jsx');

// Practice component
class Practice extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"org": Hash.get('org', 'natf')
		};

		// Bind methods
		this.orgChange = this.orgChange.bind(this);
	}

	componentWillMount() {

		// Track any org hash change events
		Hash.watch('org', this.orgChange);
	}

	componentWillUnmount() {

		// Stop tracking any org hash change events
		Hash.unwatch('org', this.orgChange);

		// Remove the org from the hash
		Hash.set('org', null);
	}

	menuChange(org) {
		Hash.set('org', org);
	}

	orgChange(org) {
		if(org != this.state.org) {
			if(org == null) {
				org = 'natf';
			}
			this.setState({"org": org});
		}
	}

	render() {
		return (
			<div id="practice">
				<Menu className="menu secondary" selected={this.state.org} onChange={this.menuChange}>
					<Item name="natf">NATF</Item>
					<Item name="watl">WATL</Item>
				</Menu>
				<div id="content">
					<div>
						{this.state.org == 'natf' &&
							<Natf thrower={this.props.thrower} />
						}
						{this.state.org == 'watl' &&
							<Watl thrower={this.props.thrower} />
						}
					</div>
				</div>
			</div>
		);
	}
}

// Export the component
module.exports = Practice;
