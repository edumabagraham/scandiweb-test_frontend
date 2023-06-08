import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface InitialState{
  selectedSkus: string[]
  deleting: boolean
}

const initialState: InitialState = {
  selectedSkus: [],
  deleting:false
};

export const deleteSlice = createSlice({
  name: "skus",
  initialState,
  reducers: {
    addSku (state, action:PayloadAction<{selectedSkus:string[]}>) {
      state.selectedSkus = action.payload.selectedSkus
    },

    deleting (state, action:PayloadAction<{deleting:boolean}>){
      state.deleting = action.payload.deleting
    }
  },
});

export const {addSku, deleting} = deleteSlice.actions
export default deleteSlice.reducer
