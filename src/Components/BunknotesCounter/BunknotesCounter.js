import React from 'react';
import PropTypes from 'prop-types';
import './BunknotesCounter.css';

function BunknotesCounter(props) {
    const { count } = props;

    return (
        <div className="banknotes-count-block">
            {props.children}
            <div className="banknotes-count-text-block">
                <span className="banknotes-count-text">{count}</span>
            </div>
        </div>
    )
}

BunknotesCounter.defaultProps = {
    count: 0,
};

BunknotesCounter.propTypes = {

};

export default BunknotesCounter;

