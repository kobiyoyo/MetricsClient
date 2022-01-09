/* eslint-disable import/prefer-default-export */
import { providesList } from '../../helpers';
import baseApi from '../../features/baseSlice';
import Metric from './metric';
import { MetricApiProps, MetricsApiProps, AddMerticProps } from './types';

const metric = new Metric('metrics', 'Metric');

// Add Tag for cache data
const metricTag = baseApi.enhanceEndpoints({ addTagTypes: [metric.tagType] });

// Create Query for CRUD operation
const metricApi = metricTag.injectEndpoints({
  endpoints: (builder) => ({
    addMetric: builder.mutation<AddMerticProps, Partial<AddMerticProps>>({
      query: (body) => metric.addEntity(body),
      invalidatesTags: [{ type: metric.tagType, id: 'LIST' }],
    }),
    getMetrics: builder.query<MetricsApiProps, number>({
      query: (siteId) => metric.getMetrics(siteId),
      providesTags: (result) => providesList(result, metric.tagType),
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddMetricMutation,
  useGetMetricsQuery,
} = metricApi;
