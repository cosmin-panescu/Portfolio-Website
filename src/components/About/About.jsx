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
                            <p>Hello! My name is Pănescu Cosmin and I like to build things for the web. I want to start by saying that I am a self-driven and self-motivated person, because I believe that these characteristics have helped me enormously to get to the point where I am, both professionally and personally. Starting with being self-taught, I realized that this study model suits me best and helps me move forward much faster, because I can focus on exactly  what I need. Even so, I am a first-year Computer Science student at the University of Bucharest, and in the next academic year I will enroll in the specialization of Cybernetics, at the same University.
                            </p>
                            <p>The last and most important course I took was <span>"The Frontend Developer Career Path"</span>, from <a className='scrimba-btn' href="https://scrimba.com/learn/frontend" target="_blank">Scrimba &#8592;</a></p>
                            <hr style={{ width: "100%" }} />
                            <div className="skills">
                                <ul>
                                    <li><span>Programming Languages:</span></li>
                                    <li>JavaScript (ES6)</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Python (beginner)</li>
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
                                    <li>Firebase</li>
                                    <li>Figma</li>
                                    <li>Webpack</li>
                                    <li>VSC</li>
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