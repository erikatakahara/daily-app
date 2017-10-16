import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Style from './style';

export default class Card extends Component {

  render() {
    return (
      <View style={Style.card}>
      	<Text style={Style.title}>{this.props.title}</Text>
      	{this.props.children}
      </View>
    );
  }
}