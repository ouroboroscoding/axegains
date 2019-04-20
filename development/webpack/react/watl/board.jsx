/**
 * WATL Board
 *
 * Manages a standard WATL board
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-19
 */

// Board component
class Board extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// If there's no onPoints prop
		if(!props.onPoints) {
			throw 'must specify onPoints property for WATL Board';
		}

		// Initialise the state
		this.state = {
			"mode": props.mode,
			"killshot": props.mode == 'expected_left' ? 'L' : (
							props.mode == 'expected_right' ? 'R' : false
						)
		};

		// Bind methods
		this.ksLeftClick = this.ksLeftClick.bind(this);
		this.ksRightClick = this.ksRightClick.bind(this);
		this.dropClick = this.dropClick.bind(this);
		this.pointClick = this.pointClick.bind(this);
	}

	ksLeftClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// If clutches are not allowed
		if(this.state.mode == 'none' ||
			this.state.mode == 'expected_right') {

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

		// Else if killshot right already selected
		else if(this.state.killshot == 'R') {

			// Switch which is selected
			this.setState({"killshot": 'L'});
		}

		else {

			if(this.state.killshot == 'L') {
				if(this.props.onPoints('L', 8) !== false) {
					if(this.state.mode == 'select') {
						this.setState({"killshot": false});
					}
				}
			} else {
				this.setState({"killshot": 'L'});
			}
		}
	}

	ksRightClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// If clutches are not allowed
		if(this.state.mode == 'none' ||
			this.state.mode == 'expected_left') {

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

		// Else if killshot right already selected
		else if(this.state.killshot == 'L') {

			// Switch which is selected
			this.setState({"killshot": 'R'});
		}

		else {

			if(this.state.killshot == 'R') {
				if(this.props.onPoints('R', 8) !== false) {
					if(this.state.mode == 'select') {
						this.setState({"killshot": false});
					}
				}
			} else {
				this.setState({"killshot": 'R'});
			}
		}
	}

	componentDidUpdate(prevProps) {
		if(prevProps.mode != this.props.mode) {
			this.mode = this.props.mode;
		}
	}

	dropClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// Store the current target
		var target = ev.currentTarget;

		// Send out the drop
		if(this.props.onPoints(this.state.killshot ? this.state.killshot : '0', 'd') !== false) {

			// De-select the killshots
			if(this.state.killshot) {
				this.setState({"killshot": false});
			}

			// Turn on the active flag
			target.className = 'drop active';

			// And set a timeout to turn it off
			setTimeout(function() {
				target.className = 'drop';
			}, 500);
		}
	}

	pointClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// Store the current target
		var target = ev.currentTarget;

		// Get the class names
		var classNames = target.className.split(' ');

		// If it's already active, do nothing
		if(classNames[1] && classNames[1] == 'active'){
			return;
		}

		// If there's a clutch selected
		var accepted = true;
		if(this.state.killshot) {
			accepted = this.props.onPoints(this.state.killshot, 0);
			if(accepted !== false) {
				this.setState({"killshot": false});
			}
		} else {
			accepted = this.props.onPoints('0', parseInt(target.dataset.value));
		}

		// If the points were not rejected accepted
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
				<div className="drop" onClick={this.dropClick}>DROP</div>
				<div className="one" data-value={1} onClick={this.pointClick}>
					<div className={"killshot left" + (this.state.killshot == 'L' ? ' selected' : '')} onClick={this.ksLeftClick} />
					<div className="two" data-value={2} onClick={this.pointClick}>
						<div className="three" data-value={3} onClick={this.pointClick}>
							<div className="four" data-value={4} onClick={this.pointClick}>
								<div className="six" data-value={6} onClick={this.pointClick} />
							</div>
						</div>
					</div>
					<div className={"killshot right" + (this.state.killshot == 'R' ? ' selected' : '')} onClick={this.ksRightClick} />
				</div>
			</div>
		);
	}

	set mode(mode) {

		// Figure out the killshot value
		var killshot = false;
		switch(mode) {
			case 'none': killshot = false; break;
			case 'expected_left': killshot = 'L'; break;
			case 'expected_right': killshot = 'R'; break;
			case 'select': killshot = this.state.killshot; break;
		}

		// Set the new state
		this.setState({
			"mode": mode,
			"killshot": killshot
		});
	}
}

// Export the component
module.exports = Board;
