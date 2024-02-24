import React, { forwardRef } from 'react';
import cl from './NoButton.module.css';

const NoButton = ({ text }) => {
    return (
        <div className={cl.red_box}>
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

export default NoButton;