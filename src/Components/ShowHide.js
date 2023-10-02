import React from 'react'
import { useState } from 'react'

function ShowHide() {
    const [showText,setShowText]=useState(false)
  return (
    <div>
        
      {showText && <h1>showing!</h1>}
      <button onClick={()=>setShowText(!showText)}>Show or hide </button>
    </div>
  )
}

export default ShowHide
