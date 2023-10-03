import React from 'react'

function TodoView(props) {
  return (
    <div>
        <ul>
            {props.TodoList.map((todo)=>{
                return (<li>
                    <p style={{color:todo.completed?"green":"black"}}>{todo.taskName}</p>
                    <p>{}</p>
                    <button onClick={()=>props.handleComplete(todo.id)}>Complete</button>

                    <button onClick={()=>props.handleDelete(todo.id)}>X</button>
                    </li>)
             }
            )}
        </ul>
      
    </div>
  )
}

export default TodoView
