import React, { forwardRef } from 'react';
import cl from './YesButton.module.css'
import { Link } from 'react-router-dom';

const YesButton = ({text}) => {
    return (
        <Link to='/yes' className={cl.button_box}>
            <a href={'#'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text}
            </a>
        </Link>
    );
};

export default YesButton;