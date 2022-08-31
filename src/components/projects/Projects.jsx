import React from 'react';
import './Projects.scss';
import img from '../../assets/about-image.jpg';
import { projectsInfo } from './projectsInfo';

const Projects = () => {
    return (
        <section className="projects section" id='projects'>
            <h2 className="section-title">Portfolio</h2>
            <span className="section-subtitle">- Most recent work -</span>

            <div className="projects-container container grid">
                <div className="project-content">
                    {/* display each project */}
                    {projectsInfo.map((project, index) => {
                        return (
                            <div className="project-box" key={index}>
                                <div className="project-image">
                                    <img src={project.src} alt={project.alt} />
                                </div>
                                <h3>{project.title}</h3>
                                <div className="project-buttons">
                                    <a href={project.live} target="_blank" className="project-button">
                                        Live
                                        <i className="uil uil-arrow-right project-button-icon"></i>
                                    </a>
                                    {
                                        project.codeLink &&
                                        <a href={project.code} target="_blank" className="project-button">
                                            Code
                                            <i className="uil uil-arrow-right project-button-icon"></i>
                                        </a>
                                    }
                                </div>
                            </div>
                        )
                    })}
                </div>

                <h3 className='projects-more'>More projects on <a href="https://github.com/cosmin-panescu?tab=repositories" target="_blank">GitHub</a></h3>
            </div>
        </section>
    )
}

export default Projects