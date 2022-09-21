import React, { useEffect } from 'react'
import Frontend from './Frontend'
import Marketing from './Marketing'
import './Skills.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, []);

    return (
        <section className="section skills" id="skills">
            <h2 data-aos="fade-up" className="section-title">Skills</h2>
            <span data-aos="fade-up" className="section-subtitle">- My technical level -</span>

            <div data-aos="fade-up" className="skills-container container grid">
                <Frontend />
                <Marketing />
            </div>
        </section>
    )
}

export default Skills