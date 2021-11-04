import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGrey.css';

function ButtonGrey(props) {
    const { name, handleClick } = props;
    return (
        <button className='button-grey' onClick={handleClick}>
            {name.toLowerCase()}
        </button>
    )
}

ButtonGrey.defaultProps = {
    name: 'Кнопка',
    handleClick: () => {console.log('click')},
};

ButtonGrey.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
};

export default ButtonGrey;

