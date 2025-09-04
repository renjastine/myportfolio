import { Link } from 'react-router-dom';
import React from 'react'

import github from "../icons/github.svg"
import linkedin from "../icons/linkedin.svg"
import gmail from "../icons/gmail.svg"
import phone from "../icons/phone.svg"


export default function Home() {
    return (
        <div className='home'>
            <div className="home-box-1 d-flex-c">
                <p className='color-2 oxanium-300'>I'm Ren Jastine Timajo, an aspiring</p>
                <h1 className='color-2 oxanium-heading'>Full-Stack Developer</h1>
                <p className='color-2 oxanium-300'>I build responsive and user-friendly websites that bring ideas to life from front-end to back-end.</p>

                <div className="home-contacts d-flex-r">
                    <Link
                        to="https://github.com/renjastine"
                        className="circle d-flex-r"
                        target='_blank'
                    >
                        <img id='homeIcons' src={github} alt="github" />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/in/ren-jastine-timajo-936b56346"
                        className="circle d-flex-r"
                        target='_blank'
                    >
                        <img id='homeIcons' src={linkedin} alt="linkedin" />
                    </Link>
                    <Link
                        to="https://mail.google.com/mail/u/0/#search/rnjstntmj%40gmail.com"
                        className="circle d-flex-r"
                        target='_blank'
                    >
                        <img id='homeIcons' src={gmail} alt="gmail" />
                    </Link>
                    <div className="circle d-flex-r phone">
                        <img id='homeIcons' src={phone} alt="phone" />
                    </div>
                </div>

                <div className="buttons">
                    <div className="row d-flex-r color-2 oxanium-300">View my projects</div>
                    <div className="row d-flex-r color-2 oxanium-300">Downlaod Resume</div>
                </div>
            </div>
        </div>
    )
}
