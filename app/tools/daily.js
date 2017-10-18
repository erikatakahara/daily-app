import config from '../settings/config';
import mktDaily from '../../test/fixture/mkt-daily';
import t7Daily from '../../test/fixture/talk7-daily';

export default {
	week: (segment) => {
		if (config.mock) {
			return new Promise((resolve, reject) => {
				try {
					resolve(segment === 'MKT'? mktDaily : t7Daily);
				} catch(e) {
					reject(e);
				}
			});
		}
		return new Promise((resolve, reject) => {
			fetch(config.endpoint.daily).then(response => {
				resolve(JSON.parse(response.body));
			}).catch(e => {
				reject(e);
			});
		})
	}
}