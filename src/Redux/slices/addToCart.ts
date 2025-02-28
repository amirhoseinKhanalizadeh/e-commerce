import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Products } from "../../ReactQuery/getProducts";

const initialState: Products = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocard: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
});

export const { addTocard } = cartSlice.actions;

export default cartSlice.reducer;
