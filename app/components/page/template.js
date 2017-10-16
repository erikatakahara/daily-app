import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Header from '../../molecules/header/template';
import Style from './style';

export default class Page extends Component {

  render(props) {
    return (
		<View style={ Style.page }>
			<Header title={ this.props.title } />
			<View>
				{ this.props.children }
			</View>
		</View>
    );
  }
}