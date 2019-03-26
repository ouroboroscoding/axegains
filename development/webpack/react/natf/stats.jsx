// External modules
var React = require('react');

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');

// Site modules
var Utils = require('../../utils.js');

// Stats component
class Stats extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"match": null,
			"practice": null
		};

		// Bind methods
		this.matchStats = this.matchStats.bind(this);
		this.practiceStats = this.practiceStats.bind(this);
	}

	componentWillMount() {

		// Fetch the practice stats
		this.practiceStats();

		// Fetch the match stats
		//this.matchStats();
	}

	matchStats() {

		// Save this
		var self = this;

		// Show the loader
		Loader.show();

		// Fetch the match stats
		Services.read('natf', 'match/stats', {}).done(res => {

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

				// Add the stats to the state
				this.setState({
					"match": res.data
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	practiceStats() {

		// Save this
		var self = this;

		// Show the loader
		Loader.show();

		// Fetch the practice stats
		Services.read('natf', 'practice/stats', {}).done(res => {

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

				// Add the stats to the state
				this.setState({
					"practice": res.data
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	render() {
		var self = this;
		var practice = this.state.practice;
		return (
			<div className="natf">
				{this.state.practice &&
					<React.Fragment>
						<h2>Practice</h2>
						<table>
							<thead>
								<tr>
									<th rowSpan="2"> </th>
									<th rowSpan="2">Points</th>
									<th rowSpan="2">Throws</th>
									<th colSpan="2">Average Points</th>
									<th colSpan="3">Hit Rates</th>
								</tr>
								<tr>
									<th>Total</th>
									<th>Target</th>
									<th>Total</th>
									<th>Target</th>
									<th>Clutch</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Overall</td>
									<td>{practice.total.points.total}</td>
									<td>{practice.total.throws.attempts}</td>
									<td>{practice.total.average.total}</td>
									<td>{practice.total.average.target}</td>
									<td>{practice.total.rate.total}%</td>
									<td>{practice.total.rate.target}%</td>
									<td>{practice.total.rate.clutch}%</td>
								</tr>
								{practice.last.map(function(o, i) {
									return (
										<tr key={i}>
											<td>{Utils.date(o._created)}</td>
											<td>{o.points.total}</td>
											<td>{o.throws.attempts}</td>
											<td>{o.average.total}</td>
											<td>{o.average.target}</td>
											<td>{o.rate.total}%</td>
											<td>{o.rate.target}%</td>
											<td>{o.rate.clutch}%</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</React.Fragment>
				}
				{this.state.match &&
					<React.Fragment>

					</React.Fragment>
				}
			</div>
		);
	}
}

// Export the component
module.exports = Stats;
