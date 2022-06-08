import React, { useEffect, useRef, useState } from 'react'
import "./Contact.scss"
import SectionHeader from '../SectionHeader/SectionHeader'
import people1Img from "../../assets/people1.png"
import people2Img from "../../assets/people2.png"
import emailjs from "@emailjs/browser"
import swal from 'sweetalert';
import { Element } from 'react-scroll'

const Contact = () => {
    // Sending Emails with EmailJs
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b7kkv0n', 'template_0qvgr4i', form.current, '-9wYTINsAMAraDv4O')
            .then(() => {
                swal({
                    text: 'Message successfully sent!',
                    icon: "success",
                    button: "Cool"
                })
                document.querySelector("input[name='name']").value = '';
                document.querySelector("input[name='email']").value = '';
                document.querySelector("input[name='subject']").value = '';
                document.querySelector("textarea[name='message']").value = '';
            },
                () => {
                    swal({
                        text: 'Failed to send the message, please try again!',
                        icon: "error",
                        button: "Oh.."
                    })
                },
            )
    }

    return (
        <Element name='contact'>
            <div className='contact' data-scroll-section>
                <SectionHeader title="<contact>" />
                <div className="container-form">
                    <h1>Contact Me</h1>
                    <p>I am interested in freelance and jobs opportunities - especially interesting projects, where I can learn new things and where I can develop my skills. However, if you have other requests or questions, don't hesitate to contact me, using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <div className="name-email">
                                    <li>
                                        <input
                                            className='name'
                                            type="text"
                                            name='name'
                                            placeholder='Name'
                                            required
                                        />
                                    </li>
                                    <li>
                                        <input
                                            type="email"
                                            className='email'
                                            name='email'
                                            placeholder='Email'
                                            required
                                        />
                                    </li>
                                </div>
                                <li>
                                    <input className='subject input' placeholder="Subject" type="text" name="subject" />
                                </li>
                                <li>
                                    <textarea
                                        className='input'
                                        name="message"
                                        placeholder='Message'
                                        required>
                                    </textarea>
                                </li>
                                <li className='btn-email'>
                                    <button type='submit' className='btn form-btn'>SEND</button>
                                    <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">1panescu.cosmin@gmail.com</a>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                {/* Images for large screens */}
                <img src={people1Img} className="img img1" />
                <img src={people2Img} className="img img2" />
            </div >
        </Element>
    )
}

export default Contact