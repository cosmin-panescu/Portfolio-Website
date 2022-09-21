import React, { useEffect, useState } from 'react'
import './Resources.scss'
import eBook from '../../assets/ebook1.png'
import eBookPDF from '../../assets/Web-Development-eBook.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Resources = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
        })
    }, []);

    return (
        <section className="resources section" id="resources">
            <h2 data-aos="fade-up" className="section-title">Resources</h2>
            <span data-aos="fade-up" className="section-subtitle">- Learn with me -</span>

            <div className="resources-container grid">
                <div data-aos="fade-up" className="resources-card">
                    <div className="resources-card-image">
                        <img src={eBook} alt="Web Dev eBook" />
                    </div>

                    <div className="resources-card-details">
                        <div className="resources-card-details-content">
                            <h3>Ghid pentru a începe în Web Development</h3>
                            <p> &nbsp; &nbsp; &nbsp; &nbsp; Acest eBook îți oferă atât drumul exact pe care trebuie să îl urmezi pentru a deveni un Web Developer, cât și cele mai bune recomandări de resurse gratuite, de unde poți învăța absolut tot. </p>
                            <a href={eBookPDF} download="Web Development eBook" className="card-download" target="_blank">Download</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resources