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
		APP.login = false;

		// Make the component visible
		this.state.visible = true;
		this.setState(this.state);
	}

	// Add the login component to the APP
	APP.Components.Login = React.createClass({
		displayName: 'Login',

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
				"visible": this.props.visible ? this.props.visible : false
			};
		},

		render: function () {
			return React.createElement(
				'section',
				{ className: 'login', style: { "display": this.state.visible ? 'block' : 'none' } },
				React.createElement(
					'div',
					{ className: 'container' },
					React.createElement(
						'div',
						{ className: 'col-md-10 col-md-offset-1' },
						React.createElement(
							'form',
							{ ref: 'form', id: 'signin-form', action: '/signin', onSubmit: this.submit },
							React.createElement('input', { id: 'name', type: 'text', name: 'name', placeholder: 'Name', className: 'form-top' }),
							React.createElement('input', { id: 'password', type: 'password', name: 'passwd', placeholder: 'Password', className: 'form-bottom' }),
							React.createElement(
								'button',
								{ type: 'submit', className: 'button' },
								'Sign In'
							)
						)
					)
				)
			);
		},

		submit: function (ev) {

			// Never submit the form
			ev.preventDefault();

			// Toggle the overlay
			APP.overlay(true);

			// Get the form
			var f = this.refs.form;
			var j = $(f);

			// Submit the form via ajax
			var self = this;
			APP.ajaj(f.action, j.serialize(), function (res) {

				// Toggle the overlay
				APP.overlay(false);

				// If there's an error
				if (res.error) {

					// If it's 100 to 102
					if ([100, 101, 102].indexOf(res.error.code) != -1) {
						APP.error.show('Invalid email/password combination');
					}

					// If the account has been deactivated
					else if (res.error.code == 103) {
							APP.error.show('Your account has been deactivated');
						}

						// If the account needs verification
						else if (res.error.code == 104) {
								APP.error.show('Your account is still awaiting verification');
							}

							// Else, unknown error
							else {
									console.error(res.error);
									APP.error.show(res.error);
								}

					return;
				}

				// Add the success message
				APP.success.show('Welcome Back!');

				// Set the login to true
				APP.login = res.data[1];

				// Trigger the signin callbacks
				APP.trigger('signin');

				// Set the state to invisible
				self.state.visible = false;
			});
		}
	});

	//Call the closure with this
}).call(this);
