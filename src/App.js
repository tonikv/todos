import React from 'react';
import './App.css';
import Header from './components/Header'
import Todos from './components/Todos'
import { useState} from 'react'

function App() {
  const [todos, AddTodo] = useState([
    {
      id: 1,
      text: "Buy milk",
      date: Date.now(),
      done: false
    },
    {
      id: 2,
      text: "Buy cerial",
      date: Date.now(),
      done: false
    },
    {
      id: 3,
      text: "Go to work",
      date: Date.now(),
      done: true
    }
  ])

  return (
    <div className="App">
      <Header name="Todo"/>
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
