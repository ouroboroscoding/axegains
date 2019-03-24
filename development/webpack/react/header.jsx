// External modules
var React = require('react');

// Base components
var Forms = require('./base/forms.jsx');

// Generic modules
var Events = require('../generic/events.js');
var Services = require('../generic/services.js');

// Site modules
var Utils = require('../utils.js');

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
		this.signin = this.signin.bind(this);
		this.signinShow = this.signinShow.bind(this);
		this.signout = this.signout.bind(this);
		this.signup = this.signup.bind(this);
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
					{self.state.signup &&
						<div id="signup" className="form">
							<p><input ref="signup_alias" type="text" title="alias" placeholder="alias" onClick={Forms.errorFocus} /></p>
							<p><input ref="email" type="text" title="email" placeholder="email (not required)" onClick={Forms.errorFocus} /></p>
							<p><input ref="signup_passwd" type="password" title="password" placeholder="password" onClick={Forms.errorFocus} /></p>
							<p><input ref="repeat_passwd" type="password" title="repeat password" placeholder="repeat password" onClick={Forms.errorFocus} /></p>
							<p><button onClick={this.signup}>sign up</button></p>
						</div>
					}
				</div>
				<h1>AxeGains.com</h1>
			</header>
		);
	}

	signin(ev) {

	}

	signinShow(ev) {
		this.setState({"signin": true});
	}

	signout(ev) {

	}

	signup(ev) {

		// If the passwords don't match
		if(this.refs.signup_passwd.value != this.refs.repeat_passwd.value) {
			Forms.errorAdd(this.refs.repeat_passwd);
			Events.trigger('error', 'Passwords do not match');
			return;
		}

		// Store this
		var self = this;

		// Show loader
		Events.trigger('loader', true);

		// Init the data
		var oData = {
			"alias": this.refs.signup_alias.value,
			"passwd": this.refs.signup_passwd.value
		}

		// If there's an e-mail
		if(this.refs.email.value) {
			var email = this.refs.email.value.strip();
			if(email) {
				oData['email'] = email;
			}
		}

		// Call the signup
		Services.create('auth', 'signin', oData).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				var error = ' ';
				switch(res.error.code) {
					case 103:
						// Go through each message and make the ref red
						for(var i in res.error.msg) {
							if(i == 'alias') {
								i = 'signup_alias';
							} else if(i == 'passwd') {
								i = 'signup_passwd';
							}
							Forms.errorAdd(self.refs[i]);
						}
						break;
					case 400:
						Forms.errorAdd(self.refs['signup_alias']);
						Events.trigger('error', 'Alias is already in use');
						break;
					case 404:
						Forms.errorAdd(self.refs['signup_passwd']);
						Events.trigger('error', 'Password not strong enough');
						break;
					default:
						Events.trigger('error', JSON.stringify(res.error));
						break;
				}
			}

			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {

				// Set the session with the service
				Services.session(res.data);

				// Revert to sign in and show success message
				self.setState({
					"thrower": true
				})

				// Greet thrower
				Events.trigger('success', "Welcome to AxeGains " + oData.alias);
			}

		}).always(() => {
			// Hide loader
			Events.trigger('loader', false);
		});
	}

	signupShow(ev) {
		this.setState({"signup": !this.state.signup});
	}
}

// Export the component
module.exports = Header;
