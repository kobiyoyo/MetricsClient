/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const CategoryFormValidation = Yup.object({
  name: Yup.string().required('Name is Required').min(3, 'Name must be at least 3 characters long'),
});
