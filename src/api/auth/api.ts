import { createApi } from '@reduxjs/toolkit/query/react';
import type { LoginRequestInterface, LoginResponseInterface } from './types';
import { baseQueryInterceptor } from '../config';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryInterceptor,
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseInterface, LoginRequestInterface>({
      query: (body) => ({
        url: `/api/v1/users/login/`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
