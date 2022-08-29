import React from 'react'
import Frontend from './Frontend'
import Marketing from './Marketing'
import './Skills.scss'

const Skills = () => {
    return (
        <section className="section skills" id="skills">
            <h2 className="section-title">Skills</h2>
            <span className="section-subtitle">- My technical level -</span>

            <div className="skills-container container grid">
                <Frontend />
                <Marketing />
            </div>
        </section>
    )
}

export default Skills