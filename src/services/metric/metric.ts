import BaseService from '../base';

class Metric extends BaseService {
  getMetrics(siteId: number) {
    return `/sites/${siteId}/${this.url}`;
  }
}

export default Metric;
