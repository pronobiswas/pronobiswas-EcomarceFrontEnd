import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const allProductApi = createApi({
  reducerPath: "allProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    GetMyProducts: builder.query({
      query: () => `/allProduct`,
    }),
  }),
});

// auto-generated based on the defined endpoints
export const { useGetMyProductsQuery } = allProductApi;
