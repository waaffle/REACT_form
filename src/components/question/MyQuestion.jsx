import React from 'react';
import cl from './MyQuestion.module.css'
import gifImg from '../../assets/images/cat.gif'
import MyButton from '../button/MyButton';

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
                        <div className={cl.question__btns}>
                            <MyButton  text='Да' />
                            <MyButton  text='Нет' />
                        </div>
                    </div>
                 </div>
                
            </div>
        </div>
    );
};

export default MyQuestion;