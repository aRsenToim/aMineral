import { FC, useState } from "react"
import Input from "../components/UI/input/input"



const Create: FC = () => {
 const [title, setTitle] = useState<string>('')
 return <div>
  <h1></h1>
  <Input placeholder="Введите название минерала" value={title} setValue={(value: string) => {setTitle(value)}} desc="Название минерала:"/>
 </div>
}


export default Create