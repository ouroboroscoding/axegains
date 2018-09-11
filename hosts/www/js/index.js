'use strict';

$(function() {

	// Render the LoginComponent
	ReactDOM.render(
		React.createElement(APP.Components.Login, {}),
		document.getElementById('react-login')
	);

	// Render the SessionComponent
	ReactDOM.render(
		React.createElement(APP.Components.Session, {}),
		document.getElementById('react-session')
	);

	// If we're logged in
	if(APP.login) {
		APP.trigger('signin');
	} else {
		APP.trigger('signout');
	}
})