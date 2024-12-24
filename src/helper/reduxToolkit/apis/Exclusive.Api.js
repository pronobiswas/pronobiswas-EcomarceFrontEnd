import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    GetAllBanner: builder.query({
      query: () => `/banner`,
    }),
    GetAllProducts: builder.query({
      query: () => `/allProduct`,
    }),
    GetFlashSaleProducts: builder.query({
      query: () => `/flashSale`,
    }),
    GetAllCategory: builder.query({
      query: () => `/allCategory`,
    }),
    GetSingleProduct: builder.query({
      query: (id) => `/productDetails/${id}`,
    }),
  }),
});

// auto-generated based on the defined endpoints
export const {
  useGetAllCategoryQuery,
  useGetAllBannerQuery,
  useGetSingleProductQuery,
  useGetAllProductsQuery,
  useGetFlashSaleProductsQuery,
} = exclusiveApi;
