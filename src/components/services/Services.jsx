import React, { useState } from 'react'
import './Services.scss'

const Services = () => {
    const [toggle, setToggle] = useState(0);

    const toggleModal = (index) => {
        setToggle(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section-title">Services</h2>
            <span className="section-subtitle">- What I offer -</span>

            <div className="services-container container grid">
                <div className="services-content">
                    <div>
                        <i className="uil uil-web-grid services-icon"></i>
                        <h3 className="services-title">Social <br />Media</h3>
                    </div>

                    <span className="services-button" onClick={() => toggleModal(1)}>
                        View More
                        <i className="uil uil-arrow-right services-button-icon"></i>
                    </span>

                    <div className={toggle === 1 ? "services-modal active-modal" : "services-modal"}>
                        <div className="services-modal-content">
                            <i className="uil uil-times services-modal-close" onClick={() => toggleModal(0)}></i>
                            <h3 className="services-modal-title">Product Designer</h3>
                            <p className="services-modal-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda libero earum placeat ipsam quos totam nostrum reiciendis nesciunt quisquam nulla quibusdam ullam perspiciatis cumque animi, voluptatibus consequuntur. At numquam cumque amet aliquam dolore possimus optio molestiae ad delectus placeat ut, architecto qui mollitia libero nemo dolores accusantium reiciendis? Architecto, neque!
                            </p>

                            <ul className="services-modal-services grid">
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I develop the user interface.</p>
                                </li>
                                <li className="services-modal-service">
                                    <i className="uil uil-check-circle services-modal-icon"></i>
                                    <p className="services-modal-info">I develop the user interface.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services