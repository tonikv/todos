import React from 'react';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos'
import TodoForm from './components/TodoForm'
import { useState} from 'react'
import parseDate from './helpers/parseDate'
import getTimeBetweenDates from './helpers/getTimeBetweenDates'

function App() {
  const [newTodo, setNewTodo] = useState(false);
  const [todos, setTodos] = useState([])

  function toggle() {
    setNewTodo(!newTodo);
  }

  function addTodo(todoObj) {
    const date = parseDate(Date.now())
    const timeLeft = getTimeBetweenDates(Date.now(), todoObj.endTime);
    const newTodo= {
      "id": Math.floor(Math.random() * 9999),
      "text": todoObj.todoText,
      "date": date,
      "timeLeft": timeLeft.days,
      "done": false
    }
    setTodos(todos.concat(newTodo));
  }

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
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
        className="todoForm"
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
