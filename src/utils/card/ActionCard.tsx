import React from 'react';
import { Card as AntdCard, Col, Row } from 'antd';
import { EditOutlined, DeleteOutlined, EyeOutlined } from '@ant-design/icons';
import { CardProps } from './types';

const ActionCard = ({
  size, title, id, handleDelete, handleView,
}: CardProps) => {
  const { Meta } = AntdCard;
  return (
    <Col xs={size} md={size}>
      <AntdCard
        actions={[
          <EyeOutlined key="view" onClick={() => handleView(id)} />,
          <DeleteOutlined key="delete" onClick={() => handleDelete(id)} />,
        ]}
      >
        <Meta title={title} />
      </AntdCard>
    </Col>
  );
};

export default ActionCard;
