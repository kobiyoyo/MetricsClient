type BaseServiceProps = {
    getEntity: (id: number) => string;
    getEntities:() => string;
    updateEntity<T>(id:number, body: T): void;
    addEntity<T>(body: T): void;
    deleteEntity: (id: number) => void;
}

class BaseService implements BaseServiceProps {
  constructor(
      public url: string,
      public tagType: string,
  ) {
    this.url = url;
    this.tagType = tagType;
  }

  getEntity(id: number) {
    return `${this.url}/${id}`;
  }

  getEntities() {
    return this.url;
  }

  updateEntity<T>(id: number, body: T) {
    return {
      url: `${this.url}/${id}`,
      method: 'PATCH',
      body,
    };
  }

  // addEntity() {
  //   return {
  //     query: (body: any) => ({
  //       url: this.url,
  //       method: 'POST',
  //       body,
  //     }),
  //     invalidatesTags: [{ type: this.tagType, id: 'LIST' }],
  //   };
  // }

  addEntity<T>(body: T) {
    return {
      url: this.url,
      method: 'POST',
      body,
    };
  }

  deleteEntity(id: number) {
    return {
      url: `${this.url}/${id}`,
      method: 'DELETE',
    };
  }
}

export default BaseService;
