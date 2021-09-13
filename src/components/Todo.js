import React from 'react'

function Todo({text,todo,setTodos,todos}) {
    const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id ))
    }
    const completedTodo = () => {
        setTodos(todos.map((item =>  {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
        
            }
           return item;
        })
        ))
        }
    return (
        <div className="todo">
           <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
           <button onClick={completedTodo} className="complete-btn"><i className="fas fa-check"></i></button>
           <button onClick={deleteTodo} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    )
}

export default Todo
