import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Style from './style';

export default class Header extends Component {

  render() {
    return (
      <View style={Style.header}>
        <Text style={Style.title}>{ this.props.title }</Text>

        <ScrollView contentContainerStyle={ Style.menu } horizontal showsHorizontalScrollIndicator={false}>
        	<Text style={ Object.assign({}, Style.menuItem, Style.activeMenuItem) }>Menu 1</Text>
        	<Text style={ Style.menuItem }>Menu 2</Text>
        	<Text style={ Style.menuItem }>Menu 3</Text>
        	<Text style={ Style.menuItem }>Menu 4</Text>
        	<Text style={ Style.menuItem }>Menu 5</Text>
        	<Text style={ Style.menuItem }>Menu 6</Text>
        </ScrollView>
      </View>
    );
  }
}