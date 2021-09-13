import React from 'react'
import { v4 as uuidv4 } from 'uuid';


const Form = ({setInput,setTodos,todos,input,setStatus}) => {
    const inputItem = (e) => {
setInput(e.target.value)
    }
    const addItem = (e) => {
        e.preventDefault();
        setTodos([...todos, {text: input,completed: false, id: uuidv4()}])
        setInput('')
            }

const status = (e) => {
setStatus(e.target.value)
}
    return (
     <form>
      <input value={input} onChange={inputItem} type="text" className="todo-input" />
      <button onClick={addItem} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={status} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    )
}

export default Form
