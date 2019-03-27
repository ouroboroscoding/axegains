// External modules
var React = require('react');

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
	}

	add() {

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// Call the service to add the favourite
		Services.create('auth', 'favourite', {
			"id": this.state.thrower._id
		}).done(res => {

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	remove() {

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// Call the service to add the favourite
		Services.delete('auth', 'favourite', {
			"id": this.state.thrower._id
		}).done(res => {

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	render() {
		return (
			<tr>
				<td>{this.state.thrower.alias}</td>
				<td>
					{this.state.favourite ?
						<i className="fas fa-user-times" style={{color: "red"}} onClick={this.add}></i>
					:
						<i className="fas fa-user-plus" style={{color: "green"}} onClick={this.remove}></i>
					}
				</td>
			</tr>
		)
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
		};

		// Fetch the favourites
		this.favourites();

		// Bind methods
		this.favouriteShow = this.favouriteShow.bind(this);
		this.search = this.search.bind(this);
		this.searchShow = this.searchShow.bind(this);
	}

	favourites() {

		// Store this
		var self = this;

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
				self.setState({"favourites": res.data});
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
				{this.state.mode == 'favourites' ?
					<div className="acenter">
							<span>Favourites</span> |
							<span className="link" onClick={this.searchShow}>Search</span>
					</div>
				:
					<React.Fragment>
						<div className="acenter">
							<span className="link" onClick={this.favouriteShow}>Favourites</span> |
							<span>Search</span>
						</div>
						<InputEnter onEnter={this.search} />
					</React.Fragment>
				}
				<table>
					<thead>
						<tr><th>Alias</th><th>Favourite</th></tr>
					</thead>
					<tbody>
						{this.state.mode == 'favourites' ?
							this.state.favourites.map(function(t, i) {
								return <OpponentRow key={i} thrower={t} favourite={true} />
							})
						:
							this.state.search.map(function(t, i) {
								return <OpponentRow key={i} thrower={t} favourite={false} />
							})
						}
					</tbody>
				</table>
			</React.Fragment>
		);
	}

	search(q) {

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// Call the service to get the search results
		Services.read('auth', 'search', {
			"q": q
		}).done(res => {

		}).always(() => {
			// Hide the loader
			Loader.hide();
		})
	}

	searchShow() {
		this.setState({"mode": "search"})
	}

}

// Export the component
module.exports = Opponent;
