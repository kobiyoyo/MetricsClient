import React from 'react';
import { Row, Col, Typography } from 'antd';

const Title = ({ title }: {title: string}) => {
  const { Title: AntdTitle } = Typography;
  return (
    <Row justify="center" className="pt-24 px-4">
      <Col xs={7} md={7} className="border-b-8 border-b-gray-800">
        <AntdTitle className="text-6xl font-bold text-white">{title}</AntdTitle>
      </Col>
    </Row>
  );
};

export default Title;
