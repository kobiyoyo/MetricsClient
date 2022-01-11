import React from 'react';
import {
  Card as AntdCard, Col, Row, Statistic,
} from 'antd';
import { StatsCardProps } from './types';

const StatsCard = ({
  title, value, loading,
}: StatsCardProps) => {
  const { Meta } = AntdCard;
  return (
    <Col xs={8} sm={8} md={8} lg={8} xl={8}>
      <AntdCard loading={loading}>
        <Statistic
          title={title}
          value={value}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
        />
      </AntdCard>
    </Col>
  );
};

export default StatsCard;
