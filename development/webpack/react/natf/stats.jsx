/**
 * NATF Stats
 *
 * Fetchs and displays NATF stats for practice and matches
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-25
 */

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');
var Tools = require('../../generic/tools.js');

// Site modules
var Utils = require('../../utils.js');

// Components
var ChartPie = require('../elements/chartPie.jsx');
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
			"practice_data": false,
			"thrower": props.thrower
		};

		// Bind methods
		this.practiceData = this.practiceData.bind(this);
		this.practiceDataHide = this.practiceDataHide.bind(this);
		this.practiceStatsAll = this.practiceStatsAll.bind(this);
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);

		// Doughtnut settings
		this.ds_clutch = {
			"labels": ["Hits", "Misses", "Drops"],
			"colors": ["rgb(0,255,0,0.9)", "rgb(100,100,100,0.5)", "rgb(200,200,200,0.5)"]
		};
		this.ds_regular = {
			"labels": ["Fives", "Threes", "Ones", "Zeros", "Drops"],
			"colors": ["rgb(0,0,0,0.9)", "rgb(255,0,0,0.9)", "rgb(0,0,255,0.9)", "rgb(100,100,100,0.5)", "rgb(200,200,200,0.5)"]
		};
		this.ds_paint = {
			"labels": ["Hits", "Misses", "Drops"],
			"colors": ["rgb(0,0,0,0.9)", "rgb(100,100,100,0.5)", "rgb(200,200,200,0.5)"]
		}
	}

	componentWillMount() {

		// Track signin / signout
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);

		// If someone is logged in
		if(this.state.thrower) {

			// Fetch the practice stats
			this.practiceStats();

			// Fetch the match stats
			this.matchStats();
		}
	}

	componentWillUnmount() {

		// Stop tracking signin / signout
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);

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
		return (
			<div className="natf">
				{this.state.practice &&
					this.renderPractice()
				}
				<br />
				{this.state.match &&
					this.renderMatch()
				}
			</div>
		);
	}

	renderMatch() {
		var match = this.state.match;
		return (
			<div className="match">
				<h2>Matches - Regular</h2>
				<div className="mwl">
					<div>Matches</div>
					<div>Wins</div>
					<div>Losses</div>
				</div>
				<div className="mwl">
					<div>{match.matches}</div>
					<div className="win">{match.wins}</div>
					<div className="loss">{match.losses}</div>
				</div>
				<div className="esnu">
					<div>81s</div>
					<div>Supers</div>
					<div>Naturals</div>
					<div>Unnaturals</div>
				</div>
				<div className="esnu">
					<div>{match.eightyones}</div>
					<div>{match.supernaturals}</div>
					<div>{match.naturals}</div>
					<div>{match.unnaturals}</div>
				</div>
				<div className="throws">
					<div>Regular</div>
					<div>Clutches</div>
				</div>
				<div className="throws">
					<div>{match.regular.attempts}</div>
					<div>{match.clutches.attempts}</div>
				</div>
				<div className="throws">
					<div>
						<ChartPie height="150px" data={{
							"labels": this.ds_regular.labels,
							"datasets": [{
								"data":[match.regular.fives, match.regular.threes, match.regular.ones, match.regular.zeros, match.regular.drops],
								"backgroundColor": this.ds_regular.colors
							}]
						}} />
					</div>
					<div>
						<ChartPie height="150px" data={{
							"labels": this.ds_clutch.labels,
							"datasets": [{
								"data":[match.clutches.hits, (match.clutches.attempts - (match.clutches.hits + match.clutches.drops)), match.clutches.drops],
								"backgroundColor": this.ds_clutch.colors
							}]
						}} />
					</div>
				</div>

				<h2>Matches - Big Axe</h2>
				<div className="mwl">
					<div>Matches</div>
					<div>Wins</div>
					<div>Losses</div>
				</div>
				<div className="mwl">
					<div>{match.matches}</div>
					<div className="win">{match.bigaxe.wins}</div>
					<div className="loss">{match.bigaxe.losses}</div>
				</div>
				<div className="bigaxe">
					<div>Paint</div>
					<div>Regular</div>
					<div>Clutches</div>
				</div>
				<div className="bigaxe">
					<div>{match.bigaxe.paint.attempts}</div>
					<div>{match.bigaxe.points.regular.attempts}</div>
					<div>{match.bigaxe.points.clutches.attempts}</div>
				</div>
				<div className="bigaxe">
					<div>
						<ChartPie height="100px" data={{
							"labels": this.ds_paint.labels,
							"datasets": [{
								"data":[match.bigaxe.paint.hits, (match.bigaxe.paint.attempts - (match.bigaxe.paint.hits + match.bigaxe.paint.drops)), match.bigaxe.paint.drops],
								"backgroundColor": this.ds_paint.colors
							}]
						}} />
					</div>
					<div>
						<ChartPie height="100px" data={{
							"labels": this.ds_regular.labels,
							"datasets": [{
								"data":[match.bigaxe.points.regular.fives, match.bigaxe.points.regular.threes, match.bigaxe.points.regular.ones, match.bigaxe.points.regular.zeros, match.bigaxe.points.regular.drops],
								"backgroundColor": this.ds_regular.colors
							}]
						}} />
					</div>
					<div>
						<ChartPie height="100px" data={{
							"labels": this.ds_clutch.labels,
							"datasets": [{
								"data":[match.bigaxe.points.clutches.hits, (match.bigaxe.points.clutches.attempts - (match.bigaxe.points.clutches.hits + match.bigaxe.points.clutches.drops)), match.bigaxe.points.clutches.drops],
								"backgroundColor": this.ds_clutch.colors
							}]
						}} />
					</div>
				</div>
			</div>
		);
	}

	renderPractice() {
		var practice = this.state.practice;
		return (
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
		);
	}

	signin(thrower) {

		// Set the thrower
		this.setState({"thrower": thrower});

		// Fetch the practice stats
		this.practiceStats();

		// Fetch the match stats
		this.matchStats();
	}

	signout() {
		this.setState({"thrower": false});
	}
}

// Export the component
module.exports = Stats;
