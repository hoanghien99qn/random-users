import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://randomuser.me/api' }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: ({page, pageSize}) => `/?page=${page}&results=${pageSize}`,
    })
  })
})

export const { useGetUsersQuery } = apiSlice;