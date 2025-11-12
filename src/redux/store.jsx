import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Make sure to import the reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the reducer here, not the slice object
  },
});

