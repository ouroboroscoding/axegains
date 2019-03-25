// External modules
var React = require('react');

// Generic modules
var Events = require('../../generic/events.js');
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

		// Show the loader
		Events.trigger('loader', true);

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
			Events.trigger('loader', false);
		});
	}

	practiceStats() {

		// Save this
		var self = this;

		// Show the loader
		Events.trigger('loader', true);

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
			Events.trigger('loader', false);
		});
	}

	render() {
		var self = this;
		var practice = this.state.practice;
		return (
			<div className="natf">
				<div className="stats">
					{this.state.practice &&
						<div className="practice">
							<h2>Practice</h2>
							<table>
								<thead>
									<tr>
										<th rowSpan="2"> </th>
										<th rowSpan="2">Points</th>
										<th colSpan="2">Point Averages</th>
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
						</div>
					}
					{this.state.match &&
						<div className="match">

						</div>
					}
				</div>
			</div>
		);
	}
}

// Export the component
module.exports = Stats;
