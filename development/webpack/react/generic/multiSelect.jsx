/**
 * Multi Select
 *
 * A component that simulates a list of checkboxes while taking up minimal space
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-05-30
 */

// Generic modules
var Tools = require('../../generic/tools.js');

// MultiSelect component
class MultiSelect extends React.Component {

	constructor(props) {

		// Call the parent
		super(props);

		// If the options param is an array
		if(Array.isArray(props.options)) {
			var temp = {};
			for(var s of props.options) {
				temp[s] = s;
			}
			props.options = s;
		}

		// Initial state
		this.state = {
			"open": false,
			"options": props.options,
			"values": props.values || []
		}

		// Bind methods
		this.close = this.close.bind(this);
		this.open = this.open.bind(this);
		this.option = this.option.bind(this);
	}

	close(ev) {
		// If the click was outside the results
		if(!ReactDOM.findDOMNode(this.refs.main).contains(ev.target)) {
			this.setState({"open": false}, function() {
				document.removeEventListener("click", this.close, false);
			});
		}
	}

	componentDidUpdate(prevProps) {
		if(!Tools.compare(prevProps.values, this.props.values)) {
			this.setState({"values": this.props.values});
		}
	}

	open() {
		this.setState({"open": true}, function() {
			document.addEventListener("click", this.close, false);
		});
	}

	option(ev) {

		// Get the key
		var key = ev.currentTarget.dataset.key;

		// Clone the values
		var values = Tools.clone(this.state.values);

		// Turn off
		if(this.state.values.indexOf(key) != -1) {
			values.splice(values.indexOf(key), 1);
		}

		// Turn on
		else {
			values.push(key);
			var temp = [];
			for(var k in this.state.options) {
				if(values.indexOf(k) != -1) {
					temp.push(k)
				}
			}
			values = temp;
		}

		// Set the new state
		this.setState({"values": values});
	}

	render() {

		// If we're open
		if(this.state.open) {
			var self = this;
			return (
				<div ref="main" className="multiSelect">
					{Tools.omap(this.state.options, function(v, k) {
						return (
							<div
								key={k}
								data-key={k}
								className={"multiSelect_option" + ((self.state.values.indexOf(k) != -1) ? ' active' : '')}
								onClick={self.option}
							>{v}</div>
						);
					})}
				</div>
			);
		}

		// Else the select is "closed"
		else {

			// Generic the text
			var text = []
			for(var s of this.state.values) {
				text.push(this.state.options[s]);
			}
			text = text.join(', ');

			// Return elements
			return (
				<div className="multiSelect">
					<div className="multiSelect_text" onClick={this.open}>
						{text.length ?
							text
						:
							<em>none</em>
						}
					</div>
				</div>
			);
		}
	}

	get value() {
		return this.state.values;
	}

	set value(val) {
		if(!Tools.compare(this.state.values, val)) {
			this.setState({"values": val});
		}
	}
}

// Export the component
module.exports = MultiSelect;
