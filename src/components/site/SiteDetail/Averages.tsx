/* eslint-disable camelcase */
import React from 'react';
import {
  Col,
  Row, Typography,
} from 'antd';
import { useParams } from 'react-router-dom';
import StatsCard from '../../../utils/card/StatsCard';
import { averageService } from '../../../services';

const Averages = () => {
  const { id } = useParams<{id: string}>();
  const { Title } = Typography;
  const { useGetAveragesQuery } = averageService;
  const {
    data: averages, isLoading,
  } = useGetAveragesQuery(+id);

  return (
    <Row gutter={16}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Title> Averages </Title>
      </Col>
      <StatsCard loading={isLoading} value={averages ? averages?.per_minute : 0} title="Per Minute" />
      <StatsCard loading={isLoading} value={averages ? averages?.per_hour : 0} title="Per Hour" />
      <StatsCard loading={isLoading} value={averages ? averages?.per_day : 0} title="Per Day" />
    </Row>
  );
};

export default Averages;
