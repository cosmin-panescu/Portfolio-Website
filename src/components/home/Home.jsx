import React from 'react'
import Social from './Social'
import Data from './Data'
import './Home.scss'
import ScrollDown from './scrollDown'

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social />

                    <div className="home-img"></div>

                    <Data />
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home