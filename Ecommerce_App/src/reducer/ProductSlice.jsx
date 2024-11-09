import { createSlice } from "@reduxjs/toolkit";
import { saveProductsToLocalStorage, getProductsFromLocalStorage } from "../utils/localStorage";

const initialState = {
  products: getProductsFromLocalStorage() || [], 
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
      saveProductsToLocalStorage(state.products); 
    },
  },
});

export default ProductSlice.reducer;
export const { getProducts } = ProductSlice.actions;
