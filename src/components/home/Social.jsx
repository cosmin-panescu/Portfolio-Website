import React from 'react'

const Social = () => {
    return (
        <div className="home-social">
            <a href="https://github.com/cosmin-panescu" className='home-social-icon' target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/cosmin-panescu/" className='home-social-icon' target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            {/* <a href="https://www.youtube.com/@webcosmin" className='home-social-icon' target="_blank">
                <i className="uil uil-youtube"></i>
            </a> */}
            <a href="https://www.instagram.com/cosmin.panescu/" className='home-social-icon' target="_blank">
                <i className="uil uil-instagram"></i>
            </a>
            <a href="https://www.facebook.com/cosminpane/" className='home-social-icon' target="_blank">
                <i className="uil uil-facebook-f"></i>
            </a>
        </div>
    )
}

export default Social