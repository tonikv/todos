import PropTypes from 'prop-types';

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

Header.defaultProps = {
    name: 'Todo'
};

Header.propTypes = {
    name: PropTypes.string
};

export default Header
