import React from 'react'
import Planet from './Planet';

function Planets() {
    const planets = [
        { name: "Mars", isGasPlanet: false },
        { name: "Earth", isGasPlanet: false },
        { name: "Jupiter", isGasPlanet: true },
        { name: "Venus", isGasPlanet: false },
        { name: "Neptune", isGasPlanet: true },
        { name: "Uranus", isGasPlanet: true },
      ];
    return (
        <div>
            {planets.map((planet)=>{return (
                <Planet name={planet.name} isGasPlanet={planet.isGasPlanet}/>
            )})}
        
        </div>
    )
}

export default Planets
