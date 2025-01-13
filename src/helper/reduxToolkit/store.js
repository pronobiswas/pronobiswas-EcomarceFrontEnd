import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slice/counterSlice";
import { productApi } from "./apis/productAPI";
import { flashSaleApi } from "./apis/flashSaleAPI";
import { exclusiveApi } from "./apis/Exclusive.Api";
import { allProductApi } from "./apis/allProductApi";
import cartSlice from "./slice/cartSlice";
import wishListSlice from "./slice/wishListSlice";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    cartItem: cartSlice,
    wishList: wishListSlice,
    [productApi.reducerPath]: productApi.reducer,
    [flashSaleApi.reducerPath]: flashSaleApi.reducer,
    [exclusiveApi.reducerPath]: exclusiveApi.reducer,
    [allProductApi.reducerPath]: allProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware)
      .concat(flashSaleApi.middleware)
      .concat(exclusiveApi.middleware)
      .concat(allProductApi.middleware),
});
