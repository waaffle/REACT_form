import React from 'react';
import cl from './MyForm.module.css'
import gifImg from '../../assets/images/cat.gif'

const MyForm = () => {
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
                    <h1>Пойдём гулять?</h1>
                    <img className={cl.gif} src={gifImg} alt="" />
                    <div className={cl.question__btns}>
                        <button>Да</button>
                        <button>Нет</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyForm;