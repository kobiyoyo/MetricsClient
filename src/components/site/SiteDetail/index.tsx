import React from 'react';
import { Button, Col, Row } from 'antd';
import MetricsList from '../../metrics/MetricsList';
import CategoryList from '../../category/CategoryList';

const SiteDetail = () => (
  <div>
    <Button> Add Metrics</Button>
    <Row>
      <Col xs={18} sm={18} md={18} lg={18} xl={18}>
        <MetricsList />
      </Col>
      <Col xs={6} sm={6} md={6} lg={6} xl={6}>
        <CategoryList />
      </Col>
    </Row>
  </div>
);

export default SiteDetail;
