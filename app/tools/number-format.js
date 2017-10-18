export default {

	currency: (value) => {
		let number = value.toFixed(2).split('.');
		number[0] = 'R$ ' + number[0].split(/(?=(?:...)*$)/).join('.').replace(/\.$/, '');
		return number.join(',');
	},

	percentual: (value) => {
		let number = (value * 100).toFixed(2);
		return number;
	}

}