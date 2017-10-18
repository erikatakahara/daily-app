import Daily from '../../tools/daily';

export default {
	onSegmentChange: (component) => {
		return (itemValue, itemIndex) => {
			Daily.week(itemValue).then(daily => {
				component.setState(daily);
			});
		}
	},

	initialState: (component) => {
		Daily.week(component.state.current).then(daily => {
			component.setState(daily);
		});
	}
}