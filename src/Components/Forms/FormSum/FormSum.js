import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ButtonGreen from '../../Buttons/ButtonGreen/ButtonGreen';
import './FormSum.css';
import Numpad from '../../Numpad/Numpad';

function FormSum(props) {

    const [ value, setValue ] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div className="input-block">
            <form className='input-form' onSubmit={handleSubmit}>
                <div className="input-block-field">
                    <label htmlFor="field-sum" className='input-label'>
                        Ведите сумму для снятия
                    </label>
                    <input className='field-input-sum' 
                    name='field-sum' 
                    id='field-sum' 
                    type='number' 
                    value={value} 
                    onChange={handleChange}/>
                </div>
                <button className='button-submit'>
                    <ButtonGreen name={'выдача'}/>
                </button>
            </form>
            <div className="numpad-block">
                <Numpad />
            </div>
        </div>
    )
}

FormSum.propTypes = {

}

export default FormSum

