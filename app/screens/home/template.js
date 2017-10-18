import React, { Component } from 'react';
import Page from '../../components/page/template';
import Daily from '../../molecules/daily/template';
import { Picker } from 'react-native';

import behavior from './behavior';
import style from './style';

export default class Home extends Component {

	state = {
		segments: ['MKT', 'TALK7'],
		current: 'MKT',
		dailyList: []
	}	

	componentWillMount() {
		behavior.initialState(this);
	}

	listPickers(segments) {
		return segments.map(segment =>
				<Picker.Item key={segment} label={segment} value={segment} />
		);
	}
	render() {
		return (
			<Page title='Daily'>
				
				<Picker
					style={style.segmentPicker}
					selectedValue={this.state.current}
					onValueChange={behavior.onSegmentChange(this)}
					mode='dropdown'>
					{this.listPickers(this.state.segments)}
				</Picker>

				<Daily dailyList={this.state.dailyList} />
			</Page>
		);
	}
}