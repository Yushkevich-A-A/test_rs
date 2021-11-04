import React from 'react';
import PropTypes from 'prop-types';
import './Reference.css';
import VisionAllBunknotes from '../../VisionAllBunknotes/VisionAllBunknotes';

function Reference(props) {

    const { handleClick } = props;

    return (
        <div className="reference-wrapper">
            <div className='reference'>
                <div className="reference-title">
                    Колличество купюр в банкомате:
                </div>
                <div className="reference-all-banknotes">
                     <VisionAllBunknotes />
                </div>
                <button className='close-reference' onClick={handleClick}></button>
            </div>
        </div>
    )
}

Reference.propTypes = {

};

export default Reference;

