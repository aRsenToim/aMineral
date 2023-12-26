import { FC } from "react"
import { useParams } from "react-router-dom" 
import { useProduct } from "../hooks/useProduct"
import MineralComponent from "../components/mineralComponent/mineralComponent"




const Mineral: FC = () => {
 const {id} = useParams()
 const {product, isFetch} = useProduct(Number(id))

 console.log(product);
 

 return <>{isFetch ? <p>dassad</p> : <>
  {product ? <MineralComponent id={product?.id} group={product?.group} properties={product?.properties} title={product?.title} img={product?.img}/> : undefined}
 </> }</>
}


export default Mineral