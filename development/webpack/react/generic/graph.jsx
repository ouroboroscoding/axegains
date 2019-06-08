/**
 * Graph
 *
 * Creates a line chart
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-22
 */

// Graph component
class Graph extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {};

		// Graph
		this.graph = null;
	}

	componentDidMount() {
		this.graph = new Chart(this.refs.graph.getContext('2d'), {
			"type": "line",
			"data": this.props.data,
			"options": {
				"layout": {"padding": 0},
				"legend": {"display": false},
				"maintainAspectRatio": false,
				"responsive": true
			}
		});
	}

	componentDidUpdate(prevProps) {
		this.graph.data = this.props.data;
		this.graph.update();
	}

	render() {
		const { ref, data, ...rest } = this.props;
		return (
			<canvas
				{...rest}
				ref="graph"
			></canvas>
		);
	}
}

// Export the component
module.exports = Graph;
