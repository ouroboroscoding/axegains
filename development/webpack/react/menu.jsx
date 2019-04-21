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
var Hash = require('../generic/hash.js');

// Menu component
class Menu extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"org": Hash.get('org', props.thrower.org || 'natf'),
			"page": Hash.get('page', 'practice')
		};

		// Bind methods
		this.close = this.close.bind(this);
		this.orgHash = this.orgHash.bind(this);
		this.pageHash = this.pageHash.bind(this);

		// key to title
		this.ktt = {
			"natf": "NATF",
			"watl": "WATL",
			"practice": "Practice",
			"match": "Match",
			"stats": "Stats"
		}
	}

	close(ev) {
		if(!this.ref.dropdown.contains(ev.target)) {
			this.setState({"dropdown": false}, function() {
				document.removeEventListener('click', this.close);
			});
		}
	}

	componentWillMount() {

		// Track any org or page changes in the Hash
		Hash.track('org', this.orgHash);
		Hash.track('page', this.pageHash);
	}

	componentWillUnmount() {

		// Stop tracking any org or page changes in the Hash
		Hash.untrack('org', this.orgHash);
		Hash.untrack('page', this.pageHash);
	}

	orgHash(org) {
		if(org != this.state.org) {
			this.setState({"org": org});
		}
	}

	orgShow(ev) {

	}

	pageHash(page) {
		if(page != this.state.page) {
			this.setState({"page": page});
		}
	}

	pageShow(ev) {

	}

	render() {
		return (
			<div id="menu">
				<span className="item" onClick={this.orgShow}>{this.ktt[this.state.org]}</span>
				<span className="item" onClick={this.pageShow}>{this.ktt[this.state.page]}</span>
			</div>
		);
	}
}

// Export the component
module.exports = Menu;
