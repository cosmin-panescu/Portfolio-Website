import React from 'react'
import "./Projects.scss"
import SectionHeader from "../SectionHeader/SectionHeader"
import netflixCloneImg from "../../assets/netflix-clone.png"
import modernToDoImg from "../../assets/modern-to-do.png"
import browserDashboardImg from '../../assets/browser-dashboard.png'
import meditationAppImg from "../../assets/meditation-app.png"
import { Element } from 'react-scroll'

const projectsInfo = [
    {
        src: netflixCloneImg,
        title: "Netflix Clone",
        description: "A clone of Netflix, using the API. Thus, we can display movies and series by category, including the 'Most Viewed' and 'Netflix Originals' categories. At the same time, each category is updated weekly, displaying updated content",
        live: "https://1panescu.github.io/Netflix-React-Clone/",
        code: "https://github.com/1panescu/Netflix-React-Clone"
    },
    {
        src: modernToDoImg,
        title: "Modern To Do",
        description: "This project includes features like normal to-do-list options, dark/light theme, optional background music, background 'rain' effect, display the current date",
        live: "https://1panescu.github.io/To-Do-List/",
        code: "https://github.com/1panescu/To-Do-List"
    },
    {
        src: browserDashboardImg,
        title: "API Browser Dashboard",
        description: "Chrome NewTab Dashboard, using HTML, CSS and JavaScript. Almost all of the JavaScript part is represented by the API (such as: random background, weather/location, search and display of cryptocurrencies)",
        live: "https://1panescu.github.io/Chrome-Dashboard-Tab/",
        code: "https://github.com/1panescu/Chrome-Dashboard-Tab"
    },
    {
        src: meditationAppImg,
        title: "Meditation App",
        description: "The application allows the selection of the desired period for meditation, as well as the two available options: the sound of the sea and the sound of rain, changing at the same time the video in the background.",
        live: "https://1panescu.github.io/Meditation-App/",
        code: "https://github.com/1panescu/Meditation-App"
    },
]

const Projects = () => {
    return (
        <Element name='portfolio'>
            <div className='projects' data-scroll-section>
                <SectionHeader title="<portfolio>" />
                <div className="project">
                    {
                        projectsInfo.map((project) => {
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
                        })
                    }
                    <a target="_blank" href="https://github.com/1panescu" className="more-projects-btn btn-dark">More Projects</a>
                </div>
            </div>
        </Element>
    )
}

export default Projects