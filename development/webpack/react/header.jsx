/**
 * Header
 *
 * Manages sign in / sign out / sign up
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-21
 */

// components
var Forms = require('./base/forms.jsx');
var Modal = require('./elements/modal.jsx');
var Thrower = require('./thrower.jsx');

// Generic modules
var Events = require('../generic/events.js');
var Hash = require('../generic/hash.js');
var Loader = require('../generic/loader.js');
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
			"modal": false,
			"thrower": false
		};

		// Bind methods
		this.accountShow = this.accountShow.bind(this);
		this.home = this.home.bind(this);
		this.signin = this.signin.bind(this);
		this.signinShow = this.signinShow.bind(this);
		this.signinTrigger = this.signinTrigger.bind(this);
		this.signout = this.signout.bind(this);
		this.signoutTrigger = this.signoutTrigger.bind(this);
		this.signup = this.signup.bind(this);
		this.signupShow = this.signupShow.bind(this);
	}

	accountShow(ev) {
		this.setState({"modal": this.state.modal == "account" ? false : 'account'});
	}

	componentWillMount() {

		// Track any signin/signout events
		Events.add('signin', this.signinTrigger);
		Events.add('signout', this.signoutTrigger);
	}

	componentWillUnmount() {

		// Stop tracking any signin/signout events
		Events.remove('signin', this.signinTrigger);
		Events.remove('signout', this.signoutTrigger);
	}

	home() {
		Hash.set("page", null);
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
				<h1 style={{"cursor": "pointer"}} onClick={this.home}>AxeGains.com</h1>
				{self.state.modal == 'signin' &&
					<div id="signin" className="form">
						<p><input ref="alias" type="text" title="alias" placeholder="alias" onClick={Forms.errorFocus} /></p>
						<p><input ref="passwd" type="password" title="password" placeholder="password" onClick={Forms.errorFocus} /></p>
						<p className="aright"><button onClick={self.signin}>sign in</button></p>
					</div>
				}
				{self.state.modal == 'signup' &&
					<div id="signup" className="form">
						<p><input ref="signup_alias" type="text" title="alias" placeholder="alias" onClick={Forms.errorFocus} /></p>
						<p><input ref="email" type="text" title="email" placeholder="email (not required)" onClick={Forms.errorFocus} /></p>
						<p><input ref="signup_passwd" type="password" title="password" placeholder="password" onClick={Forms.errorFocus} /></p>
						<p><input ref="repeat_passwd" type="password" title="repeat password" placeholder="repeat password" onClick={Forms.errorFocus} /></p>
						<p className="aright"><button onClick={self.signup}>sign up</button></p>
					</div>
				}
				{self.state.modal == 'account' &&
					<Modal
						title="Account"
						close={self.accountShow}
						width="95%"
					>
						<Thrower />
					</Modal>
				}
			</header>
		);
	}

	signin(ev) {

		// Store this
		var self = this;

		// Show loader
		Loader.show();

		// Store the alias
		var alias = this.refs.alias.value;

		// Call the signin
		Services.create('auth', 'signin', {
			"alias": alias,
			"passwd": this.refs.passwd.value
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				var error = ' ';
				switch(res.error.code) {
					case 1001:
						// Go through each message and make the ref red
						for(var i in res.error.msg) {
							Forms.errorAdd(self.refs[i]);
						}
						break;
					case 1201:
						Events.trigger('error', 'Alias or password invalid');
						break;
					case 1204:
						Forms.errorAdd(self.refs['signup_passwd']);
						Events.trigger('error', 'Password not strong enough');
						break;
					default:
						Events.trigger('error', JSON.stringify(res.error));
						break;
				}
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {

				// Set the session with the service
				Services.session(res.data.session);

				// Greet thrower
				Events.trigger('success', "Welcome back to AxeGains " + alias);

				// Trigger the signin event
				Events.trigger('signin', res.data.thrower);
			}

		}).always(() => {
			// Hide loader
			Loader.hide();
		});
	}

	signinShow(ev) {
		this.setState({"modal": (this.state.modal == 'signin' ? false : 'signin')});
	}

	signinTrigger(thrower) {

		// Hide any modals and set the thrower
		this.setState({
			"modal": false,
			"thrower": thrower
		});
	}

	signout(ev) {

		// Store this
		var self = this;

		// Show loader
		Loader.show();

		// Call the signout
		Services.create('auth', 'signout', {}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				Events.trigger('error', JSON.stringify(res.error));
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {

				// Reset the session
				Services.session(null);

				// Trigger the signout event
				Events.trigger('signout');
			}
		}).always(() => {
			// Hide loader
			Loader.hide();
		});
	}

	signoutTrigger() {

		// Hide and modals and set the thrower to false
		this.setState({
			"modal": false,
			"thrower": false
		});
	}

	signup(ev) {

		// If the alias is not long enough
		if(this.refs.signup_alias.trim().length < 3) {
			Forms.errorAdd(this.refs.signup_alias);
			Events.trigger('error', 'Alias must be at least 3 characters');
			return;
		}

		// If the passwords don't match
		if(this.refs.signup_passwd.value != this.refs.repeat_passwd.value) {
			Forms.errorAdd(this.refs.repeat_passwd);
			Events.trigger('error', 'Passwords do not match');
			return;
		}

		// Store this
		var self = this;

		// Show loader
		Loader.show();

		// Init the data
		var oData = {
			"alias": this.refs.signup_alias.value.trim(),
			"passwd": this.refs.signup_passwd.value
		}

		// If there's an e-mail
		if(this.refs.email.value) {
			var email = this.refs.email.value.trim();
			if(email) {
				oData['email'] = email;
			}
		}

		// Call the signup
		Services.create('auth', 'signup', oData).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				var error = ' ';
				switch(res.error.code) {
					case 1001:
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
					case 1200:
						Forms.errorAdd(self.refs['signup_alias']);
						Events.trigger('error', 'Alias is already in use');
						break;
					case 1204:
						Forms.errorAdd(self.refs['signup_passwd']);
						Events.trigger('error', 'Password not strong enough');
						break;
					case 1206:
						Forms.errorAdd(self.refs['email']);
						Events.trigger('error', 'E-Mail already in use');
						break;
					default:
						Events.trigger('error', JSON.stringify(res.error));
						break;
				}
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {

				// Set the session with the service
				Services.session(res.data.thrower._id);

				// Revert to sign in and show success message
				self.setState({
					"modal": false,
					"thrower": true
				});

				// Greet thrower
				Events.trigger('success', "Welcome to AxeGains " + res.data.thrower.alias);

				// Trigger the signin event
				Events.trigger('signin', res.data.thrower);
			}

		}).always(() => {
			// Hide loader
			Loader.hide();
		});
	}

	signupShow(ev) {
		this.setState({"modal": (this.state.modal == 'signup' ? false : 'signup')});
	}
}

// Export the component
module.exports = Header;
