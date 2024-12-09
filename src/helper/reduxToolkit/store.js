import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import { productApi } from "./apis/productAPI";
import { flashSaleApi } from "./apis/flashSaleAPI";
import { categoryApi } from "./apis/category.Api";
import { allProductApi } from "./apis/allProductApi";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
    [flashSaleApi.reducerPath]: flashSaleApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [allProductApi.reducerPath]: allProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(flashSaleApi.middleware)
      .concat(categoryApi.middleware)
      .concat(allProductApi.middleware),
});
