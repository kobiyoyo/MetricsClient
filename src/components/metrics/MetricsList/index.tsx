import React from 'react';
import {
  Button, Col, Input, Row,
} from 'antd';
import Card from '../../../utils/card/Card';
import Title from '../../../utils/title/Title';
import MetricsForm from '../MetricsForm';
import Table from './Table';

const MetricsList = () => {
  const data = [
    {
      key: 1,
      name: 'John Brown',
      id: 98,
      value: 60,
      time: '2:40 pm',
    },
    {
      key: 2,
      name: 'Jim Green',
      id: 98,
      value: 66,
      time: '2:40 pm',
    },
    {
      key: 3,
      name: 'Joe Black',
      id: 98,
      value: 90,
      time: '2:40 pm',
    },
    {
      key: 4,
      name: 'Jim Red',
      id: 88,
      value: 99,
      time: '2:40 pm',
    },
  ];
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Title title="Metrics" />
        <MetricsForm siteId={1} />
        <Row justify="center">
          <Col md={7} xl={7}>
            <Row gutter={[0, 50]}>
              <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <Table data={data} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MetricsList;
