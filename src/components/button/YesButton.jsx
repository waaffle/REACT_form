import React, { forwardRef } from 'react';
import cl from './YesButton.module.css'

const YesButton = ({text}) => {
    return (
        <div className={cl.button_box}>
            <a href={'#'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </a>
        </div>
    );
};

export default YesButton;