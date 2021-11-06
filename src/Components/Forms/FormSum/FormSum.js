import React, { useEffect, useRef, useState } from 'react';
import ButtonGreen from '../../Buttons/ButtonGreen/ButtonGreen';
import './FormSum.css';
import Numpad from '../../Numpad/Numpad';
import { useDispatch, useSelector } from 'react-redux';
import { inputRequestSum, withdrawalOfTheAmount } from '../../../reduxFold/actions/actionCreator';
import { parserBanknotes } from '../../../functions/functions';

function FormSum(props) {
    const { banknotes, inputSum } = useSelector( state => state.serviceBanknotes);
    const dispatch = useDispatch();
    const [ value, setValue ] = useState(inputSum);
    const currentRef = useRef(null);

    useEffect(() => {
        if (value === 0) {
            return;
        }
        const requiredSum = parseFloat(value) || 0;
        const { requiredBanknotes, remains } = parserBanknotes(requiredSum, banknotes);
        dispatch(inputRequestSum( requiredSum, requiredBanknotes, remains ));
    }, [value])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(withdrawalOfTheAmount());
        setValue('');
    }
    
    const handleChange = (e) => {
        const inputValue = e.target.value.replace(/[^0-9\.]/g, '');
        setValue(inputValue);
    }

    const addValue = (val) => {
        currentRef.current.focus();
        if (val === '.' && value.toString().includes(val)) {
            return;
        }
        setValue(value.toString() + val);
    }

    const removeValue = () => {
        currentRef.current.focus();
        if (value.length === 0) {
            return;
        }
        setValue(value.slice(0, value.length - 1));
    }

    return (
        <div className="input-block">
            <form className='input-form' onSubmit={handleSubmit}>
                <div className="input-block-field">
                    <label htmlFor="field-sum" className='input-label'>
                        Ведите сумму для снятия
                    </label>
                    <input className='field-input-sum' name='field-sum' 
                    id='field-sum' value={value} onChange={handleChange}
                    placeholder='0' ref={currentRef} maxLength='12'/>
                </div>
                <ButtonGreen name={'выдача'} typeButton={'submit'}/>
            </form>
            <div className="numpad-block">
                <Numpad addValue={addValue} removeValue={removeValue}/>
            </div>
        </div>
    )
}

export default FormSum;

