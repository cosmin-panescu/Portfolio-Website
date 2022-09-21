import React, { useEffect } from 'react'
import './About.scss'
import CV from '../../assets/CV.pdf'
import AboutImg from '../../assets/about-image.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500
        })
    }, []);

    return (
        <section className="about section" id='about'>
            <h2 data-aos="fade-up" className="section-title">About Me</h2>
            <span data-aos="fade-up" className="section-subtitle">- My introduction -</span>

            <div data-aos="fade-up" className="about-container container grid">
                <img src={AboutImg} alt="my profile image" className="about-img" />

                <div className="about-data">
                    <p className="about-description">
                        &nbsp; &nbsp; &nbsp;  Hey! My name is <span>Pănescu Cosmin</span> and I like to build things for the web. To be more explicit, I like <span>Web Development</span> and everything related to Marketing, especially <span>Digital Marketing</span>. On the web development side, I focused mainly on <span>Front End</span> because I like to be creative, and when it comes to digital marketing, I focused mostly on <span>management</span> and <span>SEO</span>. So, I don't just develop websites for you, I also bring them to the <span>top of searches</span>.
                        <br />
                        <br />
                        &nbsp; &nbsp; &nbsp;   I combined these two digital passions of mine, building
                        a <span>business</span> and opening my own <span>online agency</span>. If you are curious, you can visit the <a href='https://amaisse.com/' target='_blank' className='agency-link'>Amaisse Agency website</a> right now.
                    </p>
                    <p className="about-description">

                    </p>
                    <a download="Panescu Vasile Cosmin's Resume" href={CV} className="button button-flex">
                        Download CV
                        <svg
                            className="button-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
                                fill="var(--container-color)"
                            ></path>
                            <path
                                d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
                                fill="var(--container-color)"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About