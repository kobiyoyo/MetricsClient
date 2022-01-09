import React from 'react';
import { Button, Col, Row } from 'antd';
import MetricsList from '../../metrics/MetricsList';
import CategoryList from '../../category/CategoryList';

const SiteDetail = () => (
  <Row>
    <Col xs={15} sm={15} md={15} lg={15} xl={15}>
      <MetricsList />
    </Col>
    <Col xs={9} sm={9} md={9} lg={9} xl={9}>
      <CategoryList />
    </Col>
  </Row>
);

export default SiteDetail;
