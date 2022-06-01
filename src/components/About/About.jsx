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
                            <p>Hello! My name is Pănescu Cosmin and I like to build things for the web. The first contact with programming took place in 2019, when I learned the basics of programming, but my interest in web development started back in 2020, during the quarantine. Since then, I have been learning the basics of web programming on my own, buying and following, then, advanced courses to improve my web development skills. Starting with being self-taught, I realized that this study model suits me best and helps me move forward much faster, because I can focus on exactly  what I need. Even so, I am a first-year computer science student at the University of Bucharest, and in the next academic year I will enroll in the specialization of Cybernetics at the University of Bucharest.
                            </p>
                            <p>The last and most important course I took was <span>"The Frontend Developer Career Path"</span>, from <a className='scrimba-btn' href="https://scrimba.com/learn/frontend" target="_blank">Scrimba &#8592;</a></p>
                            <hr style={{ width: "100%" }} />
                            <div className="skills">
                                <ul>
                                    <li><span>Programming Languages:</span></li>
                                    <li>JavaScript (ES6)</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                                <ul>
                                    <li><span>Libraries & Frameworks:</span></li>
                                    <li>React</li>
                                    <li>Bootstrap</li>
                                    <li>Sass</li>
                                </ul>
                                <ul>
                                    <li><span>Tools and Platforms:</span></li>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                    <li>VSC</li>
                                    <li>Webpack</li>
                                    <li>NPM</li>
                                    <li>Figma</li>
                                    <li>Canva</li>
                                </ul>
                            </div>
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