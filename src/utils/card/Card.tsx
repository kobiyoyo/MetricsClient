import React from 'react';
import { Card as AntdCard, Col, Row } from 'antd';
import { CardProps } from './types';

const Card = ({
  size, title,
}: Partial<CardProps>) => {
  const { Meta } = AntdCard;
  return (
    <Col xs={size} md={size}>
      <AntdCard>
        <Meta title={title} />
      </AntdCard>
    </Col>
  );
};

export default Card;
