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

// StatsPractice component
class StatsPractice extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);
	}

	render() {
		return <div />
	}
}

// Export the component
module.exports = StatsPractice;
