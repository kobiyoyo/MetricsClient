import * as React from 'react';
import { Input } from 'formik-antd';
import { FormInputValues } from './types';

const InputFormField = ({
  name,
  placeholder,
  size,
}: FormInputValues) => (
  <Input name={name} placeholder={placeholder} size={size} />
);

export default InputFormField;
