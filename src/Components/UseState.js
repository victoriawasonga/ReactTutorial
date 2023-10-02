import React from 'react'
import { useState } from 'react'
function UseState() {
    const [age,SetAge]=useState(0)
    const [input,SetInput]=useState("")
    
    const handleAgeIncrease=()=>{
        SetAge(age+1)
        console.log(1)
    }
    const handleInputDisplay=(event)=>{
        SetInput(event.target.value)

    }
  return (
    <div>
        <h1>{age}</h1>
        <input type='text' onChange={handleInputDisplay}/>
        <p>{input}</p>

        <button onClick={handleAgeIncrease} >+</button>
    </div>
  )
}

export default UseState
