import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { productCardsFetch } from "../store/actions/productCardAction";



export function useProductCard(){
 const error = useAppSelector(state => state.productCardsSlice.error)
 const fetch = useAppSelector(state => state.productCardsSlice.isFetch)
 const productCards = useAppSelector(state => state.productCardsSlice.productCards)
 const dispatch = useAppDispatch()

 useEffect(() => {
  if (!productCards) {
   dispatch(productCardsFetch())
  }
 }, [])

 return {productCards, error, fetch}
}