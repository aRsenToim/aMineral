import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "../../api/api";
import { IProduct } from "../../types/productType";




export const productFetch = createAsyncThunk(
 'productSlice/fetch',
 async (id: number, thunkApi) => {
  try {
   const data = await $api.get<IProduct[]>(`/products/?id=${id}`)
   return data.data[0]
  } catch (error) {
   return thunkApi.rejectWithValue(`Не удается заргрузить каталог минералов`)
  }
 }
)