import { FC } from 'react'
import s from './mineralComponent.module.scss'

interface IProps {
 id: number
	title: string
 img: string
	group: {
		id: string
		title: string
	},
	properties: {
	}
}

const MineralComponent: FC<IProps> = ({title, id, img, properties, group}) => {
 return <div className={s.MineralComponent}>
  <img src={img} className={s.MineralComponent__image} alt="" />
  <div className={s.MineralComponent__info}>
   <h1 className={s.MineralComponent__title}>{title}</h1>
   <p className={s.MineralComponent__id}>id {id}</p>
   <ul className={s.MineralComponent__properties}>
    <li className={s.MineralComponent__item}>Группа: {group.title}</li>
    <li className={s.MineralComponent__item}>Группа: Ванписеры</li>
    <li className={s.MineralComponent__item}>Группа: Ванписеры</li>
    <li className={s.MineralComponent__item}>Группа: Ванписеры</li>
    <li className={s.MineralComponent__item}>Группа: Ванписеры</li>
    <li className={s.MineralComponent__item}>Группа: Ванписеры</li>
    <li className={s.MineralComponent__item}>Группа: Ванписеры</li>
    <li className={s.MineralComponent__item}>Группа: Ванписеры</li>
    <li className={s.MineralComponent__item}>Группа: Ванписеры</li>
   </ul>
  </div>
 </div>
}


export default MineralComponent