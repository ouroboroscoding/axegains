'use strict';

(function() {

	// Render the LoginComponent
	Components.ReactDOM.render(
		Components.React.createElement(Components.NATF.Board, {
			"clutch": "select",
			"onPoint": function(value) {
				console.log(value);
			}
		}),
		document.getElementById('main')
	);
})();
