/**
 * NATF Board
 *
 * Manages a standard NATF board
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-19
 */

// Defines
var ATW = ['L1', 'L3', 'BE', 'R3', 'R1', 'C'];

// Board component
class Board extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"atw": props.atw ? 1 : false,
			"clutchMode": props.clutchMode,
			"selected": props.clutchMode == 'expected'
		};

		// Bind methods
		this.atwClick = this.atwClick.bind(this);
		this.clutchClick = this.clutchClick.bind(this);
		this.dropClick = this.dropClick.bind(this);
		this.pointClick = this.pointClick.bind(this);
	}

	atw(val) {

		// If we got a string, set the next value
		if(typeof val == 'string') {
			val = ATW.indexOf(val) + 2;
			if(val == 7) {
				val = 1;
			}
		}

		// Else if we got a negative, add it to the current value
		else if(val < 0) {
			val = this.state.atw + val;
		}

		// Set the state
		this.setState({"atw": val})
	}

	atwClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// Get the value
		var value = ev.currentTarget.dataset.value;

		// Send out the value
		this.props.onATW(value);

		// Set ATW mode to the next value
		var atw = this.state.atw + 1;

		// If it's 7, loop around
		if(atw == 7) {
			atw = 1;
		}

		// Set the state
		this.setState({"atw": atw});
	}

	clutchClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// If clutches are not allowed
		if(this.state.clutchMode == 'none') {

			// Store the current target
			var target = ev.currentTarget;

			// Get the class name
			var className = target.className;

			// Set the invalid class
			target.className = className + ' invalid';

			// And set a timeout to turn it off
			setTimeout(function() {
				target.className = className;
			}, 500);

			// Don't count the click
			return;
		}

		else {

			if(this.state.selected) {
				if(this.props.onPoints(true, 7) !== false) {
					this.resetClutch();
				}
			} else {
				this.setState({"selected": true});
			}
		}
	}

	componentDidUpdate(prevProps) {

		// If clutch mode changed
		if(prevProps.clutchMode != this.props.clutchMode) {
			this.clutchMode = this.props.clutchMode;
		}
	}

	dropClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// Init the accepted flag
		var accepted = true;

		// Store the current target
		var target = ev.currentTarget;

		// If we're in around the world
		if(this.state.atw) {
			this.props.onATW("d");
		}

		// Else we're in regular mode
		else {

			// Send out the drop
			accepted = this.props.onPoints(this.state.selected, 'd');
		}

		// If the drop was not rejected
		if(accepted !== false) {

			// De-select the clutch if there's one selected
			if(this.state.selected) {
				this.resetClutch();
			}

			// Turn on the active flag
			target.className = 'drop active';

			// And set a timeout to turn it off
			setTimeout(function() {
				target.className = 'drop';
			}, 500);
		}
	}

	resetClutch() {

		// If the mode is selected
		if(this.state.clutchMode == 'select') {
			this.setState({"selected": false});
		}
	}

	pointClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// Init the accepted flag
		var accepted = true;

		// Store the current target
		var target = ev.currentTarget;

		// Get the class names
		var classNames = target.className.split(' ');

		// If we're in around the world
		if(this.state.atw) {
			this.props.onATW("0");
		}

		// Else we're in regular mode
		else {

			// If it's already active, do nothing
			if(classNames[1] && classNames[1] == 'active'){
				return;
			}

			// If there's a clutch selected
			var accepted = true;
			if(this.state.selected) {
				accepted = this.props.onPoints(true, 0);
				if(accepted !== false) {
					this.resetClutch();
				}
			} else {
				accepted = this.props.onPoints(false, parseInt(target.dataset.value));
			}
		}

		// If the points were not rejected
		if(accepted !== false) {

			// Turn on the active flag
			target.className = classNames[0] + ' active';

			// And set a timeout to turn it off
			setTimeout(function() {
				target.className = classNames[0];
			}, 500);
		}
	}

	render() {
		return (
			<div className="board" data-value={0} onClick={this.pointClick}>
				<div className={"clutch left" + (this.state.selected ? ' selected' : '')} onClick={this.clutchClick}>
					{this.state.atw == 6 &&
						<div className="atw" data-value="C" onClick={this.atwClick}></div>
					}
				</div>
				<div className="drop" onClick={this.dropClick}>DROP</div>
				<div className={"clutch right" + (this.state.selected ? ' selected' : '')} onClick={this.clutchClick}>
					{this.state.atw == 6 &&
						<div className="atw" data-value="C" onClick={this.atwClick}></div>
					}
				</div>
				<div className="one" data-value={1} onClick={this.pointClick}>
					{this.state.atw == 1 &&
						<div className="left atw" data-value="L1" onClick={this.atwClick}></div>
					}
					{this.state.atw == 5 &&
						<div className="right atw" data-value="R1" onClick={this.atwClick}></div>
					}
					<div className="three" data-value={3} onClick={this.pointClick}>
						{this.state.atw == 2 &&
							<div className="left atw" data-value="L3" onClick={this.atwClick}></div>
						}
						{this.state.atw == 4 &&
							<div className="right atw" data-value="R3" onClick={this.atwClick}></div>
						}
						<div className="five" data-value={5} onClick={this.pointClick}>
							{this.state.atw == 3 &&
								<div className="atw" data-value="BE" onClick={this.atwClick}></div>
							}
						</div>
					</div>
				</div>
			</div>
		);
	}

	set clutchMode(mode) {

		// Figure out the selected value
		var selected = null;
		switch(mode) {
			case 'none': selected = false; break;
			case 'expected': selected = true; break;
			case 'select': selected = this.state.selected; break;
		}

		// Set the new state
		this.setState({
			"clutchMode": mode,
			"selected": selected
		});
	}
}

// Export the component
module.exports = Board;
