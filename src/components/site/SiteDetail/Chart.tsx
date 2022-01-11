/* eslint-disable no-shadow */
/* eslint-disable max-len */
import React from 'react';
import { Skeleton, Typography } from 'antd';
import { Chart } from 'react-google-charts';
import { useParams } from 'react-router-dom';
import { metricService, siteService } from '../../../services';
import { options } from './Data';

const ScatterChart = () => {
  const { id } = useParams<{id: string}>();
  const { Title } = Typography;
  const { useGetMetricsQuery } = metricService;
  const { useGetSitesQuery } = siteService;
  const { site } = useGetSitesQuery(undefined, {
    selectFromResult: ({ data }) => ({
      site: data?.find((site) => site.id === +id),
    }),
  });

  const {
    data: metrics, error, isError, isLoading,
  } = useGetMetricsQuery(+id);
  const generateDayWiseTimeSeries = (baseVal: string) => new Date(Date.parse(baseVal));
  const series = metrics?.map((metric) => (
    [metric.id.toString(), generateDayWiseTimeSeries(metric.created_at), metric.value, metric.category?.name]));
  series?.unshift(['ID', 'Time', 'Supply Rate', 'Fruit']);

  if (isError) {
    return <div>Ops,Something went Wrong</div>;
    console.error(error);
  }
  return (
    <div className="w-full h-70">
      {metrics?.length ? (
        <Skeleton active loading={isLoading}>
          <Chart
            chartType="BubbleChart"
            width="100%"
            height="700px"
            data={series}
            options={options(site?.name)}
          />
        </Skeleton>
      ) : (
        <Title
          className="w-full h-96"
        >
          {' '}
          No Chart Data
        </Title>
      )}
    </div>
  );
};

export default ScatterChart;
