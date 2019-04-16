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
var Modal = require('../elements/modal.jsx');

// Components
var ChartClutch = require('./chartClutch.jsx');
var ChartRegular = require('./chartRegular.jsx');

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

				<h2>Regular</h2>
				<div className="throws">
					<div>Regular</div>
					<div>Clutches</div>
				</div>
				<div className="throws">
					<div>{data.stats.standard.regular.attempts}</div>
					<div>{data.stats.standard.clutches.attempts}</div>
				</div>
				<div className="throws">
					<div>
						<ChartRegular
							height="150px"
							data={[data.stats.standard.regular.fives, data.stats.standard.regular.threes, data.stats.standard.regular.ones, data.stats.standard.regular.zeros, data.stats.standard.regular.drops]}
						/>
					</div>
					<div>
						<ChartClutch
							height="150px"
							data={[data.stats.standard.clutches.hits, (data.stats.standard.clutches.attempts - (data.stats.standard.clutches.hits + data.stats.standard.clutches.drops)), data.stats.standard.clutches.drops]}
						/>
					</div>
				</div>

				<h2>Big Axe</h2>
				<div className="throws">
					<div>Regular</div>
					<div>Clutches</div>
				</div>
				<div className="throws">
					<div>{data.stats.bigaxe.regular.attempts}</div>
					<div>{data.stats.bigaxe.clutches.attempts}</div>
				</div>
				<div className="throws">
					<div>
						<ChartRegular
							height="150px"
							data={[data.stats.bigaxe.regular.fives, data.stats.bigaxe.regular.threes, data.stats.bigaxe.regular.ones, data.stats.bigaxe.regular.zeros, data.stats.bigaxe.regular.drops]}
						/>
					</div>
					<div>
						<ChartClutch
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

		// Save this
		var self = this;

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
				self.setState({
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

					<h2>Regular</h2>
					<div className="throws">
						<div>Regular</div>
						<div>Clutches</div>
					</div>
					<div className="throws">
						<div>{overall.standard.regular.attempts}</div>
						<div>{overall.standard.clutches.attempts}</div>
					</div>
					<div className="throws">
						<div>
							<ChartRegular
								height="150px"
								data={[overall.standard.regular.fives, overall.standard.regular.threes, overall.standard.regular.ones, overall.standard.regular.zeros, overall.standard.regular.drops]}
							/>
						</div>
						<div>
							<ChartClutch
								height="150px"
								data={[overall.standard.clutches.hits, (overall.standard.clutches.attempts - (overall.standard.clutches.hits + overall.standard.clutches.drops)), overall.standard.clutches.drops]}
							/>
						</div>
					</div>
					<br />

					<h2>Big Axe</h2>
					<div className="throws">
						<div>Regular</div>
						<div>Clutches</div>
					</div>
					<div className="throws">
						<div>{overall.bigaxe.regular.attempts}</div>
						<div>{overall.bigaxe.clutches.attempts}</div>
					</div>
					<div className="throws">
						<div>
							<ChartRegular
								height="150px"
								data={[overall.bigaxe.regular.fives, overall.bigaxe.regular.threes, overall.bigaxe.regular.ones, overall.bigaxe.regular.zeros, overall.bigaxe.regular.drops]}
							/>
						</div>
						<div>
							<ChartClutch
								height="150px"
								data={[overall.bigaxe.clutches.hits, (overall.bigaxe.clutches.attempts - (overall.bigaxe.clutches.hits + overall.bigaxe.clutches.drops)), overall.bigaxe.clutches.drops]}
							/>
						</div>
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
