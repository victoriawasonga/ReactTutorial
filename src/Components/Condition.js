import React from 'react'

function Condition() {
    const age=15
  return (
    <div>
        {age>=18?<h1>you can vote</h1>:<h1>Under age</h1>}
      
    </div>
  )
}

export default Condition
