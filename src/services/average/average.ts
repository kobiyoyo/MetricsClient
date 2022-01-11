import BaseService from '../base';

class Average extends BaseService {
  getAverages(siteId: number) {
    return `/sites/${siteId}/${this.url}`;
  }
}

export default Average;
