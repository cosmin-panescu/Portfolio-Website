import React from 'react'
import Frontend from './Frontend'
import OtherSkills from './OtherSkills'
import './Skills.scss'
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/variants';

const Skills = () => {
    return (
        <section className="section skills" id="skills">
            <motion.h2 
                className="section-title"
                variants={fadeIn('left')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                Skills
            </motion.h2>
            <motion.span 
                className="section-subtitle"
                variants={fadeIn('right')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                - My technical level -
            </motion.span>

            <motion.div 
                className="skills-container container grid"
                variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.4 }}
            >
                <Frontend />
                <OtherSkills />
            </motion.div>
        </section>
    )
}

export default Skills