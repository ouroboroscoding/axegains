'use strict';

$(function() {

	// Render the LoginComponent
	ReactDOM.render(
		React.createElement(APP.Components.Signin, {}),
		document.getElementById('react-signin')
	);

	// Render the SessionComponent
	ReactDOM.render(
		React.createElement(APP.Components.Session, {}),
		document.getElementById('react-session')
	);

	// If we're logged in
	if(APP.session) {
		APP.trigger('signin');
	} else {
		APP.trigger('signout');
	}
})