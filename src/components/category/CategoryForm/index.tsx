import React from 'react';
import {
  Col, message, Row, Typography,
} from 'antd';
import { Formik, FormikHelpers } from 'formik';
import {
  Form, FormItem, ResetButton, SubmitButton,
} from 'formik-antd';
import { useHistory, useParams } from 'react-router-dom';
import InputFormField from '../../../utils/input/Input';
import { CategoryFormValidation } from '../schema/CategoryFormValidation';
import { initialValues } from '../schema/CategoryDefaultValues';
import { CategoryFormValues } from '../types';
import { categoryService } from '../../../services';

const CategoryForm = () => {
  const { id } = useParams<{id: string}>();
  const { Text } = Typography;
  const { useAddCategoryMutation } = categoryService;
  const [addCategory, { isLoading: isAdding }] = useAddCategoryMutation();

  const onSubmit = async (
    values: CategoryFormValues,
    { setSubmitting, resetForm }: FormikHelpers<CategoryFormValues>,
  ) => {
    try {
      await addCategory({ ...values, site_id: +id }).unwrap();
      message.success(`Category successfully created ${values.name} category`, 2);
      resetForm();
    } catch (e) {
      console.error('Error', e);
      message.error("We couldn't create a category, try again!", 2);
    }
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

export default CategoryForm;
