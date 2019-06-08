/**
 * Header
 *
 * Manages sign in / sign out / sign up
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-21
 */

// Generic modules
var Hash = require('../generic/hash.js');

// Header component
class Header extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {};

		// Bind methods
		this.home = this.home.bind(this);
	}

	home() {
		Hash.set({
			"org": null,
			"page": null
		});
	}

	render() {
		var self = this;
		return (
			<header>
				<img className="logo" src={"//static." + window.location.hostname + "/images/logo_small.png"} alt="AxeGains.com" onClick={this.home} />
				<div className="subtitle">By <a href="http://ouroboroscoding.com/" target="_blank">OuroborosCoding</a></div>
			</header>
		);
	}
}

// Export the component
module.exports = Header;
