import React from 'react'

function Users(user) {
  return (
    <div>
      <h1>{user.id} {user.name} {user.age} {user.email}</h1>
    </div>
  )
}

export default Users
