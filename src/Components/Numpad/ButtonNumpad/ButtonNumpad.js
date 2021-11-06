import React from 'react';
import PropTypes from 'prop-types';
import './ButtonNumpad.css';

function ButtonNumpad(props) {
    const { value, handleClick } = props;

    
    const handleNumpadClick = () => {
        handleClick(value);
    }

    return (
        <div className='button-num' onClick={handleNumpadClick}>
            <span className="button-num-text">
                {value}
            </span>
        </div>
    )
}

ButtonNumpad.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    handleClick: PropTypes.func,
}

export default ButtonNumpad

