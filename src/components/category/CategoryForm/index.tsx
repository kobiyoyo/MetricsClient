import React from 'react';
import {
  Col, Row, Typography,
} from 'antd';
import { Formik, FormikHelpers } from 'formik';
import {
  Form, FormItem, ResetButton, SubmitButton, Input,
} from 'formik-antd';
import InputFormField from '../../../utils/input/Input';
import { CategoryFormValidation } from '../schema/CategoryFormValidation';
import { initialValues } from '../schema/CategoryDefaultValues';
import { CategoryFormValues } from '../types';

const CategoryForm = ({ siteId }: { siteId: number}) => {
  const id = siteId;
  const { Text } = Typography;

  const onSubmit = (
    values: CategoryFormValues,
    { setSubmitting }: FormikHelpers<CategoryFormValues>,
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={CategoryFormValidation}
          render={(formikProps) => (
            <Form layout="vertical">
              <Row gutter={[0, 20]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Row justify="center">
                    <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                      <InputFormField
                        name="name"
                        size="middle"
                        placeholder="Name"
                      />
                      {formikProps.touched.name
                      && formikProps.errors.name && <Text className="text-red-600">{formikProps.errors.name}</Text>}
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Row justify="center">
                    <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                      <FormItem name="button">
                        <SubmitButton size="large" className="bg-blue-900">Save</SubmitButton>
                        <ResetButton className="mx-4" size="large">
                          Cancel
                        </ResetButton>
                      </FormItem>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          )}
        />
      </Col>
    </Row>
  );
};

export default CategoryForm;
