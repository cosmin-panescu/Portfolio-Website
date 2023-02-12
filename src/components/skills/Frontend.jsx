import React, { useState } from 'react'

const Frontend = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div className="skills-content">
            <h3 className="skills-title">Web Development</h3>

            <div className="skills-box">
                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">HTML</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">CSS</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">JavaScript</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">React</h3>
                    </div>
                </div>

                <div className="skills-group">
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">SASS</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Next.js</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Git</h3>
                    </div>
                    <div className="skills-data">
                        <i className="bx bx-badge-check"></i>
                        <h3 className="skills-name">Tailwind CSS</h3>
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
                    <h3 className="services-modal-title">Front End Developer</h3>
                    <p className="services-modal-description"> &nbsp; &nbsp; &nbsp; &nbsp; I've always been someone who has both a creative and a logical side. When I discovered front-end development in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. <br /> &nbsp; &nbsp; &nbsp; Although I can't call myself a web designer, I like to let my creative side come out, often creating designs for my personal projects. So, I have a lot of knowledge and a certain brilliance when it comes to front-end development. As a bonus, these aspects allows me to make sure no detail is lost in translation.
                    </p>

                    <ul className="services-modal-services grid">
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Responsive Development/Layouts</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Well Structured Code</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">Reusable Components</p>
                        </li>
                        <li className="services-modal-service">
                            <i className="uil uil-check-circle services-modal-icon"></i>
                            <p className="services-modal-info">User friendly code</p>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Frontend