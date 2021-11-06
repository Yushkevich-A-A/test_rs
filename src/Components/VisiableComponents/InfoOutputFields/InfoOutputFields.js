import React from 'react';
import { useSelector } from 'react-redux';

function InfoOutputFields(props) {
    const { sumToIssue, cancelleAmount } = useSelector( state => state.serviceBanknotes )

    return (
        <div className="info-output-fields">
            <div className="sum-block">
                <div className="sum-title">Сумма к выдаче</div>
                <div className="sum-field">{sumToIssue.toFixed(0)}</div>
            </div>
            <div className="sum-block">
                <div className="sum-title">Невыданная сумма</div>
                <div className="sum-field">{cancelleAmount.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default InfoOutputFields;

