// External modules
var React = require('react');

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');

// Site modules
var Utils = require('../../utils.js');

// Components
var Modal = require('../elements/modal.jsx');

// Stats component
class Stats extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"match": null,
			"practice": null,
			"practice_all": false,
			"practice_data": false
		};

		// Bind methods
		this.matchStats = this.matchStats.bind(this);
		this.practiceData = this.practiceData.bind(this);
		this.practiceDataHide = this.practiceDataHide.bind(this);
		this.practiceStats = this.practiceStats.bind(this);
		this.practiceStatsAll = this.practiceStatsAll.bind(this);
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

	practiceData(ev) {

		// Save this
		var self = this;

		// Show the loader
		Loader.show();

		// Fetch the practice data
		Services.read('natf', 'practice/data', {
			"id": ev.currentTarget.dataset.id
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

				// Add the stats to the state
				this.setState({
					"practice_data": res.data
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	practiceDataHide() {
		this.setState({"practice_data": false});
	}

	practiceStats(all) {

		// If All is not passed
		if(typeof all == 'undefined') {
			all = false
		}

		// Save this
		var self = this;

		// Show the loader
		Loader.show();

		// Fetch the practice stats
		Services.read('natf', 'practice/stats', {
			"all": all
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

				// Add the stats to the state
				this.setState({
					"practice": res.data,
					"practice_all": all
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	practiceStatsAll() {
		this.practiceStats(true);
	}

	render() {
		var self = this;
		var practice = this.state.practice;
		return (
			<div className="natf">
				{this.state.practice &&
					<React.Fragment>
						<h2>Practice</h2>
						<table className="practice">
							<thead>
								<tr>
									<th rowSpan="2" className="date"> </th>
									<th rowSpan="2" className="points">Points</th>
									<th rowSpan="2" className="throws">Throws</th>
									<th rowSpan="2" className="drops">Drops</th>
									<th colSpan="2">Average Points</th>
									<th colSpan="3">Hit Rates</th>
								</tr>
								<tr>
									<th className="average">Total</th>
									<th className="average">Target</th>
									<th className="rate">Total</th>
									<th className="rate">Target</th>
									<th className="rate">Clutch</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Overall</td>
									<td>{practice.total.points.total}</td>
									<td>{practice.total.throws.attempts}</td>
									<td>{practice.total.throws.drops}</td>
									<td>{practice.total.average.total}</td>
									<td>{practice.total.average.target}</td>
									<td>{practice.total.rate.total}%</td>
									<td>{practice.total.rate.target}%</td>
									<td>{practice.total.rate.clutch}%</td>
								</tr>
								{practice.last.map(function(o, i) {
									return (
										<tr key={i} data-id={o._id} className="session" onClick={self.practiceData}>
											<td>{Utils.date(o._created)}</td>
											<td>{o.points.total}</td>
											<td>{o.throws.attempts}</td>
											<td>{o.throws.drops}</td>
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
						{!this.state.practice_all &&
							<p className="link" onClick={this.practiceStatsAll}>Fetch All</p>
						}
						{this.state.practice_data &&
							<Modal
								title="Practice Data"
								close={self.practiceDataHide}
							>
								<div className="allPoints">
									{self.state.practice_data.map(function(p, i) {
										return <span key={i} className={p[0] ? 'clutch':''}>{"" + p[1]}</span>
									})}
								</div>
							</Modal>
						}
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
