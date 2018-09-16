"use strict";

(function () {

	// Set the root and store any previous package under the same name
	var r = this;
	var APP = r.APP;

	// If we have no components yet
	if (!APP.Components) {
		APP.Components = {};
	}

	function signout() {

		// Set the login to false
		APP.session = false;

		// Make the component visible
		this.state.visible = true;
		this.setState(this.state);
	}

	// Add the signin component to the APP
	APP.Components.Signin = React.createClass({
		displayName: 'Signin',

		componentDidMount: function () {},
		componentWillMount: function () {

			// Track any 'signout' special calls
			this.signoutCallback = signout.bind(this);
			APP.callback('signout', this.signoutCallback);
		},

		componentWillUnmount: function () {

			// Remove any tracked 'signout' special calls
			APP.removeCallback('signout', this.signoutCallback);
		},

		getInitialState: function () {

			// Init and return the state
			return {
				"mode": "signin",
				"visible": this.props.visible ? this.props.visible : false
			};
		},

		render: function () {
			return React.createElement(
				'div',
				{ id: 'signin', style: { "display": this.state.visible ? 'block' : 'none' } },
				this.state.mode == 'signin' ? React.createElement(
					'form',
					{ ref: 'signin', id: 'signin-form', action: '/rest/signin', onSubmit: this.signin },
					React.createElement('input', { type: 'text', name: 'user[name]', placeholder: 'Name' }),
					React.createElement('br', null),
					React.createElement('input', { type: 'password', name: 'user[passwd]', placeholder: 'Password', className: 'form-bottom' }),
					React.createElement('br', null),
					React.createElement(
						'div',
						null,
						React.createElement(
							'a',
							{ href: '#', onClick: this.signupShow },
							'Sign Up'
						),
						React.createElement(
							'button',
							{ type: 'submit', className: 'button' },
							'Sign In'
						)
					)
				) : React.createElement(
					'form',
					{ ref: 'signup', id: 'signup-form', action: '/rest/signup', onSubmit: this.signup },
					React.createElement('input', { type: 'text', name: 'user[name]', placeholder: 'Name' }),
					React.createElement('br', null),
					React.createElement('input', { type: 'text', name: 'user[email]', placeholder: 'Email (Optional)' }),
					React.createElement('br', null),
					React.createElement('input', { type: 'password', name: 'user[passwd]', placeholder: 'Password' }),
					React.createElement('br', null),
					React.createElement('input', { type: 'password', name: 'passwd-confirm', placeholder: 'Confirm Password' }),
					React.createElement('br', null),
					React.createElement(
						'div',
						null,
						React.createElement(
							'a',
							{ href: '#', onClick: this.signinShow },
							'Sign In'
						),
						React.createElement(
							'button',
							{ type: 'submit', className: 'button' },
							'Sign Up'
						)
					)
				)
			);
		},

		signin: function (ev) {

			// Never submit the form
			ev.preventDefault();

			// Toggle the overlay
			APP.overlay(true);

			// Get the form
			var f = this.refs.signin;
			var j = $(f);

			// Submit the form via ajax
			var self = this;
			APP.ajaj(f.action, j.serializeObject(), function (res) {

				// Toggle the overlay
				APP.overlay(false);

				// If there's an error
				if (res.error) {

					// If it's 100 to 102
					if ([100, 101, 102].indexOf(res.error.code) != -1) {
						APP.error.show('Invalid email/password combination');
					}

					// Else, unknown error
					else {
							console.error(res.error);
							APP.error.show(res.error);
						}

					return;
				}

				// If we got data
				if (res.data) {

					// Add the success message
					APP.success.show('Welcome Back!');

					// Set the login to true
					APP.session = res.data;

					// Trigger the signin callbacks
					APP.trigger('signin');

					// Set the state to invisible
					self.state.visible = false;
				}
			});
		},

		signinShow: function (ev) {
			ev.preventDefault();
			this.state.mode = 'signin';
			this.setState(this.state);
		},

		signup: function (ev) {

			// Never submit the form
			ev.preventDefault();

			// Toggle the overlay
			APP.overlay(true);

			// Get the form
			var f = this.refs.signup;
			var j = $(f);

			// Submit the form via ajax
			var self = this;
			APP.ajaj(f.action, j.serializeObject(), function (res) {

				// Toggle the overlay
				APP.overlay(false);

				// If there's an error
				if (res.error) {

					// If it's 100 to 102
					if (res.error.code == 100) {
						APP.error.show('User name already taken, sorry');
					}

					// If the email is invalid
					else if (res.error.code == 101) {
							APP.error.show('The email you passed is invalid');
						}

						// Else, unknown error
						else {
								console.error(res.error);
								APP.error.show(res.error);
							}

					return;
				}

				// If we got data
				if (res.data) {

					// Add the success message
					APP.success.show("*hacker voice* we're in");

					// Set the login to true
					APP.session = res.data;

					// Trigger the signin callbacks
					APP.trigger('signin');

					// Set the state to invisible
					self.state.visible = false;
				}
			});
		},

		signupShow: function (ev) {
			ev.preventDefault();
			this.state.mode = 'signup';
			this.setState(this.state);
		}
	});

	//Call the closure with this
}).call(this);
