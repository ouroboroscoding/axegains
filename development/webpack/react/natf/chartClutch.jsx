/**
 * NATF Chart: Clutch
 *
 * Shows the chart for clutch throws
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-15
 */

// Clutch component
class ChartClutch extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {};

		// Chart
		this.chart = null;
	}

	componentDidMount() {
		this.chart = new Chart(this.refs.chart.getContext('2d'), {
			"type": "pie",
			"data": {
				"labels": ["Hits", "Misses", "Drops"],
				"datasets": [{
					"data": this.props.data,
					"backgroundColor": ["rgb(0,255,0,0.9)", "rgb(100,100,100,0.5)", "rgb(200,200,200,0.5)"]
				}]
			},
			"options": {
				"layout": {"padding": 0},
				"legend": {"display": false},
				"maintainAspectRatio": false,
				"responsive": true
			}
		});
	}

	componentDidUpdate(prevProps) {
		this.chart.data.datasets[0].data = this.props.data;
		this.chart.update();
	}

	render() {
		const { ref, data, ...rest } = this.props;
		return (
			<canvas
				{...rest}
				ref="chart"
			></canvas>
		);
	}
}

// Export the component
module.exports = ChartClutch;
