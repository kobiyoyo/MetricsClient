/* eslint-disable import/prefer-default-export */
import { MetricApiProps } from '../../../services/metric/types';

export const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text: string, record: Partial<MetricApiProps>) => record?.category?.name,
  },
  {
    title: 'Value',
    dataIndex: 'value',
  },
];
