import React, { Component } from 'react';
import Page from '../../components/page/template';
import Cards from '../../molecules/cards/template';

export default class Home extends Component {

  render() {
    return (
      <Page title='Home'>
      	<Cards />
      </Page>
    );
  }
}