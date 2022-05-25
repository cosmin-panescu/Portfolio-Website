import React from 'react'
import "./Navbar.scss"
import { Link } from "react-scroll"

const Navbar = () => {


  return (
    <div className='navbar' data-scroll-section>
      <h1 className='logo'>C</h1>
      <ul className='links'>
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
    </div>
  )
}

export default Navbar