import React from 'react';
import { Table as AntdTable } from 'antd';
import { TableProps } from '../types';

const Table = ({ data } : TableProps) => {
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Value',
      dataIndex: 'value',
    },
    {
      title: 'Time',
      dataIndex: 'time',
    },
  ];
  return <AntdTable columns={columns} rowKey={(row) => row.id} dataSource={data} />;
};
export default Table;
