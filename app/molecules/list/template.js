import React, { Component } from 'react';
import { Text, View, ListView } from 'react-native';
import Style from './style';
import NumberFormatter from './../../tools/number-format';

// <Text style={Style.value}>{NumberFormatter.currency(data[header].value)}</Text>
// <Text style={data[header].percentual >= 0? Style.positive : Style.negative}>({NumberFormatter.percentual(data[header].percentual)}%)</Text>
export default class List extends Component {

	renderLines(data) {
		const keys = Object.keys(data);
		return keys.map(header => 
			<View key={header} style={Object.assign({}, Style.tr, (keys.length - 1) == keys.indexOf(header)? {} : Style.line)}>
				<Text style={Style.th}>{header}</Text>
				<View style={Style.td}>
					<Text style={Style.value}>{NumberFormatter.currency(data[header])}</Text>
				</View>
			</View>
		);
	}

	render() {
		return (
			<View style={Style.list}>
				{this.renderLines(this.props.data)}
			</View>
		);
	}
}