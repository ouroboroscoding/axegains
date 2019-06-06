/**
 * Input Enter
 *
 * An input box that handles Enter key presses and sends them to a onEnter
 * callback
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-12-01
 */

// React Base
var Forms = require('../base/forms.jsx');

// Create the Component
class InputEnter extends Forms.Node {

	constructor(props) {

		// Call the parent
		super(props);

		// Store the callback
		this.onEnter = props.onEnter;
		delete this.props.onEnter;

		// Set the initial state
		this.state = {}

		// Bind functions
		this.keyPress = this.keyPress.bind(this);
	}

	keyPress(ev) {

		// If an Enter key was pressed and the callback was set
		if(ev.key == 'Enter' && this.onEnter) {
			this.onEnter(ev.currentTarget.value);
			ev.stopPropagation();
			ev.preventDefault();
		}

		// If there's an onKeyPress callback
		if(this.props.onKeyPress) {
			this.props.onKeyPress(ev);
		}
	}

	render() {
		const { onEnter, ...rest } = this.props
		return (
			<input
				{...rest}
				type="text"
				ref="el"
				onKeyPress={this.keyPress}
			/>
		);
	}
}

// Export the component
module.exports = InputEnter;
