import React from 'react';
import gifImg from '../assets/images/cat.gif';
import cl from '../components/question/MyQuestion.module.css';

const YesPage = () => {
    return (
        <div>
            <div className={cl.bg}>
                <div className={cl.container}>
                    <div className={cl.animation2}>
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
                    <div  className={cl.question__box}>
                        <div className={cl.yes__box__inner}>
                            <h1 > {'жду:)'}</h1>
                            <div className={cl.gif_container2}>
                                <img className={cl.gif2} src={gifImg} alt="" />
                            </div>
                        </div>
                    </div>                
                </div>
            </div>
        </div>
    );
};

export default YesPage;