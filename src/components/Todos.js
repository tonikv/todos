import React from 'react'
import Todo from './Todo'

const Todos = ( {todos} ) => {
    return (
        <div className="todosContainer">
            {
                todos.map((todo) => (
                    <Todo todo={todo} key={todo.id}/>
                ))
            }
        </div>
    )
}

export default Todos
