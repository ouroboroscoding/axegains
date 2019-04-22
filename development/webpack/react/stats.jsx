/**
 * Stats
 *
 * Manages Org menu for stats and display the appropriate one based on what
 * is chosen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-26
 */

// Generic modules
var Hash = require('../generic/hash.js');

// Site components
var Natf = require('./natf/stats.jsx');
var Watl = require('./watl/stats.jsx');

// Stats component
class Stats extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"org": Hash.get('org', this.props.thrower.org || 'natf')
		};

		// Bind methods
		this.orgHash = this.orgHash.bind(this);
	}

	componentWillMount() {

		// Track any org hash change events
		Hash.watch('org', this.orgHash);
	}

	componentWillUnmount() {

		// Stop tracking any org hash change events
		Hash.unwatch('org', this.orgHash);
	}

	menuChange(org) {
		Hash.set('org', org);
	}

	orgHash(org) {
		if(org != this.state.org) {
			if(org == null) {
				org = this.props.thrower.org || 'natf';
			}
			this.setState({"org": org});
		}
	}

	render() {
		return (
			<div id="stats">
				<div>
					{this.state.org == 'natf' &&
						<Natf thrower={this.props.thrower} />
					}
					{this.state.org == 'watl' &&
						<Watl thrower={this.props.thrower} />
					}
				</div>
			</div>
		);
	}
}

// Export the component
module.exports = Stats;
