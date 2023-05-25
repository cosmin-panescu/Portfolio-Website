import React from 'react'
import './Resources.scss'
import eBook from '../../assets/ebook1.webp'
import eBookPDF from '../../assets/Web-Development-eBook.pdf'
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/variants';

const Resources = () => {
    return (
        <section className="resources section" id="resources">
            <motion.h2 
                className="section-title"
                variants={fadeIn('left')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                Resources
            </motion.h2>
            <motion.span 
                className="section-subtitle"
                variants={fadeIn('right')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                - Learn with me -
            </motion.span>

            <motion.div 
                className="resources-container grid"
                variants={fadeIn('up')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                <div className="resources-card">
                    <div className="resources-card-image">
                        <img src={eBook} alt="Web Dev eBook" loading="lazy" />
                    </div>

                    <div className="resources-card-details">
                        <div className="resources-card-details-content">
                            <h3>Ghid pentru a începe în Web Development</h3>
                            <p>Acest eBook îți oferă atât drumul exact pe care trebuie să îl urmezi pentru a deveni un Web Developer, cât și cele mai bune recomandări de resurse gratuite, de unde poți învăța absolut tot. </p>
                            <a href={eBookPDF} download="Web Development eBook" className="card-download" target="_blank" rel="noreferrer">Download</a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Resources