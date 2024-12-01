import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const flashSaleApi = createApi({
  reducerPath: 'flashSaleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    GetFlashSaleProducts: builder.query({
      query: () => "/products",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetFlashSaleProductsQuery } = flashSaleApi