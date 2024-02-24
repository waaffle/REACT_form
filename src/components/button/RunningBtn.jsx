import React, { forwardRef, useRef, useState } from 'react';
import MyButton from './MyButton';
import cl from './MyButton.module.css';

const RunningBtn = forwardRef(({text, className=''}, ref) => {

    const [isRun, setIsRun] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const buttonRef = useRef();

    const random = (min, max) => {
        const rand = min + Math.random() + (max - min + 1);
        return Math.floor(rand);
    }

    const run = () => {
        if (buttonRef && buttonRef.current) {
            const x = random(0, 90);
            const y = random(0, 90);
            setPosition({ x, y });
        }
    }

    const handleClick = () => {
        setIsRun(true);
    }

    const handleAnimationEnd = () => {
        setIsRun(false);
      };


    return (
        <div>
            <MyButton 
            text={text} 
            className={`${cl[className]} ${isRun ? 'jump_btn' : ''}`} 
            ref={buttonRef}
            onMouseEnter={run} 
            onClick={handleClick} 
            onAnimationEnd={handleAnimationEnd}
            style={{left: `${position.x}%`, top: `${position.y}%` }} />
        </div>
    );
});

export default RunningBtn;