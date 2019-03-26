// External modules
var React = require('react');

// Generic modules
var Events = require('../generic/events.js');
var Hash = require('../generic/hash.js');

// Generic components
var {Menu, Item} = require('./elements/menu.jsx');
var Messages = require ('./elements/messages.jsx');

// Site components
var Header = require('./header.jsx');
var Practice = require('./practice.jsx');

// Site component
class Site extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Init the hash module and watch for page changes
		Hash.init();
		Hash.watch('page', this.hashChange.bind(this))

		// Initialise the state
		this.state = {
			"page": Hash.get('page', 'practice'),
			"thrower": props.thrower ? props.thrower : false
		};

		// Bind methods
		this.pageChange = this.pageChange.bind(this);
	}

	hashChange(page) {
		// If the page has changed
		if(page != this.state.page) {
			this.setState({"page": page})
		}
	}

	pageChange(name) {
		Hash.set("page", name);
	}

	render() {
		var self = this;

		// Stupid react
		var items = [
			<Item key={0} name="games">Games</Item>,
			<Item key={1} name="practice">Practice</Item>
		];
		if(this.state.thrower) {
			items.push(<Item key={2} name="match">Match</Item>);
			items.push(<Item key={3} name="league">League</Item>);
			items.push(<Item key={4} name="stats">Stats</Item>);
		}

		return (
			<div id="site">
				<Header thrower={self.state.thrower} />
				<Menu className="menu primary" selected={self.state.page} onChange={self.pageChange}>
					{items}
				</Menu>
				{self.state.page == 'practice' &&
					<Practice thrower={self.state.thrower} />
				}
				<Messages />
			</div>
		);
	}
}

// Export the component
module.exports = Site;
