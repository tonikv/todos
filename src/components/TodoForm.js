import { useState } from "react";

const TodoForm = ( {addTodo} ) => {
    const [todoText, setTodoText] = useState("");
    const [endTime, setEndTime] = useState("");

    const sentTodo = (e) => {
        e.preventDefault();
        addTodo( {endTime, todoText});
    }

    return (
        <div className="todoForm">
            <form onSubmit={sentTodo}>
                <input 
                    className="full-width"
                    type="text"
                    placeholder="new task"
                    required={true}
                    onChange={e => setTodoText(e.target.value)}>
                </input>
                <input 
                    className="full-width"
                    type="date"
                    placeholder="time to complete"
                    required={true}
                    onChange={e => setEndTime(e.target.value)}>
                </input>
                <button className="btn-addTodo" type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
