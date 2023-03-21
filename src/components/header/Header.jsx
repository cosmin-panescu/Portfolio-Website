import React, { useEffect, useState } from 'react';
import "./Header.scss";

const Header = () => {
    const [toggle, setToggle] = useState(false); // toggle menu
    const [show, setShow] = useState(false); // show the navbar after 100px
    const [pageLoad, setPageLoad] = useState(false); // track page load

    // page load transition
    useEffect(() => {
        setTimeout(() => {
            setPageLoad(true);
        }, 750)
    }, []);

    // close mobile-menu after clicking a link
    const closeMenu = () => {
        setToggle(false);
    }

    // show the navbar after 100px
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
        <header className={`header ${show && "header-show"} ${pageLoad && "transition"}`}  >
            <nav className="nav container">
                <a href="#home" className="nav-logo">Cosmin</a>

                <div className={toggle ? "nav-menu show-menu" : "nav-menu "}>
                    <ul className="nav-list grid">
                        <li className="nav-item">
                            <a href="#home" className="nav-link" onClick={closeMenu}>
                                <i className="uil uil-home nav-icon"></i> Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link" onClick={closeMenu}>
                                <i className="uil uil-user nav-icon"></i> About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link" onClick={closeMenu}>
                                <i className="uil uil-file-alt nav-icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" onClick={closeMenu}>
                                <i className="uil uil-scenery nav-icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#resources" className="nav-link" onClick={closeMenu}>
                                <i className="uil uil-briefcase-alt nav-icon"></i> Resources
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link" onClick={closeMenu}>
                                <i className="uil uil-message nav-icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav-close" onClick={() => setToggle(!toggle)}></i>
                </div>

                <div className="nav-toggle" onClick={() => setToggle(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header