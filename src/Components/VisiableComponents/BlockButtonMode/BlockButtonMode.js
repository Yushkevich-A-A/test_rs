import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BlockButtonMode.css';
import ButtonGreen from '../../Buttons/ButtonGreen/ButtonGreen';
import SetListBanknotes from '../SetListBanknotes/SetListBanknotes';

function BlockButtonMode(props) {
    const [ mode, setMode ] = useState( false );

    const handleTriggerMode = (value) => {
        setMode(value);
    }

    return (
        <div className="block-button-mode">
            <ButtonGreen name={'набор купюр'} handleClick={() => handleTriggerMode(!mode)} />
            <div className="sets-mode">{mode && <SetListBanknotes handleTriggerMode={handleTriggerMode}/>}</div>
        </div>
    )
}

BlockButtonMode.propTypes = {

};

export default BlockButtonMode;

