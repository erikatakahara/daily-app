import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Style from './style';

import Card from '../../molecules/card/template';
import List from '../../molecules/list/template';

export default class Daily extends Component {

	renderList(dailyList) {
		return dailyList.map(daily =>
			<Card key={daily.title} title={daily.title}>
				<List data={daily.data} />
			</Card>
		);
	}

	render() {
		return (
			<View style={Style.cards}>
				{this.renderList(this.props.dailyList)}
			</View>
		);
	}
}