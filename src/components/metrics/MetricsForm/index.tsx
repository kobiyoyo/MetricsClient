import React from 'react';
import {
  Col, message, Row, Typography,
} from 'antd';
import { Formik, FormikHelpers } from 'formik';
import {
  Form, FormItem, ResetButton, SubmitButton, Select,
} from 'formik-antd';
import InputFormField from '../../../utils/input/Input';
import { MetricsFormValidation } from '../schema/MetricsFormValidation';
import { initialValues } from '../schema/MetricsDefaultValues';
import { MetricsFormValues } from '../types';
import { metricService } from '../../../services';

const MetricsForm = () => {
  const { Option } = Select;
  const { Text } = Typography;
  const { useAddMetricMutation } = metricService;
  const [addMetric, { isLoading: isAdding }] = useAddMetricMutation();
  const onSubmit = async (
    values: MetricsFormValues,
    { setSubmitting, resetForm }: FormikHelpers<MetricsFormValues>,
  ) => {
    try {
      await addMetric({ ...values, category_id: +values.category_id });
      message.success('Metric successfully created', 2);
      resetForm();
    } catch (e) {
      console.error('Error', e);
      message.error("We couldn't create a metric, try again!", 2);
    }
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
                        name="value"
                        size="middle"
                        placeholder="Value"
                        type="number"
                      />
                      {formikProps.touched.value
                      && formikProps.errors.value && <Text className="text-red-600">{formikProps.errors.value}</Text>}
                    </Col>
                    <Col xs={10} sm={10} md={10} lg={10} xl={10}>
                      <Select name="category_id" defaultValue="select">
                        <Option value="select">Select</Option>
                        <Option value="1">Food</Option>
                        <Option value="3">Ring</Option>
                      </Select>
                    </Col>
                    <Col xs={14} sm={14} md={14} lg={14} xl={14}>
                      {formikProps.touched.category_id
                      && formikProps.errors.category_id && <Text className="text-red-600">{formikProps.errors.category_id}</Text>}
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                  <Row justify="center">
                    <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                      <FormItem name="button">
                        <SubmitButton size="large" className="bg-blue-900" disabled={isAdding}>Save</SubmitButton>
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
