/**
 * IATF Stats
 *
 * Fetchs and displays IATF stats for practice and matches
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-25
 */

// Generic modules
var Events = require('../../generic/events.js');
var Hash = require('../../generic/hash.js');

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
		this.whichHash = this.whichHash.bind(this);
	}

	componentWillMount() {

		// Track any which hash change events
		Hash.watch('which', this.whichHash);
	}

	componentWillUnmount() {

		// Stop tracking any which hash change events
		Hash.unwatch('which', this.whichHash);
	}

	render() {
		var self = this;
		return (
			<div className="iatf">
				{self.state.which == 'practice' &&
					<Practice thrower={self.props.thrower} />
				}
				{self.state.which == 'match' &&
					<Match thrower={self.props.thrower} />
				}
			</div>
		);
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
