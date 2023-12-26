import { FC } from "react"
import CatalogComponent from "../components/catalogComponent/catalogComponent"
import { useAppSelector } from "../store/hooks"
import { useProductCard } from "../hooks/useProductCard"




const Catalog: FC = () => {
 const {productCards, error, fetch} = useProductCard()
 return <CatalogComponent productCards={productCards ?? []}/>
}


export default Catalog