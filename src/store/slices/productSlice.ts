import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductCard } from "../../types/productType";
import { productFetch } from "../actions/productAction";

interface IState {
 product: IProduct | null,
 error: string
 isFetch: boolean
}

const initialState: IState = {
 product: null,
 error: "",
 isFetch: false
}



const productSlice = createSlice({
 name: "productSlice",
 initialState,
 reducers: {

 },
 extraReducers(builder) {
  //product actions
  builder.addCase(productFetch.pending.type, (state) => {
   state.isFetch = true
  })
  builder.addCase(productFetch.fulfilled.type, (state, action: PayloadAction<IProduct>) => {
   state.isFetch = false
   state.product = action.payload
   state.error = ''
  })
  builder.addCase(productFetch.rejected.type, (state, action: PayloadAction<string>) => {
   state.isFetch = false
   state.error = action.payload
  })
  //product actions
 },
})

export default productSlice.reducer