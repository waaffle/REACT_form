import React, { useRef, useState } from 'react';
import gifImg from '../../assets/images/cat.gif';
import NoButton from '../button/NoButton';
import YesButton from '../button/YesButton';
import cl from './MyQuestion.module.css';


const MyQuestion = ({question}) => {

    return (
        <div>
            <div className={cl.container}>
                <div className={cl.animation}>
                    <div className={cl.glowing}>
                        <span style={{ '--i': 1}}></span>
                        <span style={{ '--i': 2}}></span>
                        <span style={{ '--i': 3}}></span>
                    </div>
                    <div className={cl.glowing}>
                        <span style={{ '--i': 1}}></span>
                        <span style={{ '--i': 2}}></span>
                        <span style={{ '--i': 3}}></span>
                    </div>
                    <div className={cl.glowing}>
                        <span style={{ '--i': 1}}></span>
                        <span style={{ '--i': 2}}></span>
                        <span style={{ '--i': 3}}></span>
                    </div>
                    <div className={cl.glowing}>
                        <span style={{ '--i': 1}}></span>
                        <span style={{ '--i': 2}}></span>
                        <span style={{ '--i': 3}}></span>
                    </div>
                </div>
                <div className={cl.question__box}>
                    <div className={cl.question__box__inner}>
                        <h1>{question}</h1>
                        <div className={cl.gif_container}>
                            <img className={cl.gif} src={gifImg} alt="" />
                        </div>
                    </div>
                 </div>
                 <YesButton  text='Да' />
                <NoButton  text='Нет' />
                
            </div>
        </div>
    );
};

export default MyQuestion;