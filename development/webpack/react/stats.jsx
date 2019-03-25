// External modules
var React = require('react');

// Generic modules
var Events = require('../generic/events.js');
var Services = require('../generic/services.js');

// Site modules
var Utils = require('../utils.js');

// Stats component
class Stats extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"natf_practice": null
		};
	}

	componentWillMount() {

		// Save this
		var self = this;

		// The number of requests
		var count = 1;

		// Show the loader
		Events.trigger('loader', true);

		// Fetch the stats
		Services.read('natf', 'stats', {}}).done(res => {

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
					"natf_practice": res.data
				});
			}
		}).always(() => {

			// Reduce the count of requests by 1
			requests--;

			// If we have no more requests, hide the loader
			if(requests == 0) {
				Events.trigger('loader', false);
			}
		});
	}

	render() {
		var self = this;
		return (
			<div className="natf">
				<div className="stats">
					<div className="practice">

					</div>
				</div>
			</div>
		);
	}
}

// Export the component
module.exports = Stats;
