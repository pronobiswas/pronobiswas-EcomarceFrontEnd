import { createSlice } from "@reduxjs/toolkit";
import { ErrorToast, InfoToast, SuessToast } from "../../../utils/toast";

const initialState = {
  value: localStorage.getItem("wishlists")
    ? JSON.parse(localStorage.getItem("wishlists"))
    : [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    // ====add to wishList===
    addToWishList: (state, action) => {
      // ====find the product index number=====

      const searchWishListItem = state.value.findIndex((item) => {
        return item._id == action.payload._id;
      });
      console.log(searchWishListItem);

      if (searchWishListItem >= 0) {
        InfoToast(`${action.payload.title} Allredy exist`);
        localStorage.setItem("wishlists", JSON.stringify(state.value));
      } else {
        state.value.push({ ...action.payload });
        localStorage.setItem("wishlists", JSON.stringify(state.value));
        SuessToast(`${action.payload.title}  Add to Wishlist`);
      }
    },
    // ====remove From Wish List====
    removeFromWishList: (state,action) => {
        const findItem = state.value.filter((item) => {
            return item._id !== action.payload._id;
          });
          console.log(findItem);
          
          state.value = findItem;
          ErrorToast(`${action.payload.name} is Remove from the wish list`);
          localStorage.setItem("wishlists", JSON.stringify(state.value));
    },
    
  },
});

export const { addToWishList, removeFromWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
