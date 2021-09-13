import React from 'react'
import Todo from './Todo'

export default function Todolist({todos,setTodos,filteredTodo}) {
    return (
        <div>
 <div className="todo-container">
      <ul className="todo-list">
        {filteredTodo.map((todo) => (
            <Todo  todo={todo} setTodos={setTodos} todos={todos} key={todo.id} text={todo.text}/>
        ))}
      </ul>
    </div>
        </div>
    )
}
