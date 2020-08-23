/**
 * IATF Stats: Match
 *
 * Fetchs and displays IATF stats for matches
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
var PieClutch = require('./pieClutch.jsx');
var PiePaint = require('./piePaint.jsx');
var PieRegular = require('./pieRegular.jsx');

// StatsMatch component
class StatsMatch extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"data": null,
			"thrower": props.thrower
		}

		// Bind methods
		this.signin = this.signin.bind(this);
		this.signout = this.signout.bind(this);
	}

	componentWillMount() {

		// Track signin / signout
		Events.add('signin', this.signin);
		Events.add('signout', this.signout);

		// If someone is logged in
		if(this.state.thrower) {

			// Fetch the match stats
			this.fetch();
		}
	}

	componentWillUnmount() {

		// Stop tracking signin / signout
		Events.remove('signin', this.signin);
		Events.remove('signout', this.signout);
	}

	fetch() {

		// Show the loader
		Loader.show();

		// Fetch the match stats
		Services.read('iatf', 'match/stats', {}).done(res => {

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
					"data": res.data
				});
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	render() {
		var match = this.state.data;

		// If there's data
		if(match) {
			return (
				<div className="match">
					<h2>Regulation</h2>
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
							<PieRegular
								height="150px"
								data={[match.regular.fives, match.regular.threes, match.regular.ones, match.regular.zeros, match.regular.drops]}
							/>
						</div>
						<div>
							<PieClutch
								height="150px"
								data={[match.clutches.hits, (match.clutches.attempts - (match.clutches.hits + match.clutches.drops)), match.clutches.drops]}
							/>
						</div>
					</div>

					<h2>Big Axe</h2>
					<div className="mwl">
						<div>Matches</div>
						<div>Wins</div>
						<div>Losses</div>
					</div>
					<div className="mwl">
						<div>{match.bigaxe.matches}</div>
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
							<PiePaint
								height="150px"
								data={[match.bigaxe.paint.hits, (match.bigaxe.paint.attempts - (match.bigaxe.paint.hits + match.bigaxe.paint.drops)), match.bigaxe.paint.drops]}
							/>
						</div>
						<div>
							<PieRegular
								height="150px"
								data={[match.bigaxe.points.regular.fives, match.bigaxe.points.regular.threes, match.bigaxe.points.regular.ones, match.bigaxe.points.regular.zeros, match.bigaxe.points.regular.drops]}
							/>
						</div>
						<div>
							<PieClutch
								height="150px"
								data={[match.bigaxe.points.clutches.hits, (match.bigaxe.points.clutches.attempts - (match.bigaxe.points.clutches.hits + match.bigaxe.points.clutches.drops)), match.bigaxe.points.clutches.drops]}
							/>
						</div>
					</div>
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

		// Fetch the match stats
		this.fetch();
	}

	signout() {
		this.setState({"thrower": false});
	}
}

// Export the component
module.exports = StatsMatch;
