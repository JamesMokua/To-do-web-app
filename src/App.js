import './App.css';
import Form from './components/Form';
import Todolist from './components/Todolist';
import React,{useState,useEffect} from 'react';

function App() {
  const[input,setInput] = useState('')
  const[todos,setTodos] = useState([])
  const[status,setStatus] = useState('all')
  const[filteredTodo,setFilteredTodo] = useState([])

  const filter = () => {
    switch(status) {
      case 'completed':
        setFilteredTodo(todos.filter((todo) => todo.completed === true ))
        break;
        case 'uncompleted':
        setFilteredTodo(todos.filter((todo) => todo.completed === false ))
        break;
        default:
        setFilteredTodo(todos)
        break;
    }
  } 
  //save to local
const savetoLocalTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}
// get todos from local storage
const getLocalTodos = () => {
  if(localStorage.getItem('todos') === null){
    localStorage.setItem('todos', JSON.stringify([]))
  }else{
  let todoLocal = JSON.parse(localStorage.getItem('todos'));
  setTodos(todoLocal)
  }
}
useEffect(() => {
  getLocalTodos();
}, [])
useEffect(() => {
 filter();
 savetoLocalTodos();
  
}, [todos,status])

  return (
    <div className="App">
      <header>
      <h1>To do Web App</h1>
      </header>
      <Form  status={status} setStatus={setStatus} setInput={setInput} setTodos={setTodos} todos={todos} input={input}/>
      <Todolist filteredTodo={filteredTodo} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
