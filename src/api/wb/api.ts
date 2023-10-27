import { createApi } from '@reduxjs/toolkit/query/react';
import type {
  GetAdvertsRequestInterface,
  GetAdvertsResponceInterface,
  LoginRequestInterface,
  LoginResponseInterface,
} from './types';
import { baseQueryInterceptor } from '../config';
import { ArrayItem } from '@/src/features/types';

export const wbApi = createApi({
  reducerPath: 'wbApi',
  baseQuery: baseQueryInterceptor,
  endpoints: (builder) => ({
    getAdverts: builder.query<
      GetAdvertsResponceInterface,
      GetAdvertsRequestInterface
    >({
      query({ input, type, region_id }) {
        return `/api/v1/wb/adverts/?input=${input}&type=${type}&region_id=${region_id}`;
      },
    }),
    getCatalogs: builder.query<Array<Array<ArrayItem>>, void>({
      query() {
        return `/api/v1/wb/catalogs/`;
      },
    }),
    getRegions: builder.query<Array<ArrayItem>, void>({
      query() {
        return `/api/v1/wb/regions/ `;
      },
    }),
  }),
});

export const { useGetAdvertsQuery, useGetCatalogsQuery, useGetRegionsQuery } =
  wbApi;
