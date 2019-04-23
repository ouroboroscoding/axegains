/**
 * WATL Chart: Regular
 *
 * Shows the chart for regular (target) throws
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-18
 */

// Regular component
class ChartRegular extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {};

		// Chart
		this.chart = null;

		// Titles
		this.titles = ["Sixes", "Fours", "Threes", "Twos", "Ones", "Zeros", "Drops"];
	}

	calculateTitles() {
		var ret = [];
		var sum = this.props.data.reduce((p,i) => p+i);
		for(var i = 0; i < 7; ++i) {
			ret.push(this.titles[i] + ' ' + (sum == 0 ? '0.0' : ((this.props.data[i] / sum) * 100.0).toFixed(1)) + '% ');
		}
		return ret;
	}

	componentDidMount() {
		this.chart = new Chart(this.refs.chart.getContext('2d'), {
			"type": "pie",
			"data": {
				"labels": this.calculateTitles(),
				"datasets": [{
					"data": this.props.data,
					"backgroundColor": ["rgb(255,0,0,0.9)", "rgb(30,30,30,0.9)", "rgb(60,60,60,0.9)", "rgb(90,90,90,0.9)", "rgb(120,120,120,0.9)", "rgb(150,150,150,0.5)", "rgb(200,200,200,0.5)"]
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
module.exports = ChartRegular;
