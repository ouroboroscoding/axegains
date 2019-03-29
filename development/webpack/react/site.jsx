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
var Match = require('./match.jsx');
var Practice = require('./practice.jsx');
var Stats = require('./stats.jsx');

// Site component
class Site extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Init the hash module and watch for page changes
		Hash.init();
		Hash.watch('page', this.hashChange.bind(this))

		// Track any signin/signout events
		Events.add('signin', this.signin.bind(this));
		Events.add('signout', this.signout.bind(this));

		// Initialise the state
		this.state = {
			"page": Hash.get('page', 'games'),
			"thrower": props.thrower ? props.thrower : false
		};

		// Bind methods
		this.pageChange = this.pageChange.bind(this);
	}

	hashChange(page) {
		// If the page has changed
		if(page != this.state.page) {
			this.setState({"page": page})
			this.refs.menu.selected = page;
		}
	}

	pageChange(name) {
		Hash.set("page", name);
	}

	render() {
		var self = this;

		// Stupid react
		var items = [
			/*<Item key={0} name="games">Games</Item>,*/
			<Item key={1} name="practice">Practice</Item>
		];
		if(this.state.thrower) {
			//items.push(<Item key={2} name="match">Match</Item>);
			//items.push(<Item key={3} name="league">League</Item>);
			items.push(<Item key={4} name="stats">Stats</Item>);
		}

		return (
			<div id="site">
				<Header thrower={self.state.thrower} />
				<Menu ref="menu" className="menu primary" selected={self.state.page} onChange={self.pageChange}>
					{items}
				</Menu>
				{self.state.page == 'practice' &&
					<Practice thrower={self.state.thrower} />
				}
				{self.state.page == 'match' &&
					<Match thrower={self.state.thrower} />
				}
				{self.state.page == 'stats' &&
					<Stats />
				}
				<Messages />
			</div>
		);
	}

	signin() {
		this.setState({"thrower": true});
	}

	signout() {

		// If the page needs to be signed in
		if(['games', 'practice'].indexOf(this.state.page) == -1) {
			Hash.set('page', 'games');
		}

		// Remove the thrower flag
		this.setState({"thrower": false});
	}
}

// Export the component
module.exports = Site;
