import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/fetchBaseQuery';
import { providesList } from '../helpers';

type BaseServiceProps = {
  getEntity: () => void;
  getEntities: () => void;
  updateEntity: () => void;
  addEntity: () => void;
  deleteEntity: () => void;
}

class BaseService implements BaseServiceProps {
  constructor(
    public url: string,
    public tagType: string,
  ) {
    this.url = url;
    this.tagType = tagType;
  }

  getEntity() {
    return {
      query: (id: number) => `${this.url}/${id}`,
      providesTags: (result: any[] | undefined, error: FetchBaseQueryError
        | undefined, id: number) => [{ type: this.tagType }],
    };
  }

  getEntities() {
    return {
      query: () => this.url,
      providesTags: (result: any[] | undefined) => providesList(result, this.tagType),
    };
  }

  updateEntity() {
    return {
      query: ({ id, ...patch }: { id: number }) => ({
        url: `${this.url}/${id}`,
        method: 'PATCH',
        body: patch,
      }),
      invalidatesTags: (result: void | undefined, error: FetchBaseQueryError
        | undefined, { id }: { id: number }) => [{ type: this.tagType, id }],
    };
  }

  addEntity() {
    return {
      query: <T>(body: T) => ({
        url: this.url,
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: this.tagType, id: 'LIST' }],
    };
  }

  deleteEntity() {
    return {
      query: (id: number) => ({
        url: `${this.url}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result: { success: boolean; id: number }
        | undefined, error: FetchBaseQueryError
          | undefined, id: number) => [{ type: this.tagType, id }],
    };
  }
}

export default BaseService;
