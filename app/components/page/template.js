import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';

import Header from '../../molecules/header/template';
import Style from './style';

export default class Page extends Component {

  render(props) {
    return (
		<View style={ Style.page }>
			<Header title={ this.props.title } />
			<ScrollView>
				{ this.props.children }
			</ScrollView>
		</View>
    );
  }
}