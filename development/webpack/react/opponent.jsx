/**
 * Opponent
 *
 * A component for selecting an opponent via favourites or search
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-27
 */

// Generic modules
var Events = require('../generic/events.js');
var Loader = require('../generic/loader.js');
var Services = require('../generic/services.js');

// Site modules
var Utils = require('../utils.js');

// Elements
var InputEnter = require("./elements/inputEnter.jsx");

// Sort favourites
function aliasSort(a, b) {
	return a.alias.localeCompare(b.alias);
}

class OpponentRow extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"favourite": props.favourite,
			"thrower": props.thrower
		}

		// Bind method
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
		this.selected = this.selected.bind(this);
	}

	componentDidUpdate(prevProps) {
		if(prevProps.thrower._id != this.props.thrower._id) {
			this.setState({
				"favourite": this.props.favourite,
				"thrower": this.props.thrower
			})
		}
	}

	add(ev) {

		// Stop any further events
		ev.stopPropagation();

		// Show the loader
		Loader.show();

		// Call the service to add the favourite
		Services.create('auth', 'favourite', {
			"id": this.state.thrower._id
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				Events.trigger('error', JSON.stringify(res.error));
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {
				this.setState({"favourite": true});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	remove(ev) {

		// Stop any further events
		ev.stopPropagation();

		// Show the loader
		Loader.show();

		// Call the service to add the favourite
		Services.delete('auth', 'favourite', {
			"id": this.state.thrower._id
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				Events.trigger('error', JSON.stringify(res.error));
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {
				this.setState({"favourite": false});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	render() {
		return (
			<tr onClick={this.selected}>
				<td>{this.state.thrower.alias}</td>
				<td>
					{this.state.favourite ?
						<i className="fas fa-user-times" style={{color: "red"}} onClick={this.remove}></i>
					:
						<i className="fas fa-user-plus" style={{color: "green"}} onClick={this.add}></i>
					}
				</td>
			</tr>
		)
	}

	selected(ev) {
		ev.stopPropagation();
		this.props.selected(this.state.thrower);
	}
}

// Opponent Component
class Opponent extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"favourites": [],
			"mode": "favourites",
			"search": [],
			"thrower": props.thrower
		};

		// Bind methods
		this.favouriteShow = this.favouriteShow.bind(this);
		this.search = this.search.bind(this);
		this.searchShow = this.searchShow.bind(this);
		this.selected = this.selected.bind(this);
		this.signin = this.signin.bind(this);
	}

	componentWillMount() {
		Events.add('signin', this.signin);

		// If someone is logged in
		if(this.state.thrower) {
			this.favourites();
		}
	}

	componentWillUnmount() {
		Events.remove('signin', this.signin);
	}

	favourites() {

		// Show the loader
		Loader.show();

		// Call the service to get the favourites
		Services.read('auth', 'favourites', {}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				Events.trigger('error', JSON.stringify(res.error));
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {

				// Sort the data
				res.data.sort(aliasSort);

				// Store the favourites
				this.setState({"favourites": res.data});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	favouriteShow() {
		this.setState({"mode": "favourites"})
	}

	render() {
		var self = this;
		return (
			<React.Fragment>
				{self.state.mode == 'favourites' ?
					<div className="acenter">
							<span>Favorites</span> | <span className="link" onClick={self.searchShow}>Search</span>
					</div>
				:
					<React.Fragment>
						<div className="acenter">
							<span className="link" onClick={self.favouriteShow}>Favorites</span> | <span>Search</span>
						</div>
						<div className="form">
							<p><InputEnter onEnter={self.search} placeholder="Search by alias" /></p>
						</div>
					</React.Fragment>
				}
				<table>
					<thead>
						<tr><th>Alias</th><th>Favorite</th></tr>
					</thead>
					<tbody>
						{self.state.mode == 'favourites' ?
							self.state.favourites.map(function(t, i) {
								return <OpponentRow key={i} thrower={t} favourite={true} selected={self.selected} />
							})
						:
							self.state.search.map(function(t, i) {
								return <OpponentRow key={i} thrower={t} favourite={false} selected={self.selected} />
							})
						}
					</tbody>
				</table>
			</React.Fragment>
		);
	}

	search(q) {

		// If there's no query, do nothing
		if(q.length == 0) {
			return;
		}

		// Show the loader
		Loader.show();

		// Call the service to get the search results
		Services.read('auth', 'search', {
			"q": q
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				Events.trigger('error', JSON.stringify(res.error));
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {

				// Sort the data
				res.data.sort(aliasSort);

				// Store the favourites
				this.setState({"search": res.data});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		})
	}

	searchShow() {
		this.setState({"mode": "search"})
	}

	selected(thrower) {
		if(typeof this.props.onSelect == 'function') {
			this.props.onSelect(thrower);
		}
	}

	signin(thrower) {
		this.favourites();
	}
}

// Export the component
module.exports = Opponent;
