import React, { Component } from 'react';
import Page from '../../components/page/template';
import Daily from '../../molecules/daily/template';

export default class Home extends Component {

	state = {
		dailyList: [
			{
				title: 'Segunda',
				data: {
					'GMV': {
						value: 10000.0,
						percentual: 0.222
					},
					'Visitas': {
						value: 20000.0,
						percentual: -0.333
					}
				}
			},

			{
				title: 'Terca',
				data: {
					'GMV': {
						value: 10000.0,
						percentual: 0.222
					},
					'Visitas': {
						value: 20000.0,
						percentual: -0.333
					}
				}
			}
		]
	}

  render() {
    return (
      <Page title='Home'>
      	<Daily dailyList={this.state.dailyList} />
      </Page>
    );
  }
}