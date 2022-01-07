import React from 'react';
import {
  Button, Col, Input, Row,
} from 'antd';
import Card from '../../../utils/card/Card';
import Title from '../../../utils/title/Title';
import SiteForm from '../SiteForm';

const SiteList = () => (
  <Row>
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Title title="Metrics" />
      <SiteForm />
      <Row justify="center">
        <Col md={7} xl={7}>
          <Row gutter={[0, 50]}>
            <Card size={24} title="Hello" id={0} />
            <Card size={24} title="You" id={0} />
            <Card size={24} title="Bad" id={0} />
          </Row>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default SiteList;
