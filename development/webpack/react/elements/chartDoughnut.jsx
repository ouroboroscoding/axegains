/**
 * Chart: Doughnut
 *
 * Manages a Chart.js doughnut chart
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-13
 */

// Chart Doughnut component
class ChartDoughnut extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {}

		// Chart
		this.chart = null;
	}

	componentDidMount() {
		this.chart = new Chart(this.refs.chart.getContext('2d'), {
			"type": "pie",
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
		this.chart.data = this.props.data;
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
module.exports = ChartDoughnut;
