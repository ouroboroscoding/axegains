/**
 * WATL Stats
 *
 * Fetchs and displays WATL stats for practice and matches
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-18
 */

// Generic modules
var Events = require('../../generic/events.js');
var Hash = require('../../generic/hash.js');

// Generic components
var {Menu, Item} = require('../elements/menu.jsx');

// Stats components
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
	}

	componentWillMount() {

		// Track any which hash change events
		Hash.watch('which', this.whichChange);
	}

	componentWillUnmount() {

		// Stop tracking any which hash change events
		Hash.unwatch('which', this.whichChange);

		// Remove the which from the hash
		Hash.set('which', null);
	}

	whichChange(which) {
		Hash.set('which', which);
	}

	render() {
		var self = this;
		return (
			<React.Fragment>
				<Menu className="menu primary" selected={self.state.which} onChange={self.whichChange}>
					<Item name="practice">Practice</Item>
				</Menu>
				<div id="content">
					<div className="natf">
						{self.state.which == 'practice' &&
							<Practice thrower={self.props.thrower} />
						}
					</div>
				</div>
			</React.Fragment>
		);
	}

	whichChange(which) {
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
