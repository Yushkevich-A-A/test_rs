import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGreen.css';

function ButtonGreen(props) {
    const { name, handleClick, typeButton } = props;
    return (
        <button type={typeButton} className='button-green' onClick={handleClick}>
            {name.toLowerCase()}
        </button>
    )
}

ButtonGreen.defaultProps = {
    typeButton: 'button',
 }

ButtonGreen.propTypes = {
    
};

export default ButtonGreen;

