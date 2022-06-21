import React from 'react'
import "./Projects.scss"
import SectionHeader from "../SectionHeader/SectionHeader"
import { Element } from 'react-scroll'
import { projectsInfo, moreProjectsInfo } from '../../utils/allProjects'
import { useState } from 'react'

const Projects = () => {
    const [more, setMore] = useState(false);

    return (
        <Element name='portfolio'>
            <div className='projects' data-scroll-section>
                <SectionHeader title="<projects>" />
                <div className="project">
                    {/* display each project */}
                    {projectsInfo.map((project) => {
                        return (
                            <div key={project.title} className="project-item">
                                <div className="project-details">
                                    <h1>{project.title}</h1>
                                    <p>{project.description}</p>
                                    <div className="project-link">
                                        <a className='btn-dark' target="_blank" href={project.live}>Live</a>
                                        <a className='btn-dark' target="_blank" href={project.code}>Code</a>
                                    </div>
                                </div>
                                <img src={project.src} />
                            </div>
                        )
                    })}

                    {moreProjectsInfo.map((project) => {
                        return (
                            <div key={project.title} className={`${more ? 'project-item' : 'project-item more'}`}>
                                <div className="project-details">
                                    <h1>{project.title}</h1>
                                    <p>{project.description}</p>
                                    <div className="project-link">
                                        <a className='btn-dark' target="_blank" href={project.live}>Live</a>
                                        <a className='btn-dark' target="_blank" href={project.code}>Code</a>
                                    </div>
                                </div>
                                <img src={project.src} />
                            </div>
                        )
                    })}

                    {/* GitHub link for more projects */}
                    <a role="link" className="more-projects-btn btn-dark" onClick={() => setMore(!more)}>
                        {more ? "Show Less" : "Show More"}
                    </a>
                </div>
            </div>
        </Element>
    )
}

export default Projects