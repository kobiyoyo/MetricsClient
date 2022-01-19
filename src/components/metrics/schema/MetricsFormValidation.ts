/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const MetricsFormValidation = Yup.object({
  value: Yup.number().required('Value is Required').min(1).max(100),
  category_id: Yup.string().required('Category is Required'),
});
