import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { productFetch } from "../store/actions/productAction";



export function useProduct(id: number) {
 const product = useAppSelector(state => state.productSlice.product)
 const isFetch = useAppSelector(state => state.productSlice.isFetch)
 const error = useAppSelector(state => state.productSlice.error)
 const dispatch = useAppDispatch()

 useEffect(() => {
  if (!product || product.id == id) {
   dispatch(productFetch(id))
  }
 }, [])

 return {product, isFetch, error}
}