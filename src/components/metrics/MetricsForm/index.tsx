import React from 'react';
import {
  Col, Row, Typography,
} from 'antd';
import { Formik, FormikHelpers } from 'formik';
import {
  Form, FormikDebug, FormItem, ResetButton, SubmitButton, Input, Select,
} from 'formik-antd';
import InputFormField from '../../../utils/input/Input';
import { MetricsFormValidation } from '../schema/MetricsFormValidation';
import { initialValues } from '../schema/MetricsDefaultValues';
import { MetricsFormValues } from '../types';

const MetricsForm = ({ siteId }: { siteId: number}) => {
  const id = siteId;
  const { Option } = Select;
  const { Text } = Typography;

  const onSubmit = (
    values: MetricsFormValues,
    { setSubmitting }: FormikHelpers<MetricsFormValues>,
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
          validationSchema={MetricsFormValidation}
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
                      {formikProps.touched.value
                      && formikProps.errors.value && <Text className="text-red-600">{formikProps.errors.value}</Text>}
                    </Col>
                    <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                      <Select name="placement" defaultValue="Select">
                        <Option value="2">Food</Option>
                        <Option value="3">Ring</Option>
                      </Select>
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

export default MetricsForm;
