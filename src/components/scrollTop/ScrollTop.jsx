import React, { useEffect, useState } from 'react'
import './ScrollTop.scss'

const ScrollTop = () => {
  const [show, setShow] = useState(false); // show the scroll-to-top button after 500px

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener('scroll', null);
    }
  }, []);

  return (
    <a href="#" className={`scroll-top ${show && 'show-scroll'}`}>
      <i className="uil uil-arrow-up scroll-top-icon"></i>
    </a>
  )
}

export default ScrollTop