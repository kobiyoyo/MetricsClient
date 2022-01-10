import React from 'react';
import {
  Col, message, Modal, Row, Skeleton,
} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import ActionCard from '../../../utils/card/ActionCard';
import Title from '../../../utils/title/Title';
import SiteForm from '../SiteForm';
import { siteService } from '../../../services';

const SiteList = () => {
  const { confirm } = Modal;
  const history = useHistory();
  const { useGetSitesQuery, useDeleteSiteMutation } = siteService;
  const [deleteSite] = useDeleteSiteMutation();
  const {
    data: sites, error, isLoading, isError,
  } = useGetSitesQuery();
  const handleViewSite = (id: number) => history.push(`/sites/${id}`);
  const handleDeleteSite = async (idx: number) => {
    try {
      await deleteSite(idx);
    } catch (e) {
      console.error('Error', e);
      message.error("We couldn't delete site, try again!", 2);
    }
  };
  const confirmDeleteWorker = (id: number) => {
    confirm({
      title: 'Do you want to delete this worker?',
      icon: <ExclamationCircleOutlined />,
      onOk: () => handleDeleteSite(id),
    });
  };
  const displaySites = sites?.length ? sites?.map((site) => (
    <Skeleton loading={isLoading} active key={site.id}>
      <ActionCard
        size={24}
        title={site.name}
        id={site.id}
        handleDelete={confirmDeleteWorker}
        handleView={handleViewSite}
      />
    </Skeleton>
  )) : 'No Site kindly create one';

  if (isError) {
    return <div>Ops,Something went Wrong</div>;
    console.error(error);
  }
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Title title="Site" />
        <SiteForm />
        <Row justify="center">
          <Col md={7} xl={7}>
            <Row gutter={[0, 50]}>
              {displaySites}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SiteList;
