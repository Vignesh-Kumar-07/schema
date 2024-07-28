

import { useState } from "react"
import Main from "./Main"
import Sidebar from "./Sidebar"

export default function App(){

  const [isOpen,setIsOpen] = useState(false)
  return (
  <div className="app">
            <Main setIsOpen = {setIsOpen}/>
            <Sidebar isOpen = {isOpen} setIsOpen = {setIsOpen}/>

          </div>
          )

}