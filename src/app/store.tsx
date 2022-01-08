/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import baseApi from '../features/baseSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});
