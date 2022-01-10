import React from 'react';
import {
  Col, Table as AntdTable, Row,
} from 'antd';
import { useParams } from 'react-router-dom';
import Title from '../../../utils/title/Title';
import MetricsForm from '../MetricsForm';
import { metricService } from '../../../services';
import { MetricApiProps } from '../../../services/metric/types';

const MetricsList = () => {
  const { id } = useParams<{id: string}>();
  const { useGetMetricsQuery } = metricService;
  const {
    data: metrics, error, isError,
  } = useGetMetricsQuery(+id);
  const columns = [
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
  if (isError) {
    return <div>Ops,Something went Wrong</div>;
    console.error(error);
  }
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Title title="Metrics" />
        <MetricsForm />
        <Row>
          <Col md={24} xl={24}>
            <Row gutter={[0, 50]}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <AntdTable columns={columns} rowKey={(row) => row.id} dataSource={metrics} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MetricsList;
