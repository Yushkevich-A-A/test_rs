import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MainPage.css';
import ButtonGrey from '../../Components/Buttons/ButtonGrey/ButtonGrey';
import VisionAllBunknotes from '../../Components/VisionAllBunknotes/VisionAllBunknotes';
import Reference from '../../Components/VisiableComponents/Reference/Reference';
import ButtonGreen from '../../Components/Buttons/ButtonGreen/ButtonGreen';

function MainPage(props) {
    const [ referense, setReference ] = useState( false );
    const [ mode, setMode ] = useState( false );

    const handleTriggerReference = () => {
        setReference(!referense);
    }

    const handleTriggerMode = () => {
        setMode(!mode);
    }

    return (
        <div className='main-page'>
            <ButtonGreen name={'набор'} handleClick={handleTriggerMode} />
            <ButtonGrey name={'справка'} handleClick={handleTriggerReference}/>
            {referense && <Reference handleClick={handleTriggerReference}/>}
        </div>
    )
}

MainPage.propTypes = {

};

export default MainPage;

