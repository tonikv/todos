import React from 'react';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import { useState} from 'react'

function App() {
  const [newTodo, setNewTodo] = useState(false);
  const [todos, setTodos] = useState([
    {
      "id": 1,
      "text": "Buy milk",
      "date": "12.01.2001",
      "done": false
    },
    {
      "id": 2,
      "text": "Buy cerial",
      "date": "13.01.2012",
      "done": false
    },
    {
      "id": 3,
      "text": "Go to work",
      "date": "Everyday",
      "done": true
    }
  ])

  function toggle() {
    setNewTodo(!newTodo);
  }

  function addTodo(todoObj) {
    const newState = todos.concat(todoObj);
    setTodos(newState);
  }

  function deleteTodo(id) {
    const newState = todos.filter(todo => todo.id === id ? "" : todo);
    setTodos(newState);
  }

  return (
    <div className="container">
      <Header 
        name="Task Manager"
        toggle={toggle}
        newTodo={newTodo}
      />
      {newTodo ? 
      <TodoForm 
        className="addTodo"
        addTodo={addTodo}
      /> 
      : ""}
      {(todos.length > 0) ? 
      <Todos 
        className="todoList" 
        todos={todos}
      />
      : <h3>No tasks!</h3>}
    </div>
  );
}

export default App;
