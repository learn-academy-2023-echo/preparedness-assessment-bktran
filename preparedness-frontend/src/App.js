import React, { useState }from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"



const App = () => {
    const [name, setName] = useState("")

    const handleChange = (e) => {
      setName(e.target.value)
    }

    const handleClick = () => {
      setName("")
    } 

  return (
    <div className="entire-content">
      <h1 style={{color:'white', fontSize:'50px' }}>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">

          <div className='input-label'>
            <Label for="name">Enter your name</Label>
          </div>
          <Input value={name} onChange={handleChange}/>
        </div>
        <div className='button-container'>
        <ModalComponent inputName={name}/>
        <Button onClick={handleClick}>Reset</Button>
        </div>
      </div>
    </div>
  )
}

export default App
