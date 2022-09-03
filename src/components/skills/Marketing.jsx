import React, { useState } from 'react'

const Marketing = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="skills-content">
            <h3 className="skills-title">Digital Marketing</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">SEO</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Graphic Design</h3>
                    </div>

                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Branding</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Management</h3>
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
                    <h3 className="services-modal-title">Digital Marketing</h3>
                    <p className="services-modal-description"> &nbsp; &nbsp; &nbsp; My inclination towards marketing comes from my two great passions: the digital environment and entrepreneurship. My creative side helps me to create and bring value, building the "visual" of my projects and works. However, my logical part takes care of the "back-end", such as research, analysis, strategies, data, thus allowing me to scale and develop the functional and logical part of my projects and work. <br /> &nbsp; &nbsp; &nbsp; &nbsp; As much as a creative mind is valuable, I believe in leveraging the power of data-driven insights and analytics to determine strategies that help growth and development. <br /> &nbsp; &nbsp; &nbsp; &nbsp;
                        For more details about marketing, visit the website of my agency, <a href="https://amaisse.com/" target="_blank" className="agency-link">Amaisse Agency</a>.
                    </p>

                    <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Increase visibility and organic traffic</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Digital business optimization</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Online presence rebranding</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Design and provide a unique brand experience</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Management strategies to increase online presence</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>)
}

export default Marketing