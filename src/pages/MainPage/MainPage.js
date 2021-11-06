import React, { useState } from 'react';
import './MainPage.css';
import ButtonGrey from '../../Components/Buttons/ButtonGrey/ButtonGrey';
import VisionAllBunknotes from '../../Components/VisionAllBunknotes/VisionAllBunknotes';
import Reference from '../../Components/VisiableComponents/Reference/Reference';
import FormSum from '../../Components/Forms/FormSum/FormSum';
import BlockButtonMode from '../../Components/VisiableComponents/BlockButtonMode/BlockButtonMode';
import InfoOutputFields from '../../Components/VisiableComponents/InfoOutputFields/InfoOutputFields';
import { useSelector } from 'react-redux';

function MainPage(props) {
    const [ referense, setReference ] = useState( false );
    const { requiredBanknotes } = useSelector( state => state.serviceBanknotes );

    const handleTriggerReference = () => {
        setReference(!referense);
    }

    return (
        <div className='main-page'>
            <div className="main-page-act-buttons">
                <BlockButtonMode />
                <ButtonGrey name={'справка'} handleClick={handleTriggerReference}/>
            </div>
            <div className="display-output-bankotes">
                <div className="display-output-bankotes-title">
                    Банкноты, подготовленные к выдаче:
                </div>
                <VisionAllBunknotes banknotes={requiredBanknotes}/>
            </div>
            <InfoOutputFields />
            <FormSum />
            {referense && <Reference handleClick={handleTriggerReference}/>}
        </div>
    )
}

export default MainPage;

