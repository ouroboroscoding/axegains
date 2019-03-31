/**
 * Messages
 *
 * Shows a message with buttons to accept, dismiss, etc
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-31
 */

// External
var React = require('react');

// Generic
var Events = require('../../generic/events.js');
var Tools = require('../../generic/tools.js');

// Make sure there isn't more than one Messages
var _instance = false;

// Create the message component
class Message extends React.Component {

	constructor(props) {

		// Call the parent
		super(props);

		// Set the initial state
		this.state = {};

		// Bind methods
		this.button = this.button.bind(this);
	}

	button(ev) {

		// Go through all the buttons
		for(var b of this.props.buttons) {

			// Find the one clicked
			if(b.name == ev.currentTarget.dataset.name) {

				// Call it's callback, if it returns successful, remove the msg
				if(b.callback()) {
					this.props.close(this.props.id);
				}
			}
		}
	}

	render() {
		return (
			<div className="message">
				<p>{this.props.text}</p>
				<div className="buttons">
					{this.props.buttons.map(function(b, i) {
						return <button data-name={b.name} onClick={this.button}>{b.title}</button>
					})}
				</div>
			</div>
		);
	}
}

// Create the primary component
class Messages extends React.Component {

	constructor(props) {

		// Call the parent
		super(props);

		// If we already have an instance
		if(_instance) {
			throw 'Can\'t have more than one Messages';
		}
		_instance = true;

		// Set the initial state
		this.state = {
			messages: []
		};

		// Bind methods
		this.message = this.message.bind(this);
	}

	componentWillMount() {
		// Track any message events
		Events.add('message', this.message);
	}

	componentWillUnmount() {
		// Stop tracking any message events
		Events.remove('message', this.message);
	}

	message(conf) {

		// Clone the messages
		var msgs = Tools.clone(this.state.messages);

		// Push the new message
		msgs[Tools.uuidv4()] = conf;

		// Set the state
		this.setState({"messages": msgs});
	}

	close(id) {

		// Clone the messages
		var msgs = Tools.clone(this.state.messages);

		// Delete the message
		delete msgs[id];

		// Set the state
		this.setState({"messages": msgs});
	}

	render() {
		var self = this;
		return (
			<div id="messages">
				{Tools.omap(this.state.messages, function(m, k) {
					return <Message {...m} key={k} id={k} close={self.close} />
				})}
			</div>
		);
	}
}

// Export the Component
module.exports = Messages
