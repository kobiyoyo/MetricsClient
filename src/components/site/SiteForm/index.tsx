import React from 'react';
import {
  Col, Row, Typography,
} from 'antd';
import { Formik, FormikHelpers } from 'formik';
import {
  Form, FormItem, ResetButton, SubmitButton,
} from 'formik-antd';
import InputFormField from '../../../utils/input/Input';
import { SiteFormValidation } from '../schema/SiteFormValidation';
import { initialValues } from '../schema/SiteDefaultValues';
import { SiteFormValues } from '../types';

const SiteForm = () => {
  const onSubmit = (
    values: SiteFormValues,
    { setSubmitting }: FormikHelpers<SiteFormValues>,
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  const { Text } = Typography;

  return (
    <Row>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={SiteFormValidation}
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

export default SiteForm;
