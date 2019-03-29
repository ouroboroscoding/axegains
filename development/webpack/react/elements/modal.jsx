/**
 * Model Component
 *
 * A component to display a modal box on the screen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-11
 */

// Modules
var React = require('react');

// Create the Component
class Modal extends React.PureComponent
{
	constructor(props) {

		// Call the parent
		super(props);

		// If there's no close
		if(!this.props.close) {
			throw 'Modal requires close callback';
		}

		// Bind methods
		this.buttonClick = this.buttonClick.bind(this);
		this.trapEscape = this.trapEscape.bind(this);
	}

	// If a button is pushed
	buttonClick(ev) {

		// Get the button using the index
		var btn = this.props.buttons[ev.currentTarget.dataset.index];

		// If there's a callback
		if(typeof btn.callback == 'function') {
			btn.callback(btn);
		} else {
			this.props.close();
		}
	}

	componentWillMount() {
		// Trap the escape key
		document.addEventListener('keydown', this.trapEscape);
	}

	componentWillUnmount() {
		// Stop trapping the escape key
		document.removeEventListener('keydown', this.trapEscape);
	}

	render() {

		// Store this
		var self = this;

		// Generate the styles
		var styles = {}
		if(this.props.height) styles.height = this.props.height;
		if(this.props.maxHeight) styles.maxHeight = this.props.maxHeight;
		if(this.props.maxWidth) styles.maxHeight = this.props.maxHeight;
		if(this.props.width) styles.width = this.props.width;

		// Return the HTML
		return (
			<div className="modal">
				<div className="cell">
					<div className="container" style={styles}>
						<div className="header">
							<i className="fas fa-window-close" onClick={this.props.close}></i>
							<span>{this.props.title}</span>
						</div>
						<div className="content">
							{this.props.children}
						</div>
						{this.props.buttons &&
							<div className="footer">
								{this.props.buttons.map(function(btn, i) {
									return (
										<button data-index={i} className="small" onClick={self.buttonClick} disabled={btn['disabled']}>{btn['name']}</button>
									)
								})}
							</div>
						}
					</div>
				</div>
			</div>
		);
	}

	// Traps ESC key clicks so we can close the Modal window
	trapEscape(ev) {
		if(ev.keyCode === 27) {
			this.props.close();
		}
	}
}

// Export the component
module.exports = Modal;
