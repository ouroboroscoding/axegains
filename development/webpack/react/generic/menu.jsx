/**
 * Menu Component
 *
 * A component to display a menu on the screen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-11
 */

// Create the Menu Component
class Menu extends React.PureComponent
{
	constructor(props) {

		// Call the parent
		super(props);

		// Set the base state
		this.state = {
			selected: this.props.selected
		};

		// If there's no close
		if(!this.props.onChange) {
			throw 'Menu requires onChange callback';
		}

		// Bind methods
		this.itemClick = this.itemClick.bind(this);
	}

	componentDidUpdate(prevProps) {
		if(prevProps.selected != this.props.selected) {
			this.setState({selected: this.props.selected});
		}
	}

	itemClick(name) {
		this.setState({selected: name}, () => {
			this.props.onChange(name);
		});
	}

	renderChildren() {
		var self = this;
		return React.Children.map(this.props.children, (child, i) => {
			var status = (self.state.selected == child.props.name) ? 'active' : '';
			return React.cloneElement(child, {
				onClick: self.itemClick,
				className: status
			});
		});
	}

	render() {
		return (
			<div className={this.props.className}>
				{this.renderChildren()}
			</div>
		);
	}

	get selected() {
		return this.state.selected;
	}

	set selected(n) {
		this.setState({selected: n})
	}
}

// Create the Menu Item Component
class Item extends React.PureComponent
{
	constructor(props) {

		// Call the parent
		super(props);

		// Set the base state
		this.state = {};

		// If there's no name
		if(!this.props.name) {
			throw 'Item requires name attribute';
		}

		// Bind methods
		this.click = this.click.bind(this);
	}

	click(ev) {
		ev.stopPropagation();
		ev.preventDefault();
		this.props.onClick(this.props.name);
	}

	render() {
		return (
			<span className={this.props.className} onClick={this.click}>
				{this.props.children}
			</span>
		);
	}
}

// Export components
module.exports = {
	"Menu": Menu,
	"Item": Item
}
