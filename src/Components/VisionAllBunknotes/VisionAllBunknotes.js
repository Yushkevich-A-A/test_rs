import React from 'react';
import PropTypes from 'prop-types';
import BunknotesCounter from '../BunknotesCounter/BunknotesCounter';
import Fifty from '../Banknotes/Fifty/Fifty';
import Hundred from '../Banknotes/Hundred/Hundred';
import TwoHundred from '../Banknotes/TwoHundred/TwoHundred';
import FiveHundred from '../Banknotes/FiveHundred/FiveHundred';
import Thousand from '../Banknotes/Thousand/Thousand';
import TwoThousand from '../Banknotes/TwoThousand/TwoThousand';
import FiveThousand from '../Banknotes/FiveThousand/FiveThousand';
import './VisionAllBunknotes.css';

function VisionAllBunknotes(props) {
    const { banknotes } = props;
    
    return (
        <div className='block-vision-all-banknotes'>
            <BunknotesCounter count={banknotes.fifty}>
                <Fifty /> 
            </BunknotesCounter>
            <BunknotesCounter count={banknotes.hundred}>
                <Hundred /> 
            </BunknotesCounter>
            <BunknotesCounter count={banknotes.twoHundred}>
                <TwoHundred /> 
            </BunknotesCounter>
            <BunknotesCounter count={banknotes.fiveHundred}>
                <FiveHundred /> 
            </BunknotesCounter>
            <BunknotesCounter count={banknotes.thousand}>
                <Thousand /> 
            </BunknotesCounter>
            <BunknotesCounter count={banknotes.twoThousand}>
                <TwoThousand /> 
            </BunknotesCounter>
            <BunknotesCounter count={banknotes.fiveThousand}>
                <FiveThousand /> 
            </BunknotesCounter>

        </div>
    )
}

VisionAllBunknotes.defaultProps = {
    banknotes: {
        fifty: 0,
        hundred: 0,
        twoHundred: 0,
        fiveHundred: 0,
        thousand: 0,
        twoThousand: 0,
        fiveThousand: 0,
    }
}

VisionAllBunknotes.propTypes = {

};

export default VisionAllBunknotes;

