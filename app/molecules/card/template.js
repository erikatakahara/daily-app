import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Style from './style';

export default class Card extends Component {

  render() {
    return (
      <View style={Style.card}>
      	<Text>This is a card</Text>
      </View>
    );
  }
}