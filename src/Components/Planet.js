import React from 'react'

function Planet(props) {
  return (
    <div>
        <h1>{props.isGasPlanet && props.name}</h1>
      
    </div>
  )
}

export default Planet
