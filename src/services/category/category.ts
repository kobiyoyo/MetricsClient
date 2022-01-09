import BaseService from '../base';

class Category extends BaseService {
  getCategories(siteId: number) {
    return `/sites/${siteId}/${this.url}`;
  }
}

export default Category;
