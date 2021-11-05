import React from 'react';
import PropTypes from 'prop-types';
import './Reference.css';
import VisionAllBunknotes from '../../VisionAllBunknotes/VisionAllBunknotes';
import { useSelector } from 'react-redux';

function Reference(props) {
    const { banknotes } = useSelector( state => state.serviceBanknotes);
    
    const { handleClick } = props;

    return (
        <div className="reference-wrapper">
            <div className='reference'>
                <div className="reference-title">
                    Колличество купюр в банкомате:
                </div>
                <div className="reference-all-banknotes">
                     <VisionAllBunknotes banknotes={banknotes}/>
                </div>
                <button className='close-reference' onClick={handleClick}></button>
            </div>
        </div>
    )
}

Reference.propTypes = {

};

export default Reference;

