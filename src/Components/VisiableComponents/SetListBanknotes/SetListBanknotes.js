import React from 'react';
import PropTypes from 'prop-types';
import './SetListBanknotes.css';
import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { changeSetBanknotes } from '../../../reduxFold/actions/actionCreator';

function SetListBanknotes(props) {
    const { handleTriggerMode } = props;
    const { amountSets } = useSelector( state => state.serviceBanknotes);
    const dispatch = useDispatch();
    const setsBancnotesList = new Array(amountSets).fill({}).map( item => { return {...item, id:nanoid() }});
    const handleClick = (id) => {
        handleTriggerMode(false);
        dispatch(changeSetBanknotes(id))
    }

    return (
        <div className='sets-banknotes'>
            {
                setsBancnotesList.map((item, index) => <div className="set-banknotes" 
                    key={item.id} onClick={() => handleClick(index)}>
                    Набор {index + 1}
                    </div>)
            }
        </div>
    )
}

SetListBanknotes.propTypes = {
    handleTriggerMode: PropTypes.func,
};

export default SetListBanknotes;

