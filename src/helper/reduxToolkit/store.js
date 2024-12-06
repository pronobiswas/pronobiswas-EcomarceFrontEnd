import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import { productApi } from "./apis/productAPI";
import { flashSaleApi } from "./apis/flashSaleAPI";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
    [flashSaleApi.reducerPath]: flashSaleApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(flashSaleApi.middleware)

});
