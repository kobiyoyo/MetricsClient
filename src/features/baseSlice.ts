/* eslint-disable import/no-cycle */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://enigmatic-brushlands-59146.herokuapp.com/api/v3' }),
  endpoints: () => ({}),
});
export default baseApi;
