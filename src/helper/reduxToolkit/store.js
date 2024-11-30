import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import { productApi } from "./apis/productAPI";
export const store = configureStore({
  reducer: {
    count: counterSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});
