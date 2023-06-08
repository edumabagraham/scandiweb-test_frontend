import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../components/pages/ProductsList";

interface InitialState{
  fetched_products: ProductProps[]
}

const initialState: InitialState = {
  fetched_products: []
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    allProducts (state, action:PayloadAction<{fetched_products:ProductProps[]}>) {
      state.fetched_products = action.payload.fetched_products
    }
  },
});

export const {allProducts} = productsSlice.actions
export default productsSlice.reducer
