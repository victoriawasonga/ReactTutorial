import React from 'react'
import Users from './Users'

function Objects() {
    const users=[
        {id:1,name:"Victoria",email:'v@gmail.com',age:25},  //object
        {id:1,name:"Ella",email:'e@gmail.com',age:5}, 
        {id:1,name:"Jillian",email:'j@gmail.com',age:20}, 
    ]
  return (
    <div>
        {users.map((user,key)=>{return (
            <Users name={user.name} age={user.age} email={user.email}/>
        )}
        )}

      
    </div>
  )
}

export default Objects
