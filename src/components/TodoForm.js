import { useState } from "react";

const TodoForm = ( {addTodo} ) => {
    const [todoText, setTodoText] = useState("");
    const [date, setDate] = useState("");

    const sentTodo = (e) => {
        e.preventDefault();
        const newTodo= {
            "id": Math.floor(Math.random() * 9999),
            "text": todoText,
            "date": date,
            "done": false
        }
        addTodo(newTodo);
    }

    return (
        <div className="todoForm">
            <form onSubmit={sentTodo}>
                <input 
                    type="text"
                    placeholder="new task"
                    required={true}
                    onChange={e => setTodoText(e.target.value)}>
                </input>
                <input 
                    type="text"
                    placeholder="set date"
                    required={true}
                    onChange={e => setDate(e.target.value)}>
                </input> 
                <button className="btn" type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
