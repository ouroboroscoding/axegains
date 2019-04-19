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
var Modal = require('../elements/modal.jsx');

// Components
var ChartKillshot = require('./chartKillshot.jsx');
var ChartRegular = require('./chartRegular.jsx');

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
				<h2>All Throws</h2>
				<div className="allPoints">
					{data.data.map(function(p, i) {
						return <span key={i} className={p.killshot != '0' ? 'killshot' : ''}>{"" + p.value}</span>
					})}
				</div>
				<br />

				<h2>Regular</h2>
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
						<ChartRegular
							height="150px"
							data={[data.stats.regular.sixes, data.stats.regular.fours, data.stats.regular.threes, data.stats.regular.twos, data.stats.regular.ones, data.stats.regular.zeros, data.stats.regular.drops]}
						/>
					</div>
					<div>
						<ChartKillshot
							height="150px"
							data={[data.stats.ksLeft.hits, (data.stats.ksLeft.attempts - (data.stats.ksLeft.hits + data.stats.ksLeft.drops)), data.stats.ksLeft.drops]}
						/>
					</div>
					<div>
						<ChartKillshot
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
						<div>Killshot L</div>
						<div>Killshot R</div>
					</div>
					<div className="throws">
						<div>{overall.regular.attempts}</div>
						<div>{overall.ksLeft.attempts}</div>
						<div>{overall.ksRight.attempts}</div>
					</div>
					<div className="throws">
						<div>
							<ChartRegular
								height="150px"
								data={[overall.regular.sixes, overall.regular.fours, overall.regular.threes, overall.regular.twos, overall.regular.ones, overall.regular.zeros, overall.regular.drops]}
							/>
						</div>
						<div>
							<ChartKillshot
								height="150px"
								data={[overall.ksLeft.hits, (overall.ksLeft.attempts - (overall.ksLeft.hits + overall.ksLeft.drops)), overall.ksLeft.drops]}
							/>
						</div>
						<div>
							<ChartKillshot
								height="150px"
								data={[overall.ksRight.hits, (overall.ksRight.attempts - (overall.ksRight.hits + overall.ksRight.drops)), overall.ksRight.drops]}
							/>
						</div>
					</div>
					<br />

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
