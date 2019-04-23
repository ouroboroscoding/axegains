/**
 * NATF Games
 *
 * Fetchs and displays NATF games
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-23
 */

// Generic modules
var Events = require('../../generic/events.js');
var Hash = require('../../generic/hash.js');

// Generic components
var {Menu, Item} = require('../elements/menu.jsx');

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
				<Menu className="menu secondary" selected={self.state.which} onChange={self.whichChange}>
					<Item name="atw">Around The World</Item>
				</Menu>
				<div id="content">
					<div className="natf">
						{self.state.which == 'atw' &&
							<ATW thrower={self.props.thrower} />
						}
					</div>
				</div>
			</React.Fragment>
		);
	}

	whichChange(which) {
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
