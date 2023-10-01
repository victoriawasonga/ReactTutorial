import React from 'react'

function Lists() {
    const names=['Vickie','Elizabeth','Okumu']
  return (
    <div>
        {names.map((name,key)=>{
            return <h1 key={key}>{name}</h1>})}
      
    </div>
  )
}

export default Lists
