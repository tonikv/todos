import PropTypes from 'prop-types';

const styleAdd = {
    backgroundColor: "green"
}

const styleClose = {
    backgroundColor: "red"
}

const Header = ( {name, toggle, newTodo} ) => {
    return (
        <div className="Header">
            <h1>{name}</h1>
            {newTodo ? 
                <button 
                className="btn" 
                style = {styleClose}
                onClick={() => toggle()}
                >Close</button>
            : <button 
                className="btn" 
                style = {styleAdd}
                onClick={() => toggle()}
                >Add</button>
            }
        </div>
    )
}

Header.defaultProps = {
    name: 'Task Manager'
};

Header.propTypes = {
    name: PropTypes.string,
    toggle: PropTypes.func
};

export default Header
