import { useState } from  'react';
import './App.css'
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
  const initialValue = "Example Text"
  const todos = [
                  {id: 1, title: "review resources"},
                  {id: 2, title: "take notes"},
                  {id: 3, title: "code out app"},
                ]
  const [newTodo, setNewTodo] = useState(initialValue);

  return(
   <div>
      <h1>My Todos</h1>
      <TodoForm />
      <p>{initialValue}</p>
      <TodoList todos={todos}/>
   </div>
  )
}

export default App
