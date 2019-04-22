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

// Generic Components
var Graph = require('../elements/graph.jsx');
var Modal = require('../elements/modal.jsx');

// Components
var PieClutch = require('./pieClutch.jsx');
var PieRegular = require('./pieRegular.jsx');

// Practice component
class Practice extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);
	}

	pointsClass(d) {
		var l = [];
		if(d.bigaxe) l.push('bigaxe');
		if(d.clutch) l.push('clutch');
		return l.join(' ');
	}

	render() {
		var self = this;
		var data = this.props.data;
		return (
			<React.Fragment>
				<h2>All Throws</h2>
				<div className="allPoints">
					{data.data.map(function(p, i) {
						return <span key={i} className={self.pointsClass(p)}>{"" + p.value}</span>
					})}
				</div>
				<br />

				<h2>Hatchet</h2>
				<div className="throws">
					<div>Target</div>
					<div>Clutches</div>
				</div>
				<div className="throws">
					<div>{data.stats.standard.regular.attempts}</div>
					<div>{data.stats.standard.clutches.attempts}</div>
				</div>
				<div className="throws">
					<div>
						<PieRegular
							height="150px"
							data={[data.stats.standard.regular.fives, data.stats.standard.regular.threes, data.stats.standard.regular.ones, data.stats.standard.regular.zeros, data.stats.standard.regular.drops]}
						/>
					</div>
					<div>
						<PieClutch
							height="150px"
							data={[data.stats.standard.clutches.hits, (data.stats.standard.clutches.attempts - (data.stats.standard.clutches.hits + data.stats.standard.clutches.drops)), data.stats.standard.clutches.drops]}
						/>
					</div>
				</div>

				<h2>Big Axe</h2>
				<div className="throws">
					<div>Target</div>
					<div>Clutches</div>
				</div>
				<div className="throws">
					<div>{data.stats.bigaxe.regular.attempts}</div>
					<div>{data.stats.bigaxe.clutches.attempts}</div>
				</div>
				<div className="throws">
					<div>
						<PieRegular
							height="150px"
							data={[data.stats.bigaxe.regular.fives, data.stats.bigaxe.regular.threes, data.stats.bigaxe.regular.ones, data.stats.bigaxe.regular.zeros, data.stats.bigaxe.regular.drops]}
						/>
					</div>
					<div>
						<PieClutch
							height="150px"
							data={[data.stats.bigaxe.clutches.hits, (data.stats.bigaxe.clutches.attempts - (data.stats.bigaxe.clutches.hits + data.stats.bigaxe.clutches.drops)), data.stats.bigaxe.clutches.drops]}
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
		Services.read('natf', 'practice/data', {
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
			"standard": {
				"regular": {
					"labels": [],
					"datasets": [
						{"label": "Fives", "data": [], "fill": false, "borderColor": "rgb(0,0,0,0.9)", "lineTension": 0.1},
						{"label": "Threes", "data": [], "fill": false, "borderColor": "rgb(255,0,0,0.9)", "lineTension": 0.1},
						{"label": "Ones", "data": [], "fill": false, "borderColor": "rgb(0,0,255,0.9)", "lineTension": 0.1},
						{"label": "Zeros", "data": [], "fill": false, "borderColor": "rgb(100,100,100,0.5)", "lineTension": 0.1},
						{"label": "Drops", "data": [], "fill": false, "borderColor": "rgb(200,200,200,0.5)", "lineTension": 0.1},
					]
				},
				"clutches": {
					"labels": [],
					"datasets": [
						{"label": "Hits", "data": [], "fill": false, "borderColor": "rgb(0,255,0,0.9)", "lineTension": 0.1},
						{"label": "Misses", "data": [], "fill": false, "borderColor": "rgb(100,100,100,0.5)", "lineTension": 0.1},
						{"label": "Drops", "data": [], "fill": false, "borderColor": "rgb(200,200,200,0.5)", "lineTension": 0.1},
					]
				}
			},
			"bigaxe": {
				"regular": {
					"labels": [],
					"datasets": [
						{"label": "Fives", "data": [], "fill": false, "borderColor": "rgb(0,0,0,0.9)", "lineTension": 0.1},
						{"label": "Threes", "data": [], "fill": false, "borderColor": "rgb(255,0,0,0.9)", "lineTension": 0.1},
						{"label": "Ones", "data": [], "fill": false, "borderColor": "rgb(0,0,255,0.9)", "lineTension": 0.1},
						{"label": "Zeros", "data": [], "fill": false, "borderColor": "rgb(100,100,100,0.5)", "lineTension": 0.1},
						{"label": "Drops", "data": [], "fill": false, "borderColor": "rgb(200,200,200,0.5)", "lineTension": 0.1},
					]
				},
				"clutches": {
					"labels": [],
					"datasets": [
						{"label": "Hits", "data": [], "fill": false, "borderColor": "rgb(0,255,0,0.9)", "lineTension": 0.1},
						{"label": "Misses", "data": [], "fill": false, "borderColor": "rgb(100,100,100,0.5)", "lineTension": 0.1},
						{"label": "Drops", "data": [], "fill": false, "borderColor": "rgb(200,200,200,0.5)", "lineTension": 0.1},
					]
				}
			}
		}

		// Go through each set of stats backwards
		for(var i = data.length-1; i >= 0; --i) {

			// Add the labels
			var ts = Utils.date(data[i]._created);
			ret.standard.regular.labels.push(ts);
			ret.standard.clutches.labels.push(ts);
			ret.bigaxe.regular.labels.push(ts);
			ret.bigaxe.clutches.labels.push(ts);

			// Calculate the hatchet target percentages
			if(data[i].stats.standard.regular.attempts == 0) {
				ret.standard.regular.datasets[0].data.push(0.0);
				ret.standard.regular.datasets[1].data.push(0.0);
				ret.standard.regular.datasets[2].data.push(0.0);
				ret.standard.regular.datasets[3].data.push(0.0);
				ret.standard.regular.datasets[4].data.push(0.0);
			} else {
				ret.standard.regular.datasets[0].data.push(((data[i].stats.standard.regular.fives / data[i].stats.standard.regular.attempts) * 100.0).toFixed(1));
				ret.standard.regular.datasets[1].data.push(((data[i].stats.standard.regular.threes / data[i].stats.standard.regular.attempts) * 100.0).toFixed(1));
				ret.standard.regular.datasets[2].data.push(((data[i].stats.standard.regular.ones / data[i].stats.standard.regular.attempts) * 100.0).toFixed(1));
				ret.standard.regular.datasets[3].data.push(((data[i].stats.standard.regular.zeros / data[i].stats.standard.regular.attempts) * 100.0).toFixed(1));
				ret.standard.regular.datasets[4].data.push(((data[i].stats.standard.regular.drops / data[i].stats.standard.regular.attempts) * 100.0).toFixed(1));
			}

			// Calculate the hatchet clutch percentages
			if(data[i].stats.standard.clutches.attempts == 0) {
				ret.standard.clutches.datasets[0].data.push(0.0);
				ret.standard.clutches.datasets[1].data.push(0.0);
				ret.standard.clutches.datasets[2].data.push(0.0);
			} else {
				ret.standard.clutches.datasets[0].data.push(((data[i].stats.standard.clutches.hits / data[i].stats.standard.clutches.attempts) * 100.0).toFixed(1));
				ret.standard.clutches.datasets[1].data.push((((data[i].stats.standard.clutches.attempts - (data[i].stats.standard.clutches.drops + data[i].stats.standard.clutches.hits)) / data[i].stats.standard.clutches.attempts) * 100.0).toFixed(1));
				ret.standard.clutches.datasets[2].data.push(((data[i].stats.standard.clutches.drops / data[i].stats.standard.clutches.attempts) * 100.0).toFixed(1));
			}

			// Calculate the bigaxe target percentages
			if(data[i].stats.bigaxe.regular.attempts == 0) {
				ret.bigaxe.regular.datasets[0].data.push(0.0);
				ret.bigaxe.regular.datasets[1].data.push(0.0);
				ret.bigaxe.regular.datasets[2].data.push(0.0);
				ret.bigaxe.regular.datasets[3].data.push(0.0);
				ret.bigaxe.regular.datasets[4].data.push(0.0);
			} else {
				ret.bigaxe.regular.datasets[0].data.push(((data[i].stats.bigaxe.regular.fives / data[i].stats.bigaxe.regular.attempts) * 100.0).toFixed(1));
				ret.bigaxe.regular.datasets[1].data.push(((data[i].stats.bigaxe.regular.threes / data[i].stats.bigaxe.regular.attempts) * 100.0).toFixed(1));
				ret.bigaxe.regular.datasets[2].data.push(((data[i].stats.bigaxe.regular.ones / data[i].stats.bigaxe.regular.attempts) * 100.0).toFixed(1));
				ret.bigaxe.regular.datasets[3].data.push(((data[i].stats.bigaxe.regular.zeros / data[i].stats.bigaxe.regular.attempts) * 100.0).toFixed(1));
				ret.bigaxe.regular.datasets[4].data.push(((data[i].stats.bigaxe.regular.drops / data[i].stats.bigaxe.regular.attempts) * 100.0).toFixed(1));
			}

			// Calculate the bigaxe clutch percentages
			if(data[i].stats.bigaxe.clutches.attempts == 0) {
				ret.bigaxe.clutches.datasets[0].data.push(0.0);
				ret.bigaxe.clutches.datasets[1].data.push(0.0);
				ret.bigaxe.clutches.datasets[2].data.push(0.0);
			} else {
				ret.bigaxe.clutches.datasets[0].data.push(((data[i].stats.bigaxe.clutches.hits / data[i].stats.bigaxe.clutches.attempts) * 100.0).toFixed(1));
				ret.bigaxe.clutches.datasets[1].data.push((((data[i].stats.bigaxe.clutches.attempts - (data[i].stats.bigaxe.clutches.drops + data[i].stats.bigaxe.clutches.hits)) / data[i].stats.bigaxe.clutches.attempts) * 100.0).toFixed(1));
				ret.bigaxe.clutches.datasets[2].data.push(((data[i].stats.bigaxe.clutches.drops / data[i].stats.bigaxe.clutches.attempts) * 100.0).toFixed(1));
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
					<p>
						<select onChange={this.one}>
							<option value="-1">Select a Practice</option>
							{this.state.practices.map(function(p, i) {
								return <option value={p['_id']}>{Utils.datetime(p['_created'])}</option>
							})}
						</select>
					</p>

					<h2>Hatchet</h2>
					<div className="throws">
						<div>Target</div>
						<div>Clutches</div>
					</div>
					<div className="throws">
						<div>{overall.standard.regular.attempts}</div>
						<div>{overall.standard.clutches.attempts}</div>
					</div>
					<div className="throws">
						<div>
							<PieRegular
								height="150px"
								data={[overall.standard.regular.fives, overall.standard.regular.threes, overall.standard.regular.ones, overall.standard.regular.zeros, overall.standard.regular.drops]}
							/>
						</div>
						<div>
							<PieClutch
								height="150px"
								data={[overall.standard.clutches.hits, (overall.standard.clutches.attempts - (overall.standard.clutches.hits + overall.standard.clutches.drops)), overall.standard.clutches.drops]}
							/>
						</div>
					</div>
					<div className="title">Target</div>
					<div>
						<Graph data={this.state.graphs.standard.regular} />
					</div>
					<div className="title">Clutches</div>
					<div>
						<Graph data={this.state.graphs.standard.clutches} />
					</div>
					<br />

					<h2>Big Axe</h2>
					<div className="throws">
						<div>Target</div>
						<div>Clutches</div>
					</div>
					<div className="throws">
						<div>{overall.bigaxe.regular.attempts}</div>
						<div>{overall.bigaxe.clutches.attempts}</div>
					</div>
					<div className="throws">
						<div>
							<PieRegular
								height="150px"
								data={[overall.bigaxe.regular.fives, overall.bigaxe.regular.threes, overall.bigaxe.regular.ones, overall.bigaxe.regular.zeros, overall.bigaxe.regular.drops]}
							/>
						</div>
						<div>
							<PieClutch
								height="150px"
								data={[overall.bigaxe.clutches.hits, (overall.bigaxe.clutches.attempts - (overall.bigaxe.clutches.hits + overall.bigaxe.clutches.drops)), overall.bigaxe.clutches.drops]}
							/>
						</div>
					</div>
					<div className="title">Target</div>
					<div>
						<Graph data={this.state.graphs.bigaxe.regular} />
					</div>
					<div className="title">Clutches</div>
					<div>
						<Graph data={this.state.graphs.bigaxe.clutches} />
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
