var React = require('react');

class NatfTarget extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {};

		// Bind methods
		this.scoreClick = this.scoreClick.bind(this);
	}

	render() {
		var self = this;
		return (
			<div className="board">
				<div className="clutches">
					<div className="left"></div>
					<div className="right"></div>
				</div>
				<div className="target">
					<div className="one">
						<div className="three">
							<div className="five">
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
