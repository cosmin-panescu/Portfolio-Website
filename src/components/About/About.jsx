import React from 'react'
import "./About.scss"
import SectionHeader from "../SectionHeader/SectionHeader"
import aboutPhoto from "../../assets/about-photo.jpg"
import resume from "../../assets/Panescu Vasile Cosmin's Resume.pdf"
import { Element } from 'react-scroll'

const About = () => {
    return (
        <Element name='about'>
            <div className='about' data-scroll-section>
                <hr />
                <SectionHeader title="<about>" />
                <div className="window-about">
                    <div className="dots-wrapper"> {/* Browser window effect */}
                        <div className="dots">
                            <div className="browser-dot" id="dot-1"></div>
                            <div className="browser-dot" id="dot-2"></div>
                            <div className="browser-dot" id="dot-3"></div>
                        </div>
                    </div>
                    <div className="about-details">
                        <div className="about-info">
                            <p>Hello! My name is Pănescu Cosmin and I like to build things for the web and lately I've been learning about Web3 (blockchain, smart-contracts, DeFi, dApp), because it represents the next generation of the internet. I want to start by saying that I am a self-driven and self-motivated person, because I believe that these characteristics have helped me enormously to get to the point where I am, both professionally and personally. Starting with being self-taught, I realized that this study model suits me best and helps me move forward much faster, because I can focus on exactly what I need. Even so, I studied Computer Science for a year at the University of Bucharest, and now I transferred to the specialization of Cybernetics, from the Faculty of Administration and Business, at the same University.</p>
                            <hr style={{ width: "100%" }} />
                            <h4>Main skills:</h4>
                            <div className="skills">
                                <ul>
                                    <li><span>Programming Languages:</span></li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>JavaScript</li>
                                </ul>
                                <ul>
                                    <li><span>Libraries & Frameworks:</span></li>
                                    <li>React</li>
                                    <li>Next.js</li>
                                    <li>SASS</li>
                                    <li>Bootstrap</li>
                                </ul>
                                <ul>
                                    <li><span>Tools & Platforms:</span></li>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>Figma</li>
                                    <li>Axios</li>
                                    <li>Webpack</li>
                                </ul>
                            </div>
                            <hr style={{ width: "100%", opacity: "0.35" }} />
                            <h4>Knowledge about:</h4>
                            <div className="skills">
                                <ul>
                                    <li><span>Programming Languages:</span></li>
                                    <li>SQL</li>
                                    <li>Python</li>
                                    <li>Solidity</li>
                                </ul>
                                <ul>
                                    <li><span>Libraries & Frameworks:</span></li>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>MongoDB</li>
                                </ul>
                                <ul>
                                    <li><span>Tools & Platforms:</span></li>
                                    <li>Postman</li>
                                    <li>Photoshop</li>
                                </ul>
                            </div>
                            <hr style={{ width: "100%" }} />
                            {/* CV download */}
                            <a href={resume} target="_blank" className='cv-btn btn'>Download CV</a>
                        </div>
                        <img className="about-photo" src={aboutPhoto} />
                    </div>
                </div>
            </div >
        </Element>
    )
}

export default About