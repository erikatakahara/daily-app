import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Style from './style';

import Card from '../../molecules/card/template';

export default class Cards extends Component {

  render() {
    return (
      <View style={Style.cards}>
      	<Card />
      	<Card />
      </View>
    );
  }
}