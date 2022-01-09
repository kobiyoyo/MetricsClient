/* eslint-disable import/prefer-default-export */
import { providesList } from '../../helpers';
import baseApi from '../../features/baseSlice';
import Category from './category';
import { CategoryApiProps, CategoriesApiProps } from './types';

const category = new Category('categories', 'Category');

// Add Tag for cache data
const categoryTag = baseApi.enhanceEndpoints({ addTagTypes: [category.tagType] });

// Create Query for CRUD operation
const categoryApi = categoryTag.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation<CategoryApiProps, Partial<CategoryApiProps>>({
      query: (body) => category.addEntity(body),
      invalidatesTags: [{ type: category.tagType, id: 'LIST' }],
    }),
    getCategories: builder.query<CategoriesApiProps, void>({
      query: () => category.getEntities(),
      providesTags: (result) => providesList(result, category.tagType),
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} = categoryApi;
