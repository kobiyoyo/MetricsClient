/* eslint-disable import/prefer-default-export */
import { providesList } from '../../helpers';
import baseApi from '../../features/baseSlice';
import Metric from './metric';
import { MetricApiProps, MetricsApiProps } from './types';

const metric = new Metric('metrics', 'Metric');

// Add Tag for cache data
const metricTag = baseApi.enhanceEndpoints({ addTagTypes: [metric.tagType] });

// Create Query for CRUD operation
const metricApi = metricTag.injectEndpoints({
  endpoints: (builder) => ({
    addMetric: builder.mutation<MetricApiProps, Partial<MetricApiProps>>({
      query: (body) => metric.addEntity(body),
      invalidatesTags: [{ type: metric.tagType, id: 'LIST' }],
    }),
    getMetrics: builder.query<MetricsApiProps, void>({
      query: () => metric.getEntities(),
      providesTags: (result) => providesList(result, metric.tagType),
    }),
  }),
  overrideExisting: false,
});

export const {
  useAddMetricMutation,
  useGetMetricsQuery,
} = metricApi;
