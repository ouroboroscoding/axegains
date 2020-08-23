/**
 * Input Max
 *
 * An input box that displays the maximum number of characters allowed as well
 * as how many have been entered thus far
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-06-12
 */

// Generic
var Tools = require('../../generic/tools.js');

// React Base
var Forms = require('../base/forms.jsx');

// Create the Component
class InputMax extends Forms.Node {

	constructor(props) {

		// Call the parent
		super(props);

		// If there's no max
		if(typeof props.max == 'undefined') {
			throw 'InputMax requires a "max" property';
		}

		// Initial value
		var value = props.defaultValue ? props.defaultValue : (props.value ? props.value : '')

		// Set the initial state
		this.state = {
			"count": value.length,
			"max": props.max,
			"value": value
		}

		// Bind functions
		this.align = this.align.bind(this);
		this.change = this.change.bind(this);
	}

	align() {

		// Get the input and span dimensions
		var inpRect = this.refs.el.getBoundingClientRect();
		var spanRect = this.refs.count.getBoundingClientRect();

		console.log(inpRect);
		console.log(spanRect);

		// Set the style for the count
		this.refs.count.style.position = "relative";
		this.refs.count.style.right = (spanRect.width + 5) + 'px';
	}

	change(ev) {

		// Get the value
		var value = this.refs.el.value;

		// If it's past the max
		if(value.length > this.state.max) {
			value = value.substring(0, this.state.max);
		}

		// Change the value and count
		this.setState({
			"count": value.length,
			"value": value
		});

		// Call the parent onChange if there is one
		if(this.props.onChange) {
			this.props.onChange(ev);
		}
	}

	componentDidUpdate(prevProps) {
		var newState = {};

		// If the value changed
		if(prevProps.value != this.props.value) {
			newState['value'] = this.props.value;
			newState['count'] = newState['value'].length;
		}

		// If the max changed
		if(prevProps.max != this.props.max) {
			newState['max'] = this.props.max;
		}

		// If anything changed
		if(!Tools.empty(newState)) {
			this.setState(newState);
		}
	}

	render() {

		// Align the count
		setTimeout(this.align, 0);

		// Render the elements
		const { onChange, ...rest } = this.props
		return (
			<React.Fragment>
				<input
					{...rest}
					className="inputMax_input"
					type="text"
					ref="el"
					onChange={this.change}
				/>
				<span ref="count" className="inputMax_count">{this.state.count} / {this.state.max}</span>
			</React.Fragment>
		);
	}

	get value() {
		return this.state.value;
	}

	set value(val) {
		this.setState({"value": val});
	}
}

// Export the component
module.exports = InputMax;
