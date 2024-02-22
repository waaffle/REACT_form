import React from 'react';
import cl from './MyForm.module.css'

const MyForm = () => {
    return (
        <div>
            <div className={cl.form__box}>
            <form action="">
                <input type="text" placeholder='текст' />
                <button>Отправить</button>
            </form>
            </div>
        </div>
    );
};

export default MyForm;