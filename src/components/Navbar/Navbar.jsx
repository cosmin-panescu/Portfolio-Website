import React, { useEffect, useState } from 'react'
import "./Navbar.scss"
import { Link } from "react-scroll"
import { FaBars } from "react-icons/fa"


const Navbar = () => {
  const [show, setShow] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false)
      };
    });
    return () => {
      window.removeEventListener('scroll', null)
    }
  }, []);

  return (
    <div className={`navbar ${show && "navbar-show"}  ${showNav && 'mobil-menu-nav'}`} data-scroll-section>
      <h1 className='logo'>C</h1>
      <ul className={`links ${show && "navbar-show-links"}`}>
        <li>
          <Link to='home' smooth={true} duration={1000}><h3>Home</h3></Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={1000}><h3>About</h3></Link>
        </li>
        <li>
          <Link to='portfolio' smooth={true} duration={1000}><h3>Portfolio</h3></Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={1000}><h3>Contact</h3></Link>
        </li>
      </ul>
      <FaBars
        className='mobile-menu'
        onClick={() => setShowNav(!showNav)}
      />
    </div>
  )
}

export default Navbar