/**
 * Site
 *
 * Primary component for the entire site
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-20
 */

// Generic modules
var Events = require('../generic/events.js');
var Hash = require('../generic/hash.js');

// Generic components
var {Menu, Item} = require('./elements/menu.jsx');
var Messages = require('./elements/messages.jsx');
var Popups = require ('./elements/popups.jsx');

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
			"page": Hash.get('page', 'home'),
			"thrower": false
		};

		// Bind methods
		this.pageChange = this.pageChange.bind(this);
	}

	hashChange(page) {
		// If the page has changed
		if(page != this.state.page) {
			this.setState({"page": page ? page : "home"})
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
			items.push(<Item key={2} name="match">Match</Item>);
			//items.push(<Item key={3} name="league">League</Item>);
			items.push(<Item key={4} name="stats">Stats</Item>);
		}

		return (
			<div id="site">
				<Header />
				<Menu ref="menu" className="menu primary" selected={self.state.page} onChange={self.pageChange}>
					{items}
				</Menu>
				{self.state.page == 'home' &&
					<div className="content">
						<div>
							<dl id="home">
								<dt>v1.5.0</dt>
								<dd>
									<ul className="fa-ul">
										<li><i className="fa-li fas fa-angle-double-right"></i>Big axe mode now available in NATF practice.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>Can now create custom practice sessions in NATF. Click on <i className="fas fa-user color-five"></i> to create your own.</li>
									</ul>
								</dd>
								<dt>v1.4.0</dt>
								<dd>
									<ul className="fa-ul">
										<li><i className="fa-li fas fa-angle-double-right"></i>Now storing overall NATF practice stats instead of generating them every time. Stats page loads faster.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>Started generating stats for NATF matches. Takes about a minute after a match is finished to update.</li>
									</ul>
								</dd>
								<dt>v1.3.0</dt>
								<dd>
									<ul className="fa-ul">
										<li><i className="fa-li fas fa-angle-double-right"></i>Added "Forgot Password" link on sign in window. Please note, you can not change your password in this way if you do not have an e-mail address associated with your account.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>Account icon (<i className="fas fa-user color-five"></i>) now works and through it you can change your alias, your e-mail, and your password.</li>
									</ul>
								</dd>
								<dt>v1.2.0</dt>
								<dd>
									<ul className="fa-ul">
										<li><i className="fa-li fas fa-angle-double-right"></i>NATF Matches now available. Find other signed up throwers and challenge them to a 3 game match.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>Throwers can be added to your favorites list for easy match starting by clicking on the green icon beside their name.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>Match stats are not yet available, but fear not, the stats will not be lost, and any matches played now will still show up in stats once the feature is completed.</li>
									</ul>
								</dd>
								<dt>v1.1.0</dt>
								<dd>
									<ul className="fa-ul">
										<li><i className="fa-li fas fa-angle-double-right"></i>Can now fetch all practice stats instead of just the last five.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>Clicking on any row in stats will bring up all throws in that practice session.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>Fixed a bug that didn't allow you to sign up with an e-mail.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>Fixed a bug that caused sign in not to be recognised after sign up.</li>
									</ul>
								</dd>
								<dt>v1.0.0</dt>
								<dd>
									<ul className="fa-ul">
										<li><i className="fa-li fas fa-angle-double-right"></i>NATF practice is available, no sign in required.</li>
										<li><i className="fa-li fas fa-angle-double-right"></i>With an account you can save your practice session and keep track of your over all progress in the Stats menu.</li>
									</ul>
								</dd>
							</dl>
						</div>
					</div>
				}
				{self.state.page == 'practice' &&
					<Practice thrower={self.state.thrower} />
				}
				{self.state.page == 'match' &&
					<Match thrower={self.state.thrower} />
				}
				{self.state.page == 'stats' &&
					<Stats thrower={self.state.thrower} />
				}
				<Popups />
				<Messages />
			</div>
		);
	}

	signin(thrower) {
		this.setState({"thrower": thrower});
	}

	signout() {

		// If the page needs to be signed in
		if(['practice'].indexOf(this.state.page) == -1) {
			Hash.set('page', null);
		}

		// Remove the thrower flag
		this.setState({"thrower": false});
	}
}

// Export the component
module.exports = Site;
