import React, { useState } from 'react'

const Marketing = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="skills-content">
            <h3 className="skills-title">Other Technologies</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">SEO</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">C</h3>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">WordPress</h3>
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
                    <h3 className="services-modal-title">Other Technologies</h3>
                    <p className="services-modal-description">&nbsp; &nbsp; &nbsp; In addition to the main field of Web Development, which I focused on the most, I gained knowledge and skills in several technologies related to programming. I acquired these skills either through the subjects at the University, or from my own study due to a need.
                    </p>

                    <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Faster website creation using WordPress</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Solid knowledge of SEO</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Ability to create various graphic designs</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Knowledge of different programming languages from different IT fields</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}

export default Marketing