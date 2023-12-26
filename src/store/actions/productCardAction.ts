import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../api/api";
import { IProductCard } from "../../types/productType";

export const productCardsFetch = createAsyncThunk(
 'productCardsSlice/fetch',
 async (_, thunkApi) => {
  try {
   const data = await $api.get<IProductCard[]>('/productCards')
   return data.data
  } catch (error) {
   return thunkApi.rejectWithValue(`Не удается заргрузить каталог минералов`)
  }
 }
)