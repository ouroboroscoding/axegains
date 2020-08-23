/**
 * IATF Pie: Regular
 *
 * Shows the pie chart for regular (target) throws
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-04-15
 */

// Regular component
class PieRegular extends React.Component {

	constructor(props) {

		// Call the parent constructor
		super(props);

		// Initialise the state
		this.state = {};

		// Pie
		this.pie = null;

		// Titles
		this.titles = ["Fives", "Threes", "Ones", "Zeros", "Drops"];
	}

	calculateTitles() {
		var ret = [];
		var sum = this.props.data.reduce((p,i) => p+i);
		for(var i = 0; i < 5; ++i) {
			ret.push(this.titles[i] + ' ' + (sum == 0 ? '0.0' : ((this.props.data[i] / sum) * 100.0).toFixed(1)) + '% ');
		}
		return ret;
	}

	componentDidMount() {
		this.pie = new Chart(this.refs.pie.getContext('2d'), {
			"type": "pie",
			"data": {
				"labels": this.calculateTitles(),
				"datasets": [{
					"data": this.props.data,
					"backgroundColor": ["rgb(0,0,0,0.9)", "rgb(255,0,0,0.9)", "rgb(0,0,255,0.9)", "rgb(100,100,100,0.5)", "rgb(200,200,200,0.5)"]
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
		this.pie.data.datasets[0].data = this.props.data;
		this.pie.update();
	}

	render() {
		const { ref, data, ...rest } = this.props;
		return (
			<canvas
				{...rest}
				ref="pie"
			></canvas>
		);
	}
}

// Export the component
module.exports = PieRegular;
