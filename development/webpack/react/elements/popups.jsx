/**
 * Popups
 *
 * Shows a popup of type error, success, or warning
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-12-08
 */

// Defines
var SUCCESS_TIMEOUT = 2000;
var ERROR_TIMEOUT = 10000;
var WARNING_TIMEOUT = 5000;
var STEP_TIMEOUT = 20;
var WIDTH_STEPS = 40;
var HEIGHT_STEPS = 20;
var MARGIN = 5;

// Generic
var Events = require('../../generic/events.js');
var Tools = require('../../generic/tools.js');

// Make sure there isn't more than one Popups
var _instance = false;

// Create the Component
class Popups extends React.Component {

	constructor(props) {

		// Call the parent
		super(props);

		// If we already have an instance
		if(_instance) {
			throw 'Can\'t have more than one Popups';
		}
		_instance = true;

		// Set the initial state
		this.state = {
			popups: [],
			timer: null
		};

		// Bind methods
		this.error = this.error.bind(this);
		this.popup = this.popup.bind(this);
		this.process = this.process.bind(this);
		this.warning = this.warning.bind(this);
	}

	componentWillMount() {
		// Track any popup events
		Events.add('error', this.error);
		Events.add('popup', this.popup);
		Events.add('success', this.popup);
		Events.add('warning', this.warning);
	}

	componentWillUnmount() {
		// Stop tracking any popup events
		Events.remove('error', this.error);
		Events.remove('popup', this.popup);
		Events.remove('success', this.popup);
		Events.remove('warning', this.warning);
	}

	error(msg) {
		this.popup(msg, 'error');
	}

	process() {

		// Clone the state
		var state = Tools.clone(this.state);

		// If we were waiting
		if(state.timer.step == 0) {

			// Start the process to hide the first popup
			state.popups[0]['l'] = MARGIN;
			state.popups[0]['r'] = MARGIN;

			// Start the step timeouts
			state.timer.res = setTimeout(this.process, STEP_TIMEOUT);
			state.timer.step = 1;
		}

		// Else we need to move the first popup off the screen
		else if(state.timer.step >= 1 && state.timer.step <= 40) {

			// Get the inner width of the screen and divide by the steps
			var step = window.innerWidth / WIDTH_STEPS;

			// Subtract it from the left and right
			state.popups[0]['l'] -= step;
			state.popups[0]['r'] += step;

			// Set the next timeout
			state.timer.res = setTimeout(this.process, STEP_TIMEOUT);
			state.timer.step += 1;
		}

		// Else we need to move the first popup up
		else if(state.timer.step >= 41 && state.timer.step <= 60) {

			// If we're on the first step
			if(state.timer.step == 41) {
				state.popups[0]['oh'] = this.refs["0"].offsetHeight;
				state.popups[0]['h'] = this.refs["0"].offsetHeight;
			}

			// Get the height of the div and divide by the steps
			var step = state.popups[0]['oh'] / HEIGHT_STEPS;

			// Subtract it from the current height
			state.popups[0]['h'] -= step;

			// Set the next timeout
			state.timer.res = setTimeout(this.process, STEP_TIMEOUT);
			state.timer.step += 1;
		}

		// Else we need to remove the popup completely
		else if(state.timer.step == 61) {

			// Remove the current first popup
			state.popups.splice(0, 1);

			// If we still have popups
			if(state.popups.length) {

				// Reset the timer steps
				state.timer.res = setTimeout(this.process, state.popups[0].timeout);
				state.timer.step = 0;
			}

			// Else, no more timeouts
			else {
				state.timer = null;
			}
		}

		// Set the state
		this.setState(state);
	}

	render() {

		return (
			<div id="popups" style={{display: this.state.popups.length ? 'block' : 'none'}}>
				{this.state.popups.map((msg, i) => {
					let style = {}
					if(typeof msg.l != 'undefined') {
						style.marginLeft = msg.l + 'px';
						style.marginRight = msg.r + 'px';
					}
					if(typeof msg.h != 'undefined') {
						style.height = msg.h + 'px';
						style.padding = 0;
						style.marginBottom = 0;
						style.marginTop = 0;
					}

					return (
						<div key={i} ref={"" + i} className={msg.type} style={style}>
							<i className={"fas fa-" + msg.icon} />
							{msg.text}
						</div>
					)
				})}
			</div>
		);
	}

	popup(text, type) {

		// If there's no type
		if(typeof type == 'undefined') {
			type = 'success';
		}

		var iTimeout = 0;
		var sIcon = '';
		switch(type) {
			case 'success':
				iTimeout = SUCCESS_TIMEOUT;
				sIcon = 'check-circle';
				break;
			case 'error':
				iTimeout = ERROR_TIMEOUT;
				sIcon = 'exclamation-circle';
				console.error(text);
				break;
			case 'warning':
				iTimeout = WARNING_TIMEOUT;
				sIcon = 'exclamation-triangle';
				console.warn(text);
				break;
			default:
				throw "Invalid popup type: " + type;
		}

		// Clone the state
		var state = Tools.clone(this.state);

		// Add the popup
		state.popups.push({
			icon: sIcon,
			text: text,
			timeout: iTimeout,
			type: type
		});

		// Set the timer
		if(state.timer == null) {
			state.timer = {
				res: setTimeout(this.process, iTimeout),
				step: 0
			}
		}

		// Set the new state
		this.setState(state);
	}

	warning(msg) {
		this.popup(msg, 'warning');
	}
}

// Export the component
module.exports = Popups;
