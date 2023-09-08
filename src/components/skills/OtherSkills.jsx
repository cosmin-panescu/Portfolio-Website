import React, { useState } from 'react'

const Marketing = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="skills-content">
            <h3 className="skills-title">Data Science<br/>(beginner - intermediate)</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">SQL</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Excel</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Python</h3>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Microsoft Dynamics CRM</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Charisma ERP</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">CMS</h3>
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
                    <h3 className="services-modal-title">Data Science</h3>
                    <p className="services-modal-description"> I am also an enthusiast of the field of Data Science, a field in which I want to develop as much as possible in the future and where I am ready to explore, analyze and derive valuable insights from data. 
                    </p>
                    <p className="services-modal-description mb"> I have always been fascinated by the potential of technology to solve complex problems and improve the world around us. This passion has driven me to seek out new opportunities for learning and growth in the field of Data, and not only.
                    </p>

                    {/* <ul className="services-modal-services grid">
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
                    </ul> */}
                </div>
            </div>
        </div>)
}

export default Marketing