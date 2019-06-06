/**
 * WATL Stats: Practice
 *
 * Fetchs and displays WATL stats for practices
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-18
 */

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');
var Tools = require('../../generic/tools.js');

// Site modules
var Utils = require('../../utils.js');

// Generic Components
var Graph = require('../generic/graph.jsx');
var Modal = require('../generic/modal.jsx');

// Components
var PieKillshot = require('./pieKillshot.jsx');
var PieRegular = require('./pieRegular.jsx');

// Practice component
class Practice extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);
	}

	render() {
		var self = this;
		var data = this.props.data;
		return (
			<React.Fragment>
				<div className="allPoints">
					{data.data.map(function(p, i) {
						return <span key={i} className={p.killshot != '0' ? 'killshot' : ''}>{"" + p.value}</span>
					})}
				</div>
				<br />

				<div className="throws">
					<div>Regular</div>
					<div>Killshot L</div>
					<div>Killshot R</div>
				</div>
				<div className="throws">
					<div>{data.stats.regular.attempts}</div>
					<div>{data.stats.ksLeft.attempts}</div>
					<div>{data.stats.ksRight.attempts}</div>
				</div>
				<div className="throws">
					<div>
						<PieRegular
							height="150px"
							data={[data.stats.regular.sixes, data.stats.regular.fours, data.stats.regular.threes, data.stats.regular.twos, data.stats.regular.ones, data.stats.regular.zeros, data.stats.regular.drops]}
						/>
					</div>
					<div>
						<PieKillshot
							height="150px"
							data={[data.stats.ksLeft.hits, (data.stats.ksLeft.attempts - (data.stats.ksLeft.hits + data.stats.ksLeft.drops)), data.stats.ksLeft.drops]}
						/>
					</div>
					<div>
						<PieKillshot
							height="150px"
							data={[data.stats.ksRight.hits, (data.stats.ksRight.attempts - (data.stats.ksRight.hits + data.stats.ksRight.drops)), data.stats.ksRight.drops]}
						/>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

// StatsPractice component
class StatsPractice extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"all": false,
			"graphs": false,
			"one": false,
			"overall": null,
			"practices": [],
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

		// Show the loader
		Loader.show();

		// Fetch the practice stats
		Services.read('watl', 'practice/stats', {
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
					"graphs": this.processGraphs(res.data.graphs),
					"overall": res.data.overall,
					"practices": res.data.practices
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	one(ev) {

		// Get the ID
		var id = ev.currentTarget.value;

		// If it's -1, do nothing
		if(id == '-1') {
			return;
		}

		// Show the loader
		Loader.show();

		// Fetch the practice data
		Services.read('watl', 'practice/data', {
			"id": id
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
		this.setState({"one": false});
	}

	processGraphs(data) {

		// Init the return data
		var ret = {
			"ksLeft": {
				"labels": [],
				"datasets": [
					{"label": "Hits", "data": [], "fill": false, "borderColor": "rgb(0,0,255,0.9)", "lineTension": 0.1},
					{"label": "Misses", "data": [], "fill": false, "borderColor": "rgb(100,100,100,0.5)", "lineTension": 0.1},
					{"label": "Drops", "data": [], "fill": false, "borderColor": "rgb(200,200,200,0.5)", "lineTension": 0.1},
				]
			},
			"ksRight": {
				"labels": [],
				"datasets": [
					{"label": "Hits", "data": [], "fill": false, "borderColor": "rgb(0,0,255,0.9)", "lineTension": 0.1},
					{"label": "Misses", "data": [], "fill": false, "borderColor": "rgb(100,100,100,0.5)", "lineTension": 0.1},
					{"label": "Drops", "data": [], "fill": false, "borderColor": "rgb(200,200,200,0.5)", "lineTension": 0.1},
				]
			},
			"regular": {
				"labels": [],
				"datasets": [
					{"label": "Sixes", "data": [], "fill": false, "borderColor": "rgb(255,0,0,0.9)", "lineTension": 0.1},
					{"label": "Fours", "data": [], "fill": false, "borderColor": "rgb(30,30,30,0.9)", "lineTension": 0.1},
					{"label": "Threes", "data": [], "fill": false, "borderColor": "rgb(60,60,60,0.9)", "lineTension": 0.1},
					{"label": "Twos", "data": [], "fill": false, "borderColor": "rgb(90,90,90,0.9)", "lineTension": 0.1},
					{"label": "Ones", "data": [], "fill": false, "borderColor": "rgb(120,120,120,0.9)", "lineTension": 0.1},
					{"label": "Zeros", "data": [], "fill": false, "borderColor": "rgb(150,150,150,0.5)", "lineTension": 0.1},
					{"label": "Drops", "data": [], "fill": false, "borderColor": "rgb(200,200,200,0.5)", "lineTension": 0.1},
				]
			}
		}

		// Go through each set of stats backwards
		for(var i = data.length-1; i >= 0; --i) {

			// Add the labels
			var ts = Utils.date(data[i]._created);
			ret.regular.labels.push(ts);
			ret.ksLeft.labels.push(ts);
			ret.ksRight.labels.push(ts);

			// Calculate the target percentages
			if(data[i].stats.regular.attempts == 0) {
				ret.regular.datasets[0].data.push(0.0);
				ret.regular.datasets[1].data.push(0.0);
				ret.regular.datasets[2].data.push(0.0);
				ret.regular.datasets[3].data.push(0.0);
				ret.regular.datasets[4].data.push(0.0);
				ret.regular.datasets[5].data.push(0.0);
				ret.regular.datasets[6].data.push(0.0);
			} else {
				ret.regular.datasets[0].data.push(((data[i].stats.regular.sixes / data[i].stats.regular.attempts) * 100.0).toFixed(1));
				ret.regular.datasets[1].data.push(((data[i].stats.regular.fours / data[i].stats.regular.attempts) * 100.0).toFixed(1));
				ret.regular.datasets[2].data.push(((data[i].stats.regular.threes / data[i].stats.regular.attempts) * 100.0).toFixed(1));
				ret.regular.datasets[3].data.push(((data[i].stats.regular.twos / data[i].stats.regular.attempts) * 100.0).toFixed(1));
				ret.regular.datasets[4].data.push(((data[i].stats.regular.ones / data[i].stats.regular.attempts) * 100.0).toFixed(1));
				ret.regular.datasets[3].data.push(((data[i].stats.regular.zeros / data[i].stats.regular.attempts) * 100.0).toFixed(1));
				ret.regular.datasets[4].data.push(((data[i].stats.regular.drops / data[i].stats.regular.attempts) * 100.0).toFixed(1));
			}

			// Calculate the killshot left percentages
			if(data[i].stats.ksLeft.attempts == 0) {
				ret.ksLeft.datasets[0].data.push(0.0);
				ret.ksLeft.datasets[1].data.push(0.0);
				ret.ksLeft.datasets[2].data.push(0.0);
			} else {
				ret.ksLeft.datasets[0].data.push(((data[i].stats.ksLeft.hits / data[i].stats.ksLeft.attempts) * 100.0).toFixed(1));
				ret.ksLeft.datasets[1].data.push((((data[i].stats.ksLeft.attempts - (data[i].stats.ksLeft.drops + data[i].stats.ksLeft.hits)) / data[i].stats.ksLeft.attempts) * 100.0).toFixed(1));
				ret.ksLeft.datasets[2].data.push(((data[i].stats.ksLeft.drops / data[i].stats.ksLeft.attempts) * 100.0).toFixed(1));
			}

			// Calculate the killshot right percentages
			if(data[i].stats.ksRight.attempts == 0) {
				ret.ksRight.datasets[0].data.push(0.0);
				ret.ksRight.datasets[1].data.push(0.0);
				ret.ksRight.datasets[2].data.push(0.0);
			} else {
				ret.ksRight.datasets[0].data.push(((data[i].stats.ksRight.hits / data[i].stats.ksRight.attempts) * 100.0).toFixed(1));
				ret.ksRight.datasets[1].data.push((((data[i].stats.ksRight.attempts - (data[i].stats.ksRight.drops + data[i].stats.ksRight.hits)) / data[i].stats.ksRight.attempts) * 100.0).toFixed(1));
				ret.ksRight.datasets[2].data.push(((data[i].stats.ksRight.drops / data[i].stats.ksRight.attempts) * 100.0).toFixed(1));
			}
		}

		// Return the processed data
		return ret;
	}

	render() {
		var overall = this.state.overall;

		// If there's data
		if(overall) {
			return (
				<div className="practice">

					<h2>View Specific Practice</h2>
					<div className="gap large">
						<p><select onChange={this.one}>
							<option value="-1">Select a Practice</option>
							{this.state.practices.map(function(p, i) {
								return <option value={p['_id']}>{Utils.datetime(p['_created'])}</option>
							})}
						</select></p>
					</div>

					<div className="throws">
						<div>Regular</div>
						<div>Left KS</div>
						<div>Right KS</div>
					</div>
					<div className="throws">
						<div>{overall.regular.attempts}</div>
						<div>{overall.ksLeft.attempts}</div>
						<div>{overall.ksRight.attempts}</div>
					</div>
					<div className="throws">
						<div>
							<PieRegular
								height="150px"
								data={[overall.regular.sixes, overall.regular.fours, overall.regular.threes, overall.regular.twos, overall.regular.ones, overall.regular.zeros, overall.regular.drops]}
							/>
						</div>
						<div>
							<PieKillshot
								height="150px"
								data={[overall.ksLeft.hits, (overall.ksLeft.attempts - (overall.ksLeft.hits + overall.ksLeft.drops)), overall.ksLeft.drops]}
							/>
						</div>
						<div>
							<PieKillshot
								height="150px"
								data={[overall.ksRight.hits, (overall.ksRight.attempts - (overall.ksRight.hits + overall.ksRight.drops)), overall.ksRight.drops]}
							/>
						</div>
					</div>
					<div className="title">Target</div>
					<div className="gap small">
						<Graph data={this.state.graphs.regular} />
					</div>
					<div className="title">Left Killshots</div>
					<div className="gap small">
						<Graph data={this.state.graphs.ksLeft} />
					</div>
					<div className="title">Right Killshots</div>
					<div className="gap large">
						<Graph data={this.state.graphs.ksRight} />
					</div>

					{this.state.one &&
						<Modal
							title="Practice Throws"
							close={this.oneHide}
						>
							<Practice data={this.state.one} />
						</Modal>
					}
				</div>
			);
		}
		else {
			return <div />
		}
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
