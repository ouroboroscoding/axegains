/**
 * Thrower
 *
 * Manages editing details for the currently logged in thrower
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-25
 */

// Components
var Forms = require('./base/forms.jsx');

// Generic modules
var Events = require('../generic/events.js');
var Loader = require('../generic/loader.js');
var Services = require('../generic/services.js');

// Site modules
var Utils = require('../utils.js');

// Thrower component
class Thrower extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {
			"thrower": props.thrower
		};

		// Bind methods
		this.alias = this.alias.bind(this);
		this.email = this.email.bind(this);
		this.password = this.password.bind(this);
		this.org = this.org.bind(this);
	}

	alias() {

		// Get the alias
		var alias = this.refs.alias.value.trim();

		// If the alias is not long enough
		if(alias.length < 3 || alias.length > 32) {
			Forms.errorAdd(this.refs.alias);
			Events.trigger('error', 'Alias must be between 3 and 32 characters');
			return;
		}

		// Show the loader
		Loader.show();

		// Update the alias
		Services.update('auth', 'thrower/alias', {
			"alias": alias
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				var error = ' ';
				switch(res.error.code) {
					case 1001:
						Forms.errorAdd(this.refs.alias);
						break;
					case 1200:
						Forms.errorAdd(this.refs.alias);
						Events.trigger('error', 'Alias is already in use');
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

			// If we got success
			if(res.data) {

				// Notify
				Events.trigger('success', 'Successfully changed your alias.');

				// Let everyone know the alias changed
				this.state.thrower.alias = alias;
				Events.trigger('signin', this.state.thrower);
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	email() {

		// Show the loader
		Loader.show();

		// Update the email
		Services.update('auth', 'thrower/email', {
			"email": this.refs.email.value.trim(),
			"email_passwd": this.refs.email_passwd.value
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				var error = ' ';
				switch(res.error.code) {
					case 1001:
						Forms.errorAdd(this.refs.email);
						break;
					case 1206:
						Forms.errorAdd(this.refs['email']);
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

			// If we got success
			if(res.data) {

				// Notify
				Events.trigger('success', 'Successfully changed your email.');

				// Reset password
				this.refs.email_passwd.value = '';
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});

	}

	org() {

		// Save the org
		var org = this.refs.org.value;

		// Show the loader
		Loader.show();

		// Update the org
		Services.update('auth', 'thrower/org', {
			"org": org
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				var error = ' ';
				switch(res.error.code) {
					case 1001:
						Forms.errorAdd(this.refs.org);
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

			// If we got success
			if(res.data) {

				// Let everyone know the org changed
				this.state.thrower.org = org;
				this.setState({"thrower": this.state.thrower});
				Events.trigger('signin', this.state.thrower);
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	password() {

		// If the passwords don't match
		if(this.refs.new_passwd.value != this.refs.repeat_passwd.value) {
			Forms.errorAdd(this.refs.repeat_passwd);
			Events.trigger('error', 'Passwords do not match');
			return;
		}

		// Show loader
		Loader.show();

		// Send the old and new password
		Services.update('auth', 'thrower/passwd', {
			"passwd": this.refs.passwd.value,
			"new_passwd": this.refs.new_passwd.value
		}).done(res => {

			// If there's an error
			if(res.error && !Utils.serviceError(res.error)) {
				var error = ' ';
				switch(res.error.code) {
					case 1001:
						Forms.errorAdd(this.refs.passwd);
						Events.trigger('error', 'Invalid password');
						break;
					case 1204:
						Forms.errorAdd(this.refs.new_passwd);
						Events.trigger('error', 'New password not strong enough');
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

			// If we got success
			if(res.data) {

				// Notify
				Events.trigger('success', 'Successfully changed your password.');
			}

		}).always(() => {
			// Hide the loader
			Loader.hide();
		});
	}

	render() {
		return (
			<React.Fragment>
				<div className="form">
					<h3>Change Alias</h3>
					<p><input ref="alias" type="text" title="Alias" placeholder="Alias" defaultValue={this.state.thrower.alias} onFocus={Forms.errorFocus} /></p>
					<p className="aright"><button onClick={this.alias}>Change Alias</button></p>
				</div>
				<div className="form">
					<h3>Change Email</h3>
					<p><input ref="email" type="text" title="E-mail" placeholder="New e-mail" onFocus={Forms.errorFocus} autocomplete="new-email" /></p>
					<p><input ref="email_passwd" type="password" title="Password" placeholder="Your password" onFocus={Forms.errorFocus} autocomplete="new-email-password" /></p>
					<p className="aright"><button onClick={this.email}>Change E-mail</button></p>
				</div>
				<div className="form">
					<h3>Change Password</h3>
					<p><input ref="passwd" type="password" title="Old password" placeholder="Old password" onFocus={Forms.errorFocus} style={{marginBottom: "10px"}} /></p>
					<p><input ref="new_passwd" type="password" title="New password" placeholder="Enter your new password" onFocus={Forms.errorFocus} autocomplete="new-password" /></p>
					<p><input ref="repeat_passwd" type="password" title="Repeat new password" placeholder="Repeat your new password" onFocus={Forms.errorFocus} autocomplete="repeat-password" /></p>
					<p className="aright"><button onClick={this.password}>Change Password</button></p>
				</div>
				<div className="form">
					<h3>Change preferred organisation</h3>
					<p>
						<select ref="org" value={this.state.thrower.org} onChange={this.org}>
							<option value="natf">NATF</option>
							<option value="watl">WATL</option>
						</select>
					</p>
				</div>
			</React.Fragment>
		)
	}
}

// Export the component
module.exports = Thrower;
