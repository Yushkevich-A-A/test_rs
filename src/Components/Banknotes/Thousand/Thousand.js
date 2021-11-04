import React from 'react';
import PropTypes from 'prop-types';
import './Thousand.css';

function Thousand(props) {
    return (
        <div className='banknote-thousand'>
            <span className="banknote-thousand-span">
                1000
            </span>
        </div> 
    )
}

Thousand.propTypes = {

};

export default Thousand;

