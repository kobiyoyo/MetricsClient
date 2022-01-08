/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const MetricsFormValidation = Yup.object({
  value: Yup.string().required('Required').min(3, 'must be at least 3 characters long'),
});
