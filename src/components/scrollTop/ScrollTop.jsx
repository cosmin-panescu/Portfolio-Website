import React, { useEffect, useState } from 'react'
import './ScrollTop.scss'

const ScrollTop = () => {
  const [show, setShow] = useState(false); // show the scroll-to-top button after 500px
  const [pageLoad, setPageLoad] = useState(false);

  // page load transition
  useEffect(() => {
    setTimeout(() => {
      setPageLoad(true);
    }, 1000)
  }, []);

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
    <a aria-label='top' href="#" className={`scroll-top ${show && 'show-scroll'} ${pageLoad && 'main transition'}`}>
      <i className="uil uil-arrow-up scroll-top-icon"></i>
    </a>
  )
}

export default ScrollTop