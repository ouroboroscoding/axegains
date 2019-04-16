/**
 * NATF Stats: Practice
 *
 * Fetchs and displays NATF stats for practices
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-15
 */

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');
var Tools = require('../../generic/tools.js');

// Site modules
var Utils = require('../../utils.js');

// Components
var Modal = require('../elements/modal.jsx');

// StatsPractice component
class StatsPractice extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"data": null,
			"all": false,
			"one": false,
			"thrower": props.thrower
		};

		// Bind methods
		this.one = this.one.bind(this);
		this.oneHide = this.oneHide.bind(this);
		this.all = this.all.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	all() {
		this.fetch(true);
	}

	componentWillMount() {

		// Track signin / signout
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);

		// If someone is logged in
		if(this.state.thrower) {

			// Fetch the practice stats
			this.fetch();
		}
	}

	componentWillUnmount() {

		// Stop tracking signin / signout
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);
	}

	fetch(all) {

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

	one(ev) {

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
					"one": res.data
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	oneHide() {
		this.setState({"practice_data": false});
	}

	render() {
		var practice = this.state.data;
		return <div />
/*		return (
			<div className="practice">
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
					{Tools.empty(practice.total) ?
						<tbody>
							<tr><td colSpan="9">No practices recorded</td></tr>
						</tbody>
					:
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
					}
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
			</div>
		);*/
	}

	signin(thrower) {

		// Set the thrower
		this.setState({"thrower": thrower});

		// Fetch the practice stats
		this.fetch();
	}

	signout() {
		this.setState({"thrower": false});
	}
}

// Export the component
module.exports = StatsPractice;
