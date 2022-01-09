import * as React from 'react';
import { Input } from 'formik-antd';
import { FormInputValues } from './types';

const InputFormField = ({
  name,
  placeholder,
  size,
  type,
}: FormInputValues) => (
  <Input name={name} placeholder={placeholder} size={size} type={type} />
);

export default InputFormField;
