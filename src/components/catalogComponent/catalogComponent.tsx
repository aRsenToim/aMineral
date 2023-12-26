import { FC } from 'react'
import s from './catalogComponent.module.scss'
import ProductCard from '../productCard/productCard'
import { IProductCard } from '../../types/productType'

interface IProps {
 productCards: IProductCard[]
}

const CatalogComponent: FC<IProps> = ({ productCards }) => {
 return <div className={s.Catalog}>
  <h2 className={s.Catalog__title}>Список минералов:</h2>
  <div className={s.Catalog__items}>
   {productCards.map((productCard: IProductCard) => <ProductCard productCard={productCard} key={productCard.id}/>)}
  </div>
 </div>
}


export default CatalogComponent