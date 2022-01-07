/* eslint-disable import/prefer-default-export */
import * as Yup from 'yup';

export const SiteFormValidation = Yup.object({
  name: Yup.string().required('Required').min(3, 'must be at least 3 characters long'),
});
