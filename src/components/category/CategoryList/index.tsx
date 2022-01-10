import React from 'react';
import {
  Col, List, Row, Skeleton, Typography,
} from 'antd';
import { useParams } from 'react-router-dom';
import Card from '../../../utils/card/Card';
import Title from '../../../utils/title/Title';
import CategoryForm from '../CategoryForm';
import { categoryService } from '../../../services';

const CategoryList = () => {
  const { id } = useParams<{id: string}>();
  const { useGetCategoriesQuery } = categoryService;
  const {
    data: categories, error, isLoading, isError,
  } = useGetCategoriesQuery(+id);
  const displayCategories = categories?.length ? categories?.map((category) => (
    <Skeleton loading={isLoading} active key={category.id}>
      <Card
        size={24}
        title={category.name}
        id={category.id}
      />
    </Skeleton>
  )) : 'No Category kindly create one';

  if (isError) {
    return <div>Ops,Something went Wrong</div>;
    console.error(error);
  }
  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Title title="Category" />
        <CategoryForm />
        <Row justify="center">
          <Col md={7} xl={7}>
            <Row gutter={[0, 50]}>
              {displayCategories}
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default CategoryList;
