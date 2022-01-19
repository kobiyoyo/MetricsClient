/* eslint-disable import/prefer-default-export */
import baseApi from '../../features/baseSlice';
import Average from './average';
import { AveragesApiProps } from './types';

const average = new Average('averages', 'Average');

// Add Tag for cached data
const averageTag = baseApi.enhanceEndpoints({ addTagTypes: [average.tagType] });

// Create Query for CRUD operation
const averageApi = averageTag.injectEndpoints({
  endpoints: (builder) => ({
    getAverages: builder.query<AveragesApiProps, number>({
      query: (siteId) => average.getAverages(siteId),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAveragesQuery,
} = averageApi;
