import React, { forwardRef, useEffect, useRef, useState } from 'react';
import cl from './NoButton.module.css';

const NoButton = ({ text }) => {

    const [position, setPosition] = useState({ x: 65, y: 70 });

    const buttonRef = useRef();

    const random = (min, max) => {
        const rand = min + Math.random() * (max - min + 1);
        return Math.floor(rand);
    }


    const run = () => {
        setPosition({ x: random(0, 90), y: random(0, 90) });
        setTimeout(() => setPosition({ x: random(0, 90), y: random(0, 90) }), 300)
        setTimeout(() => setPosition({ x: random(0, 90), y: random(0, 90) }), 600)
    }

    useEffect(() => {
        const button = buttonRef.current;
        button.style.left = `${position.x}%`;
        button.style.top = `${position.y}%`;
    }, [position]);


    return (
        <div 
            className={`${cl.red_box}`} 
            ref={buttonRef}
            onMouseEnter={() => run()}>
            <a>
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