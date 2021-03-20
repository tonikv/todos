import React from 'react'

const Todo = ( {todo} ) => {
    return (
        <div className="todo">
            <h3>{todo.text} </h3>
            <p>{todo.date}</p>
        </div>
    )
}

export default Todo
