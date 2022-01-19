/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { providesList } from '../../helpers';
import baseApi from '../../features/baseSlice';
import Category from './category';
import { CategoryApiProps, CategoriesApiProps } from './types';

const category = new Category('categories', 'Category');

// Add Tag for cached data
const categoryTag = baseApi.enhanceEndpoints({ addTagTypes: [category.tagType] });

// Create Query for CRUD operation
const categoryApi = categoryTag.injectEndpoints({
  endpoints: (builder) => ({
    addCategory: builder.mutation<CategoryApiProps, Partial<CategoryApiProps>>(category.addEntity()),
    getCategories: builder.query<CategoriesApiProps, number>({
      query: (siteId) => category.getCategories(siteId),
      providesTags: (result) => providesList(result, category.tagType),
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddCategoryMutation,
  useGetCategoriesQuery,
} = categoryApi;
