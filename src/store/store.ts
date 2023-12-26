import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productSlice from "./slices/productSlice";
import productCardsSlice from './slices/productCardsSlice'


const rootReducers = combineReducers({
 productSlice: productSlice,
 productCardsSlice: productCardsSlice
})


export const setupStore = () => {
 return configureStore({
  reducer: rootReducers
 })
}


export type RootState = ReturnType<typeof rootReducers>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']