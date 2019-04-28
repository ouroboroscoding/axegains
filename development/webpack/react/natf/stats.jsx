/**
 * NATF Stats
 *
 * Fetchs and displays NATF stats for practice and matches
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-25
 */

// Generic modules
var Events = require('../../generic/events.js');
var Hash = require('../../generic/hash.js');

// Generic components
var {Menu, Item} = require('../elements/menu.jsx');

// Stats components
var Match = require('./statsMatch.jsx');
var Practice = require('./statsPractice.jsx');

// Stats component
class Stats extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"which": Hash.get('which', 'practice')
		};

		// Bind methods
		this.whichChange = this.whichChange.bind(this);
		this.whichHash = this.whichHash.bind(this);
	}

	componentWillMount() {

		// Track any which hash change events
		Hash.watch('which', this.whichHash);
	}

	componentWillUnmount() {

		// Stop tracking any which hash change events
		Hash.unwatch('which', this.whichHash);

		// Remove the which from the hash
		Hash.set('which', null);
	}

	render() {
		var self = this;
		return (
			<React.Fragment>
				<Menu className="menu secondary" selected={self.state.which} onChange={self.whichChange}>
					<Item name="practice">Practice</Item>
					<Item name="match">Matches</Item>
				</Menu>
				<div id="content">
					<div className="natf">
						{self.state.which == 'practice' &&
							<Practice thrower={self.props.thrower} />
						}
						{self.state.which == 'match' &&
							<Match thrower={self.props.thrower} />
						}
					</div>
				</div>
			</React.Fragment>
		);
	}

	whichChange(which) {
		Hash.set('which', which);
	}

	whichHash(which) {
		if(which != this.state.which) {
			if(which == null) {
				which = 'practice';
			}
			this.setState({"which": which});
		}
	}
}

// Export the component
module.exports = Stats;
