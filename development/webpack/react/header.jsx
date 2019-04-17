/**
 * Header
 *
 * Manages sign in / sign out / sign up
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-21
 */

// Components
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
			"account": false,
			"forgot": false,
			"modal": false,
			"resend": false,
			"thrower": false
		};

		// Bind methods
		this.accountShow = this.accountShow.bind(this);
		this.forgotShow = this.forgotShow.bind(this);
		this.forgotEmailSubmit = this.forgotEmailSubmit.bind(this);
		this.forgotPasswordSubmit = this.forgotPasswordSubmit.bind(this);
		this.forgotResend = this.forgotResend.bind(this);
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
		this.setState({"account": !this.state.account});
	}

	componentWillMount() {

		// Track any signin/signout events
		Events.add('signin', this.signinTrigger);
		Events.add('signout', this.signoutTrigger);

		// If we have a forgot key in the hash
		var key = Hash.get('forgot')
		if(key) {
			this.setState({
				"forgot": key,
				"modal": "forgot"
			});
		}
	}

	componentWillUnmount() {

		// Stop tracking any signin/signout events
		Events.remove('signin', this.signinTrigger);
		Events.remove('signout', this.signoutTrigger);
	}

	forgotShow(ev) {

		// Remove the forgot hash
		Hash.set('forgot', null);

		// Set the new state
		this.setState({
			"forgot": false,
			"modal": this.state.modal == 'forgot' ? false : 'forgot'
		});
	}

	forgotEmailSubmit(ev) {

		// Check the e-mail field
		var email = this.refs.forgot_email.value.trim();

		// If it's missing or invalid
		if(!email) {
			Events.trigger('error', 'Please enter the e-mail address associated with your account');
			Forms.errorAdd(this.refs.forgot_email);
			return;
		}

		// Show loader
		Loader.show();

		// Create the params
		dParams = {
			"email": email
		}

		// If resend is set
		if(this.state.resend) {
			dParams['regenerate'] = true;
		}

		// Send the email to the service
		Services.create('auth', 'passwd/forgot', dParams).done(res => {

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

				// Notify
				Events.trigger('success', 'Submitted, please check your e-mail');

				// Change state
				this.setState({
					"forgot": '',
					"resend": false
				});
			}

		}).always(() => {
			// Hide loader
			Loader.hide();
		});
	}

	forgotPasswordSubmit(ev) {

		// If the key is missing
		var key = this.refs.key.value.trim();
		if(!key) {
			Events.trigger('error', 'Please enter the key you received by e-mail.');
			Forms.errorAdd(this.refs.key);
			return;
		}

		// If the passwords don't match
		if(this.refs.forgot_passwd.value != this.refs.forgot_repeat_passwd.value) {
			Events.trigger('error', 'Passwords do not match');
			Forms.errorAdd(this.refs.forgot_repeat_passwd);
			return;
		}

		// Store this
		var self = this;

		// Show the loader
		Loader.show();

		// Submit the key and new password to the service
		Services.update('auth', 'passwd/forgot', {
			"key": key,
			"passwd": this.refs.forgot_passwd.value
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {

				// If the key code is wrong
				if(res.error.code == 1203) {
					Events.trigger('error', 'Invalid key code. Either it was typed wrong, or it has expired.');
					Forms.errorAdd(this.refs.key);
				}

				// Else if the password is not strong enough
				else if(res.error.code == 1204) {
					Events.trigger('error', 'Password not strong enough');
					Forms.errorAdd(this.refs.forgot_passwd);
				}

				// Else, unknown error
				else {
					Events.trigger('error', JSON.stringify(res.error));
				}
			}

			// If there's a warning
			if(res.warning) {
				Events.trigger('warning', JSON.stringify(res.warning));
			}

			// If there's data
			if(res.data) {

				// Notify
				Events.trigger('success', 'Password successfully changed, please login.');

				// Change state
				self.setState({
					"forgot": false,
					"modal": false
				});

				// Hide the key in the hash if there is one
				Hash.set('forgot', null);
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	forgotResend() {
		this.setState({
			"forgot": false,
			"resend": true
		})
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
							<i className="fas fa-user" title="Account" onClick={self.accountShow}></i>
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
						<p className="fright"><button onClick={self.signin}>sign in</button></p>
						<p style={{paddingTop: "5px"}}>
							<span className="link" onClick={self.forgotShow}>Forgot Password</span>
						</p>
					</div>
				}
				{self.state.modal == 'signup' &&
					<div id="signup" className="form">
						<p><input ref="signup_alias" type="text" title="alias" placeholder="alias" onClick={Forms.errorFocus} /></p>
						<p><input ref="email" type="text" title="e-mail" placeholder="e-mail (not required)" onClick={Forms.errorFocus} /></p>
						<p><input ref="signup_passwd" type="password" title="password" placeholder="password" onClick={Forms.errorFocus} /></p>
						<p><input ref="repeat_passwd" type="password" title="repeat password" placeholder="repeat password" onClick={Forms.errorFocus} /></p>
						<p className="aright"><button onClick={self.signup}>sign up</button></p>
					</div>
				}
				{self.state.modal == 'forgot' &&
					<Modal
						close={self.forgotShow}
						key="forgot"
						title="Forgot Password"
						width="95%"
					>
						{self.state.forgot !== false ?
							<div key="code" className="form">
								<p><input ref="key" type="text" title="forgot password Key" placeholder="enter forgot password key" onFocus={Forms.errorFocus} autocomplete="off" defaultValue={self.state.forgot} /></p>
								<p><input ref="forgot_passwd" title="new password" placeholder="new password" type="password" onFocus={Forms.errorFocus} autocomplete="new-password" /></p>
								<p><input ref="forgot_repeat_passwd" title="repeat new password" placeholder="repeat new password" type="password" onFocus={Forms.errorFocus} autocomplete="repeat-password" /></p>
								<p className="fright"><button onClick={this.forgotPasswordSubmit}>Change Password</button></p>
								<p className="fleft" style={{paddingTop: "5px"}}>
									<span class="link" onClick={self.forgotResend}>Resend Key</span>
								</p>
							</div>
						:
							<div key="email" className="form">
								<p><input ref="forgot_email" type="text" title="Email" placeholder="enter e-mail associated with account" onClick={Forms.errorFocus} /></p>
								<p className="aright"><button onClick={this.forgotEmailSubmit}>Send E-mail</button></p>
							</div>
						}
					</Modal>
				}
				{self.state.account &&
					<Modal
						close={self.accountShow}
						key="account"
						title="Account"
						width="95%"
					>
						<Thrower thrower={self.state.thrower} />
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

		// Get the alias
		var alias = this.refs.signup_alias.value.trim();

		// If the alias is not long enough
		if(alias.length < 3 || alias.length > 32) {
			Forms.errorAdd(this.refs.signup_alias);
			Events.trigger('error', 'Alias must be between 3 and 32 characters');
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
			"alias": alias,
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
						Events.trigger('error', 'E-mail already in use');
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

				// Revert to sign in and show success message
				self.setState({
					"modal": false,
					"thrower": res.data.thrower
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
