import { createSlice } from "@reduxjs/toolkit";
import { ErrorToast, InfoToast, SuessToast } from "../../../utils/toast";

const initialState = {
  value: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
  totalAmount: 0,
  totalItem: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // =====add to cart reducer======
    addtoCart: (state, action) => {
      // ====find the product index number=====
      const searchCartItem = state.value.findIndex((item) => {
        return item._id == action.payload._id;
      });
      if (searchCartItem >= 0) {
        state.value[searchCartItem].cartQuantity += 1;
        InfoToast(`${action.payload.title} Again Add to Cart`);
        localStorage.setItem("cartItem", JSON.stringify(state.value));
      } else {
        state.value.push({ ...action.payload, cartQuantity: 1 });
        SuessToast(`${action.payload.title}  Add to Cart`);
        localStorage.setItem("cartItem", JSON.stringify(state.value));
      }
    },
    // =====remove to cart reducers=====
    removeCart: (state, action) => {
      console.log(action.payload);

      const findItem = state.value.filter((item) => {
        return item._id !== action.payload._id;
      });
      state.value = findItem;
      ErrorToast(`${action.payload.title} is Remove from the cart`);
      localStorage.setItem("cartItem", JSON.stringify(state.value));
    },
    // =======increment cart======
    incrementCart: (state, action) => {
      const findproductIndex = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      state.value[findproductIndex].cartQuantity += 1;
      localStorage.setItem("cartItem", JSON.stringify(state.value));
      InfoToast(`${action.payload.title} Increment`);
    },
    // =======decrement cart======
    decrementCart: (state, action) => {
      const findcartIndex = state.value.findIndex((item) => {
        return item._id === action.payload._id;
      });
      if (state.value[findcartIndex].cartQuantity > 1) {
        state.value[findcartIndex].cartQuantity -= 1;
        localStorage.setItem("cartItem", JSON.stringify(state.value));
        InfoToast(`${action.payload.title} Decrement`);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart, removeCart, incrementCart, decrementCart } =
  cartSlice.actions;

export default cartSlice.reducer;
