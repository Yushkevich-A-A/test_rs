import React from 'react';
import PropTypes from 'prop-types';
import './ButtonGreen.css';

function ButtonGreen(props) {
    const { name, handleClick } = props;
    return (
        <button className='button-green' onClick={handleClick}>
            {name.toLowerCase()}
        </button>
    )
}

ButtonGreen.propTypes = {

};

export default ButtonGreen;

