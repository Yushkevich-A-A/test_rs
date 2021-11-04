import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './MainPage.css';
import ButtonGrey from '../../Components/Buttons/ButtonGrey/ButtonGrey';
import VisionAllBunknotes from '../../Components/VisionAllBunknotes/VisionAllBunknotes';
import Reference from '../../Components/VisiableComponents/Reference/Reference';
import ButtonGreen from '../../Components/Buttons/ButtonGreen/ButtonGreen';
import SetSBanknotes from '../../Components/VisiableComponents/SetSBanknotes/SetSBanknotes';
import FormSum from '../../Components/Forms/FormSum/FormSum';

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
            <div className="main-page-act-buttons">
                <div className="block-button-mode">
                    <ButtonGreen name={'набор купюр'} handleClick={handleTriggerMode} />
                    <div className="sets-mode">{mode && <SetSBanknotes />}</div>
                </div>
                <ButtonGrey name={'справка'} handleClick={handleTriggerReference}/>
            </div>
            <div className="display-output-bankotes">
                <div className="display-output-bankotes-title">
                    Банкноты, подготовленные к выдаче:
                </div>
                <VisionAllBunknotes />
            </div>
            <div className="info-output-fields">
                <div className="sum-block">
                    <div className="sum-title">Сумма готовая к выдаче</div>
                    <div className="sum-field">1000</div>
                </div>
                <div className="sum-block">
                    <div className="sum-title">Невыданная сумма</div>
                    <div className="sum-field">10,2</div>
                </div>
            </div>
            <FormSum />
            {referense && <Reference handleClick={handleTriggerReference}/>}
        </div>
    )
}

MainPage.propTypes = {

};

export default MainPage;

