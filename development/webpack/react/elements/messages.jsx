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

		// Call the callback associated, if it returns successful, remove the
		//	message
		if(this.props.buttons[ev.currentTarget.dataset.index].callback(this.props.id)) {
			this.props.remove(this.props.id);
		}
	}

	render() {
		var self = this;
		return (
			<div className="message">
				<p>{self.props.text}</p>
				<div className="buttons">
					{self.props.buttons.map(function(b, i) {
						return <button key={i} data-index={i} onClick={self.button}>{b.title}</button>
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
		this.remove = this.remove.bind(this);
	}

	componentWillMount() {
		// Track any message events
		Events.add('message', this.message);
		Events.add('message_remove', this.remove);
	}

	componentWillUnmount() {
		// Stop tracking any message events
		Events.remove('message', this.message);
		Events.remove('message_remove', this.remove);
	}

	message(id, conf) {

		// Clone the messages
		var msgs = Tools.clone(this.state.messages);

		// Push the new message
		msgs[id] = conf;

		// Set the state
		this.setState({"messages": msgs});
	}

	remove(id) {

		// Clone the messages
		var msgs = Tools.clone(this.state.messages);

		// Remove the requested ID
		delete msgs[id];

		// Set the state
		this.setState({"messages": msgs});
	}

	render() {
		var self = this;
		return (
			<div id="messages">
				{Tools.omap(this.state.messages, function(m, k) {
					return <Message {...m} key={k} id={k} remove={self.remove} />
				})}
			</div>
		);
	}
}

// Export the Component
module.exports = Messages
