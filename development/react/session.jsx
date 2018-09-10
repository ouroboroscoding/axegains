"use strict";
(function() {

	// Set the root and store any previous package under the same name
	var	r = this;
	var APP = r.APP;

	// If we have no components yet
	if(!APP.Components) {
		APP.Components = {}
	}

	// Add the login component to the APP
	App.Components.Session = React.createClass({
		close: function() {
			this.state.visible = false;
			this.setState(this.state);

			// Inform someone the window is closing
			APP.trigger('close_session');
		},

		getInitialState: function() {

			// Javascript is awesome (but nodejs sucks balls)
			var self = this;

			// Track any 'signin'/'signout' special calls
			APP.callback('signout', this.close);
			APP.callback('open_session', this.open);

			// Init and return the state
			return {
				"values": false,
				"visible": this.props.visible ?
							this.props.visible :
							false
			};
		},

		open: function(thread) {

			// Store this
			var self = this;

			// Change the state to visible
			this.state.visible = true;
			this.setState(this.state);
		},

		render: function() {
			var self = this;
			return (
				<div id="session" style={{"display": (this.state.visible ? 'block':'none')}}>
					<input type="button" onClick={this.new} value="New Session" />
					{this.state.values !== false ?
						<input type="button" onClick={this.reset} value="Reset Session" />
						<input type="button" onClick={this.store} value="Store Session" />
						<input type="button" onClick={this.throw} data-value="d" value="Drop" />
						<input type="button" onClick={this.throw} data-value="0" value="Zero" />
						<input type="button" onClick={this.throw} data-value="1" value="One" />
						<input type="button" onClick={this.throw} data-value="3" value="Three" />
						<input type="button" onClick={this.throw} data-value="5" value="Bullseye" />
						<input type="button" onClick={this.throw} data-value="7" value="Clutch" />
						<input type="button" onClick={this.throw} data-value="cd" value="Clutch Drop" />
						<input type="button" onClick={this.throw} data-value="c0" value="Clutch Miss" />

					:

						<input type="button" onClick={this.new} value="New Session" />
					}

				</div>
			);
		}
	});