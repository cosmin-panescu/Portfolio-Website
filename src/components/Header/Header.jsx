import React, { useEffect } from 'react'
import "./Header.scss"
import SplitText from "../../utils/Split3.min.js"
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa"
import { Element } from 'react-scroll'
import gsap from 'gsap'

// Main header text animation with GSAP
const Header = () => {
  useEffect(() => {
    const split = new SplitText('.header-title', {
      type: "lines",
      linesClass: "lineChildren"
    });

    const splitParent = new SplitText('.header-title', {
      type: "lines",
      linesClass: "lineParent"
    });

    gsap.to(split.lines, {
      duration: 1.25,
      y: 0,
      opacity: 1,
      stagger: 0.2,
      ease: "power2",
    })
  }, []);

  return (
    <Element name='home'>
      <div className='header' data-scroll-section>
        <div className="header-text">
          <h1 className='header-title'>Hi, <br />I'm Cosmin, <br />web developer</h1>
          <h4 className='header-title'>- Front-End Developer -</h4>
        </div>

        {/* Social links */}
        <div className="header-socials">
          <ul>
            <h2 className='h-1'>|</h2>
            <li><a className='github' href="https://github.com/cosmin-panescu" target="_blank"><FaGithub /></a></li>
            <li><a className='linkedin' target="_blank" href="https://www.linkedin.com/in/cosmin-p%C4%83nescu-29430823b/"><FaLinkedin /></a></li>
            <li><a className='instagram' target="_blank" href="https://www.instagram.com/pane_cosmin/"><FaInstagram /></a></li>
            <li><a className='facebook' target="_blank" href="https://www.facebook.com/profile.php?id=100081922758415"><FaFacebook /></a></li>
            <li><a className='twitter' target="_blank" href="https://twitter.com/PnescuCosmin1  "><FaTwitter /></a></li>
            <h2 className='h-2'>|</h2>
          </ul>
        </div>

      </div>
    </Element>
  )
}

export default Header