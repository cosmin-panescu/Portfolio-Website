import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <h1 className="footer-title">Cosmin</h1>

                <ul className="footer-list">
                    <li>
                        <a href="#about" className="footer-link">About</a>
                    </li>
                    <li>
                        <a href="#services" className="footer-link">Services</a>
                    </li>
                    <li>
                        <a href="#about" className="footer-link">Resources</a>
                    </li>
                </ul>

                <div className="footer-social">
                    <a href="https://github.com/cosmin-panescu" className='footer-social-link' target="_blank">
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/cosmin-p%C4%83nescu-29430823b/" className='footer-social-link' target="_blank">
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a href="https://www.instagram.com/pane_cosmin/" className='footer-social-link' target="_blank">
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>

                <span className="footer-copy">
                    &#169; Panescu Cosmin. All rights reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer