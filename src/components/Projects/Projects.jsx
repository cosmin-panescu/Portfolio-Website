import React from 'react'
import "./Projects.scss"
import SectionHeader from "../SectionHeader/SectionHeader"
import netflixCloneImg from "../../assets/netflix-clone.png"
import modernToDoImg from "../../assets/modern-to-do.png"
import browserDashboardImg from '../../assets/browser-dashboard.png'
import meditationAppImg from "../../assets/meditation-app.png"
import cryptoTrackerImg from "../../assets/crypto-tracker.png"
import { Element } from 'react-scroll'

// prpojects info
const projectsInfo = [
    {
        src: netflixCloneImg,
        title: "Netflix Clone",
        description: "A clone of Netflix, using the API. Thus, we can display movies and series by category, including the 'Most Viewed' and 'Netflix Originals' categories. At the same time, each category is updated weekly, displaying updated content",
        live: "https://cosmin-panescu.github.io/Netflix-Clone/",
        code: "https://github.com/cosmin-panescu/Netflix-Clone"
    },
    {
        src: cryptoTrackerImg,
        title: "Crypto Tracker",
        description: 'A multi-page application that displays cryptocurrencies. The first page displays the cryptocurrencies, and the second page displays detailed information about the cryptocurrency chosen by the user. You can also search for any currency in real time.',
        live: "https://cosmin-panescu.github.io/Crypto-Tracker/",
        code: "https://github.com/cosmin-panescu/Crypto-Tracker"
    },
    {
        src: modernToDoImg,
        title: "Modern To Do",
        description: "This project includes features like normal to-do-list options, dark/light theme, optional background music, background 'rain' effect, display the current date",
        live: "https://cosmin-panescu.github.io/Modern-To-Do-List/",
        code: "https://github.com/cosmin-panescu/Modern-To-Do-List"
    },
    {
        src: browserDashboardImg,
        title: "API Browser Dashboard",
        description: "Chrome NewTab Dashboard, using HTML, CSS and JavaScript. Almost all of the JavaScript part is represented by the API (such as: random background, weather/location, search and display of cryptocurrencies)",
        live: "https://cosmin-panescu.github.io/Chrome-Dashboard/",
        code: "https://github.com/cosmin-panescu/Chrome-Dashboard"
    },
    {
        src: meditationAppImg,
        title: "Meditation App",
        description: "The application allows the selection of the desired period for meditation, as well as the two available options: the sound of the sea and the sound of rain, changing at the same time the video in the background.",
        live: "https://cosmin-panescu.github.io/Meditation-App/",
        code: "https://github.com/cosmin-panescu/Meditation-App"
    },
]

const Projects = () => {
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
                    })
                    }
                    {/* GitHub link for more projects */}
                    <a target="_blank" href="https://github.com/cosmin-panescu" className="more-projects-btn btn-dark">More Projects</a>
                </div>
            </div>
        </Element>
    )
}

export default Projects