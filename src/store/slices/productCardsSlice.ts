import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct, IProductCard } from "../../types/productType";
import { productCardsFetch } from "../actions/productCardAction";


interface IState {
 productCards: IProductCard[] | null
 error: string
 isFetch: boolean
}

const initialState: IState = {
 productCards: null,
 error: "",
 isFetch: false,
}



const productCardsSlice = createSlice({
 name: "productCardsSlice",
 initialState,
 reducers: {

 },
 extraReducers(builder) {
  builder.addCase(productCardsFetch.pending.type, (state) => {
   state.isFetch = true
  })
  builder.addCase(productCardsFetch.fulfilled.type, (state, action: PayloadAction<IProductCard[]>) => {
   state.isFetch = false
   state.productCards = action.payload
   state.error = ''
  })
  builder.addCase(productCardsFetch.rejected.type, (state, action: PayloadAction<string>) => {
   state.isFetch = false
   state.error = action.payload
  })
 },
})

export default productCardsSlice.reducer