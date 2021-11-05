import React from 'react';
import PropTypes from 'prop-types';
import './Numpad.css';
import ButtonNumpad from './ButtonNumpad/ButtonNumpad';

function Numpad(props) {
    const { addValue, removeValue } = props;

    const buttonsPad = [ 1, 2, 3, 'del', 4, 5, 6, '.', 7, 8, 9, 0 ]
    return (
        <div className='numpad'>
            {
                buttonsPad.map( item => <ButtonNumpad key={item} 
                    value={item} handleClick={ item !== 'del' ? addValue : removeValue }/>)
            }
        </div>
    )
}

Numpad.propTypes = {

};

export default Numpad;

