// External modules
var React = require('react');

// Generic modules
var Events = require('../generic/events.js');
var Services = require('../generic/services.js');

// Header component
class Header extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"thrower": false
		};

		// Bind methods
		this.accountShow = this.accountShow.bind(this);
		this.signinShow = this.signinShow.bind(this);
		this.signout = this.signout.bind(this);
		this.signupShow = this.signupShow.bind(this);
	}

	accountShow(ev) {
		this.setState({"account": true});
	}

	render() {
		var self = this;
		return (
			<header>
				<div className="actions fright aright">
					{self.state.thrower ?
						<React.Fragment>
							<i className="far fa-user" title="Account" onClick={self.accountShow}></i>
							<i className="fas fa-power-off" title="Sign Out" onClick={self.signout}></i>
						</React.Fragment>
					:
						<React.Fragment>
							<i className="fas fa-user-plus" title="Create Account" onClick={self.signupShow}></i>
							<i className="fas fa-sign-in-alt" title="Sign In" onClick={self.signinShow}></i>
						</React.Fragment>
					}
					<br />
				</div>
				<h1>AxeGains.com</h1>
			</header>
		);
	}

	signinShow(ev) {
		this.setState({"signin": true});
	}

	signout(ev) {

	}

	signupShow(ev) {
		this.setState({"signup": true});
	}
}

// Export the component
module.exports = Header;
