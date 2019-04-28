/**
 * WATL Stats: Match
 *
 * Fetchs and displays WATL stats for matches
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-28
 */

// Generic modules
var Events = require('../../generic/events.js');
var Loader = require('../../generic/loader.js');
var Services = require('../../generic/services.js');
var Tools = require('../../generic/tools.js');

// Site modules
var Utils = require('../../utils.js');

// Components
var PieKillshot = require('./pieKillshot.jsx');
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
		Services.read('watl', 'match/stats', {}).done(res => {

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
					<div className="smwl">
						<div>Matches</div>
						<div>Wins</div>
						<div>Losses</div>
						<div>64s</div>
					</div>
					<div className="smwl gap large">
						<div>{match.matches}</div>
						<div className="win">{match.wins}</div>
						<div className="loss">{match.losses}</div>
						<div>{match.sixtyfours}</div>
					</div>
					<div className="throws">
						<div>Regular</div>
						<div>Killshot L</div>
						<div>Killshot R</div>
					</div>
					<div className="throws">
						<div>{match.regular.attempts}</div>
						<div>{match.ksLeft.attempts}</div>
						<div>{match.ksRight.attempts}</div>
					</div>
					<div className="throws">
						<div>
							<PieRegular
								height="150px"
								data={[match.regular.sixes, match.regular.fours, match.regular.threes, match.regular.twos, match.regular.ones, match.regular.zeros, match.regular.drops]}
							/>
						</div>
						<div>
							<PieKillshot
								height="150px"
								data={[match.ksLeft.hits, (match.ksLeft.attempts - (match.ksLeft.hits + match.ksLeft.drops)), match.ksLeft.drops]}
							/>
						</div>
						<div>
							<PieKillshot
								height="150px"
								data={[match.ksRight.hits, (match.ksRight.attempts - (match.ksRight.hits + match.ksRight.drops)), match.ksRight.drops]}
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
