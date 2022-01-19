/* eslint-disable import/prefer-default-export */
import baseApi from '../../features/baseSlice';
import Site from './site';
import { SiteApiProps, SitesApiProps } from './types';

const site = new Site('sites', 'Site');

// Add Tag for cached data
const siteTag = baseApi.enhanceEndpoints({ addTagTypes: [site.tagType] });

// Create Query for CRUD operation
const siteApi = siteTag.injectEndpoints({
  endpoints: (builder) => ({
    addSite: builder.mutation<SiteApiProps, Partial<SiteApiProps>>(site.addEntity()),
    deleteSite: builder.mutation<{ success: boolean; id: number }, number>(site.deleteEntity()),
    getSites: builder.query<SitesApiProps, void>(site.getEntities()),
  }),
  overrideExisting: false,
});

export const {
  useDeleteSiteMutation,
  useAddSiteMutation,
  useGetSitesQuery,
} = siteApi;
