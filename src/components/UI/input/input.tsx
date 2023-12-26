import { FC } from 'react'
import s from './input.module.scss'


interface IProps{
 desc: string
 placeholder: string
 value: string
 setValue: (value: string) => void
}

const Input: FC<IProps> = ({desc, placeholder, value, setValue}) => {
 return <form>
  <label htmlFor="" className={s.Label}>{desc}</label>
  <input type="text" className={s.Input} placeholder={placeholder} value={value} onChange={(e) => {setValue(e.currentTarget.value)}}/>
 </form>
}


export default Input