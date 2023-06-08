import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState{
  selectedSkus: string[]
}

const initialState: InitialState = {
  selectedSkus: []
};

export const deleteSlice = createSlice({
  name: "skus",
  initialState,
  reducers: {
    addSku (state, action:PayloadAction<{selectedSkus:string[]}>) {
      state.selectedSkus = action.payload.selectedSkus
    }
  },
});

export const {addSku} = deleteSlice.actions
export default deleteSlice.reducer
