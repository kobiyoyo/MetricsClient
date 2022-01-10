import React from 'react';
import { Button, Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import MetricsList from '../../metrics/MetricsList';
import CategoryList from '../../category/CategoryList';
import Chart from './Chart';

const SiteDetail = () => {
  const { goBack } = useHistory();
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Button onClick={() => goBack()}>Back</Button>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Chart />
      </Col>
      <Col xs={15} sm={15} md={15} lg={15} xl={15}>
        <MetricsList />
      </Col>
      <Col xs={9} sm={9} md={9} lg={9} xl={9}>
        <CategoryList />
      </Col>
    </Row>
  );
};
export default SiteDetail;
