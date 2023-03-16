import React, { useEffect, useRef, useState } from 'react'
import './CustomCursor.scss'

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const [pageLoad, setPageLoad] = useState(false);

    // page load transition
    useEffect(() => {
        setTimeout(() => {
            setPageLoad(true);
        }, 1000)
    }, []);


    // change mouse position when moving the cursor
    React.useEffect(() => {
        document.addEventListener("mousemove", (event) => {
            const { clientX, clientY } = event;
            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        });
    }, []);

    return (
        <div className={`app-cursor ${pageLoad && 'transition'}`} ref={cursorRef} />
    )
}

export default CustomCursor