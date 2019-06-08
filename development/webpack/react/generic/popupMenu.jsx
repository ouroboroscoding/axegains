/**
 * Popup Menu
 *
 * An item that when clicked, shows the child elements
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-05-23
 */

// Create the button component
class PopupMenuButton extends React.PureComponent {

	constructor(props) {

		super(props);

		// Set the initial state
		this.state = {};
	}

	render() {
		return (
			<div style={{"display": "inline-block"}} onClick={this.props.onClick}>
				{this.props.children}
			</div>
		);
	}
}

// Create the content component
class PopupMenuContent extends React.PureComponent {

	constructor(props) {

		super(props);

		// Set the initial state
		this.state = {
			"position": props.position
		};

		// Bind methods
		this.checkViewport = this.checkViewport.bind(this);
		this.click = this.click.bind(this);
	}

	checkViewport() {

		// Get the window width and height
		var width = window.innerWidth;
		var height = window.innerHeight;

		// Get the contents dimensions
		var rect = this.refs.content.getBoundingClientRect();

		// If the bottom is below the height
		if(rect.bottom > height) {
			this.refs.content.style.top = (height - rect.height) + 'px';
		}

		// If the right is past the width
		if(rect.right > width) {
			this.refs.content.style.left = (width - rect.width) + 'px';
		}
	}

	click(ev) {
		// If the click was outside the content
		if(!ReactDOM.findDOMNode(this.refs.content).contains(ev.target)) {
			this.props.onClick();
		}
	}

	componentDidMount() {

		// Track outside clicks
		document.addEventListener("click", this.click, false);
	}

	componentDidUpdate(prevProps) {
		if(prevProps.position != this.props.position) {
			this.setState({"position": this.props.position});
		}
	}

	componentWillUnmount() {

		// Stop tracking clicks
		document.removeEventListener("click", this.click, false);
	}

	render() {

		setTimeout(this.checkViewport, 0);

		// Set the style
		var style = {
			"left": this.state.position.left,
			"position": "fixed",
			"top": this.state.position.top
		}

		// If there are offsets
		if(this.props.offsetLeft) {
			style.left += this.props.offsetLeft;
		}
		if(this.props.offsetTop) {
			style.top += this.props.offsetTop;
		}

		// Return the content
		return (
			<div ref="content" className={this.props.className} style={style}>
				{this.props.children}
			</div>
		);
	}

	toggle() {
		this.setState({"visible": !this.state.visible});
	}

	get visible() {
		return this.state.visible ? true : false;
	}

	set visible(vis) {
		this.setState({"visible": vis});
	}
}

// Create the Component
class PopupMenu extends React.PureComponent {

	constructor(props) {

		super(props);

		// Set the initial state
		this.state = {
			"position": false
		};

		// Bind methods
		this.button = this.button.bind(this);
		this.content = this.content.bind(this);
	}

	button(ev) {

		// If we have a position
		if(this.state.position) {

			// Hide the content
			this.setState({"position": false});
		}

		// Else, not currently visible
		else {

			// Store the top and left positions for the content
			this.setState({"position": {
				"top": ev.clientY,
				"left": ev.clientX
			}});
		}
	}

	content() {
		this.setState({"position": false});
	}

	render() {

		// Store this
		var self = this;

		// Make sure we have only one button/content type
		var button = false;
		var content = false;

		return (
			<React.Fragment>
				{React.Children.map(this.props.children, (child, i) => {

					// If we got a button type
					if(child.type == PopupMenuButton) {

						// If we already have one
						if(button) {
							throw 'Can only have one button element in a PopupMenu';
						}
						button = true;

						return React.cloneElement(child, {
							"onClick": self.button
						})
					}

					// Else if we got content
					else if(child.type == PopupMenuContent) {

						// If we already have one
						if(content) {
							throw 'Can only have one content element in a PopupMenu';
						}
						content = true;

						// If we have a position
						if(self.state.position) {
							return React.cloneElement(child, {
								"onClick": self.content,
								"position": self.state.position
							});
						}
					}

					// Else it's invalid
					else {
						throw 'Invalid element type passed to PopupMenu';
					}
				})}
			</React.Fragment>
		);
	}
}

// Add the child types to the primary component
PopupMenu.Button = PopupMenuButton;
PopupMenu.Content = PopupMenuContent;

// Export the component
module.exports = PopupMenu;
