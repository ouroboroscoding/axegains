/**
 * Match
 *
 * Manages Org menu for matches and display the appropriate one based on what
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
var Natf = require('./natf/match.jsx');

// Match component
class Match extends React.Component {

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
		var self = this;
		return (
			<div id="match">
				<Menu className="menu secondary" selected={self.state.org} onChange={self.menuChange}>
					<Item name="natf">NATF</Item>
				</Menu>
				<div id="content">
					<div>
						{self.state.org == 'natf' &&
							<Natf thrower={this.props.thrower} />
						}
					</div>
				</div>
			</div>
		);
	}
}

// Export the component
module.exports = Match;
