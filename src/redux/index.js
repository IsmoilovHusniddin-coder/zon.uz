import { configureStore } from "@reduxjs/toolkit";
import likeSlice from "./like-slice";
import cartSlice from "./cart-slice";
export const store = configureStore({
  reducer: {
    likeSlice, 
    cartSlice,
  },
});
