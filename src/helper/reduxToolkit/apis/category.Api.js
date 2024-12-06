import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
    endpoints: (builder) => ({
      GetAllCategory: builder.query({
        query: () => `/allCategory`,
      }),
    }),
  })

// auto-generated based on the defined endpoints
export const { useGetAllCategoryQuery } = categoryApi;