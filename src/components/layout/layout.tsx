import { FC } from 'react'
import s from './layout.module.scss'
import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/navbar'



const Layout: FC = () => {
 return <div className={s.Layout}>
  <Navbar/>
  <Outlet/>
 </div>
}


export default Layout