const AddTodo = props => {
    return (
        <div>
            <form>
                <label htmlFor="Todo"></label>
                <input type="text"/>
                <span>
                    <button onClick="AddTodo">Add</button>
                </span>
            </form>
        </div>
    )
}

export default AddTodo
