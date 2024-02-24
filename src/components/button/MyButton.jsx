import React from 'react';
import cl from './MyButton.module.css'

const MyButton = ({text}) => {
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

export default MyButton;