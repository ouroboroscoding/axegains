/**
 * Menu
 *
 * Manages menu options
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-21
 */

// Generic modules
var Events = require('../generic/events.js');
var Hash = require('../generic/hash.js');
var Tools = require('../generic/tools.js');

// Menu component
class Menu extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// If there's no close
		if(!this.props.onChange) {
			throw 'Menu requires onChange callback';
		}

		// Initialise the state
		this.state = {
			"location": this.props.location,
			"open": false,
			"thrower": this.props.thrower
		};

		// Bind methods
		this.click = this.click.bind(this);
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	componentDidUpdate(prevProps) {
		if(prevProps.location != this.props.location) {
			this.setState({location: this.props.location});
		}
	}

	close(ev) {
		if(!this.ref.dropdown.contains(ev.target)) {
			this.setState({"open": false}, function() {
				document.removeEventListener('click', this.close);
			});
		}
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

	generateDropDown(items, offset) {

		// If the offset isn't set
		if(typeof offset == 'undefined') {
			offset = 0;
		}

		// Init the return elements
		var ret = [];

		// Go through every item
		for(var i = 0; i < items.length; ++i) {

			// If the item has items, it's a title
			if(items[i].items) {
				ret.push(
					<div className="title">
						<span>{items[i].title}</span>
						{this.generateDropDown(items[i].items)}
					</div>
				);
			}

			// Else it's a link
			else {
				ret.push(<div className="link" onClick={this.click}>{items[i].title})
			}
		}
	}

	generateTitle(location, items) {

		// Find the item
		var item = Tools.afindo(items, 'key', location[0]);

		// Get the title
		var title = item.title;

		// If it's the last location
		if(location.length == 1) {
			return title;
		} else {
			return title + ' > ' + this.generateTitle(
				location.slice(1),
				item.items
			);
		}
	}

	open(ev) {
		this.setState({"open": true}, function() {
			document.addEventListener('click', this.close);
		})
	}

	render() {

		// Generate the location string
		var title = this.generateTitle(this.state.location. this.props.items);

		return (
			<div />
		);
	}

	signin(thrower) {
		this.setState({"thrower": thrower});
	}

	signout() {
		this.setState({"thrower": false});
	}
}

// Export the component
module.exports = Menu;
