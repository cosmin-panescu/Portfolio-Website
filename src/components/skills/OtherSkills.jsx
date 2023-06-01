import React, { useState } from 'react'

const Marketing = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="skills-content">
            <h3 className="skills-title">Digital Marketing<br/></h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">SEO</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">SMM</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Figma</h3>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Google Analytics</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Microsoft Office</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">WordPress</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Canva</h3>
                    </div>
                </div>
            </div>

            <span className="services-button" onClick={() => setToggle(true)}>
                View More
                <i className="uil uil-arrow-right services-button-icon"></i>
            </span>

            <div className={toggle ? "services-modal active-modal" : "services-modal"}>
                <div className="services-modal-content">
                    <i className="uil uil-times services-modal-close" onClick={() => setToggle(false)}></i>
                    <h3 className="services-modal-title">Back-End</h3>
                    <p className="services-modal-description mb">I obtained knowledge in the field of marketing either through the faculty or through individual study, where I focused on digital marketing. When it comes to learning on my own, Udemy, Frontend Masters and Google Digital Garage helped me the most with the premium courses I took individually.
                    </p>

                    <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">SEO optimization to increase visibility and relevance</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Ability to create various graphic designs</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Collaboration and teamwork</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Innovative and creative thinking</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}

export default Marketing