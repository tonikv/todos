import React from 'react'

const Todo = ( {todo} ) => {
    return (
        <div className="todo">
            <h3>{todo.text} </h3>
            <p>Task created: {todo.date}</p>
            <p>Time left: {todo.timeLeft} days</p>
        </div>
    )
}

export default Todo
