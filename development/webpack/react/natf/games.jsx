/**
 * IATF Games
 *
 * Fetchs and displays IATF games
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-23
 */

// Generic modules
var Events = require('../../generic/events.js');
var Hash = require('../../generic/hash.js');

// Games components
var ATW = require('./gamesATW.jsx');

// Games component
class Games extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"which": Hash.get('which', 'atw')
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
			<React.Fragment>
				<div id="content">
					<div className="iatf">
						{self.state.which == 'atw' &&
							<ATW thrower={self.props.thrower} />
						}
					</div>
				</div>
			</React.Fragment>
		);
	}

	whichHash(which) {
		if(which != this.state.which) {
			if(which == null) {
				which = 'atw';
			}
			this.setState({"which": which});
		}
	}
}

// Export the component
module.exports = Games;
