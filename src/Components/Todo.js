import React from 'react'
import TodoView from './TodoView'
import { useState } from 'react'

function Todo() {
    const [TodoList,setTodoList]=useState([])
    //keep track of the value in the input 
    const [newTask,setNewTask]=useState([])
    const handleInput=(e)=>{
        setNewTask(e.target.value)

    }
    const handleAddTask=()=>{
        const task={
            id: TodoList.length ===0 ? 1: TodoList[TodoList.length-1].id+1, 
            taskName:newTask,
            completed:false,
        }
        const newTodoList=[...TodoList,task]
        setTodoList(newTodoList)

    }
    const handleDelete=(taskid)=>{
        const newArr=TodoList.filter((task)=>{
            return task.id !== taskid
        })
        setTodoList(newArr)

    }
    const handleComplete=(taskid)=>{
        setTodoList(
            TodoList.map((todo)=>{
                if (todo.id === taskid){
                    return {...todo ,completed : ! todo.completed}
                }
                else{
                    return todo;
                }
            })
        )


    }
  return (
    <div>
        <input type='text' onChange={handleInput}/>
        <br/>
        <button onClick={handleAddTask}>Add Task</button>
      <TodoView TodoList={TodoList} handleDelete={handleDelete} handleComplete={handleComplete} />
    </div>
  )
}

export default Todo
