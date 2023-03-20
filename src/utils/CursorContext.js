// react
import React, { createContext, useEffect, useState } from 'react'

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
    // mouse position state
    const [cursorPosition, setCursorPosition] = useState({
        x: 0,
        y: 0,
    });

    // mouse background state
    const [cursorBackground, setCursorBackground] = useState("default");

    // detect if is mobile
    const isMobile = window.innerWidth < 768;

    useEffect(() => {
        if (!isMobile) {

            const cursorMove = e => {
                setCursorPosition({
                    x: e.clientX,
                    y: e.clientY,
                });
            };

            // update mouse position
            window.addEventListener("mousemove", cursorMove);
            // remove event
            return () => {
                window.removeEventListener("mousemove", cursorMove);
            }
        } else {
            setCursorBackground('none');
        }
    })

    const cursorVariants = {
        default: {
            x: cursorPosition.x - 16,
            y: cursorPosition.y - 16,
        },
        text: {
            width: '150px',
            height: '150px',
            x: cursorPosition.x - 72,
            y: cursorPosition.y - 72,
            backgroundColor: '#fff',
            mixBlendMode: 'difference',
        },
        none: {
            width: 0,
            height: 0,
            backgroundColor: 'rgba(255,255,255, 1)',
        },
    };

    // cursor enter
    const cursorEnter = () => {
        setCursorBackground("text");
    };

    // cursor leave
    const cursorLeave = () => {
        setCursorBackground("default");
    };

    return (
        <CursorContext.Provider value={{ cursorVariants, cursorBackground, cursorEnter, cursorLeave }}>
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider