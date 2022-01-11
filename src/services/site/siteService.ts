/* eslint-disable import/prefer-default-export */
import { providesList } from '../../helpers';
import baseApi from '../../features/baseSlice';
import Site from './site';
import { SiteApiProps, SitesApiProps } from './types';

const site = new Site('sites', 'Site');

// Add Tag for cached data
const siteTag = baseApi.enhanceEndpoints({ addTagTypes: [site.tagType] });

// Create Query for CRUD operation
const siteApi = siteTag.injectEndpoints({
  endpoints: (builder) => ({
    addSite: builder.mutation<SiteApiProps, Partial<SiteApiProps>>({
      query: (body) => site.addEntity(body),
      invalidatesTags: [{ type: site.tagType, id: 'LIST' }],
    }),
    // addSite: builder.mutation<SiteApiProps, Partial<SiteApiProps>>(site.addEntity()),
    deleteSite: builder.mutation<{ success: boolean; id: number }, number>({
      query: (id) => site.deleteEntity(id),
      invalidatesTags: (result, error, id) => [{ type: site.tagType, id }],
    }),
    getSites: builder.query<SitesApiProps, void>({
      query: () => site.getEntities(),
      providesTags: (result) => providesList(result, site.tagType),
    }),
  }),
  overrideExisting: false,
});

export const {
  useDeleteSiteMutation,
  useAddSiteMutation,
  useGetSitesQuery,
} = siteApi;
