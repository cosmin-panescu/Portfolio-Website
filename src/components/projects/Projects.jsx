import React, { useEffect, useState } from 'react';
import './Projects.scss';
import { moreProjectsInfo, projectsInfo } from './projectsInfo';
import AOS from 'aos';
import 'aos/dist/aos.css';
// framer motion
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/variants';

const Projects = () => {
    // load more projects state
    const [more, setMore] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 2250
        })
    }, []);

    return (
        <section className="projects section" id='projects'>
            <motion.h2 
                className="section-title"
                variants={fadeIn('right')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                Portfolio
            </motion.h2>
            <motion.span 
                className="section-subtitle"
                variants={fadeIn('left')}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.5 }}
            >
                - Most recent work -
            </motion.span>

            <div className="projects-container container grid">
                <div className="project-content">
                    {/* display each project */}
                    {projectsInfo.map((project, index) => {
                        return (
                            <div data-aos="fade-up" className="project-box" key={index}>
                                <div className="project-image">
                                    <img src={project.src} alt={project.alt} loading="lazy" />
                                </div>
                                <h3>{project.title}</h3>
                                <div className="project-buttons">
                                    <a href={project.live} target="_blank" rel="noreferrer" className="project-button">
                                        Live
                                        <i className="uil uil-arrow-right project-button-icon"></i>
                                    </a>
                                    {
                                        project.codeLink &&
                                        <a href={project.code} target="_blank" rel="noreferrer" className="project-button">
                                            Code
                                            <i className="uil uil-arrow-right project-button-icon"></i>
                                        </a>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Load more projects */}
                {more && (
                    <div className="project-content">
                        {/* display each project */}
                        {moreProjectsInfo.map((project, index) => {
                            return (
                                <div data-aos="fade-up" className="project-box" key={index}>
                                    <div className="project-image">
                                        <img src={project.src} alt={project.alt} loading="lazy" />
                                    </div>
                                    <h3>{project.title}</h3>
                                    <div className="project-buttons">
                                        <a href={project.live} target="_blank" rel="noreferrer" className="project-button">
                                            Live
                                            <i className="uil uil-arrow-right project-button-icon"></i>
                                        </a>
                                        {
                                            project.codeLink &&
                                            <a href={project.code} target="_blank" rel="noreferrer" className="project-button">
                                                Code
                                                <i className="uil uil-arrow-right project-button-icon"></i>
                                            </a>
                                        }
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}

                <button
                    onClick={() => setMore(!more)}
                    className="button button-more"
                >
                    {more ? "See Less" : "Load More"}
                    <i className={`uil uil-arrow-right project-button-icon ${more && "up"}`}></i>
                </button>

                <h3 className='projects-more'>More projects on <a href="https://github.com/cosmin-panescu?tab=repositories" target="_blank" rel="noreferrer">GitHub</a></h3>
            </div>
        </section>
    )
}

export default Projects