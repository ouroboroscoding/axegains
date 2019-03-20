var React = require('react');

class Board extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// If there's no

		// Initialise the state
		this.state = {
			"clutch": props.clutch,
			"selected": false
		};

		// Bind methods
		this.clutchClick = this.clutchClick.bind(this);
		this.dropClick = this.dropClick.bind(this);
		this.scoreClick = this.scoreClick.bind(this);
	}

	clutchClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// If clutches are not allowed
		if(this.state.clutch == 'no') {

			// Store the current target
			var target = ev.currentTarget;

			// Get the class name
			var className = target.className;

			// Set the invalid class
			target.className = className + ' invalid';

			// And set a timeout to turn it off
			setTimeout(function() {
				target.className = className;
			}, 2000);

			// Don't count the click
			return;
		}

		else {

			if(this.state.selected) {
				this.props.onPoint(7);
				this.resetClutch();
			} else {
				this.setState({"selected": true});
			}
		}
	}

	dropClick(ev) {

		// Stop propagation no matter what
		ev.stopPropagation();

		// Store the current target
		var target = ev.currentTarget;

		// Send out the drop
		this.props.onPoint('d');

		// De-select the clutch if there's one selected
		if(this.state.selected) {
			this.resetClutch();
		}

		// Turn on the active flag
		target.className = 'drop active';

		// And set a timeout to turn it off
		setTimeout(function() {
			target.className = 'drop';
		}, 2000);
	}

	resetClutch() {

		// If the mode is selected
		if(this.state.clutch == 'select') {
			this.setState({"selected": false});
		}
	}

	scoreClick(ev) {

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
		if(this.state.selected) {
			this.props.onPoint(0);
			this.resetClutch();
		} else {
			this.props.onPoint(target.dataset.value);
		}

		// Turn on the active flag
		target.className = classNames[0] + ' active';

		// And set a timeout to turn it off
		setTimeout(function() {
			target.className = classNames[0];
		}, 2000);
	}

	render() {
		var self = this;
		return (
			<div className="board" data-value={0} onClick={self.scoreClick}>
				<div className={"clutch left" + (self.state.selected ? ' selected' : '')} onClick={self.clutchClick}></div>
				<div className="drop" onClick={self.dropClick}>DROP</div>
				<div className={"clutch right" + (self.state.selected ? ' selected' : '')} onClick={self.clutchClick}></div>
				<div className="one" data-value={1} onClick={self.scoreClick}>
					<div className="three" data-value={3} onClick={self.scoreClick}>
						<div className="five" data-value={5} onClick={self.scoreClick}></div>
					</div>
				</div>
			</div>
		);
	}
}

// Export the component
module.exports = Board;
