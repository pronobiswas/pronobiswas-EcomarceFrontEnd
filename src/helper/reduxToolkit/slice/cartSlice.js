import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addtoCart: (state, action) => {
       console.log(state,action);
       
        state.value.push({ ...action.payload });
      },
      
    
    
  },
});

// Action creators are generated for each case reducer function
export const { addtoCart } = cartSlice.actions;

export default cartSlice.reducer;
