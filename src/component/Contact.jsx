import React from 'react'
import linkedin from "../icons/linkedin.svg"
import gmail from "../icons/gmail.svg"
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className='contact d-flex-r'>
            <div className="contacts-info d-flex-c">
                <h3 className='color-2 oxanium-heading'>Contact Information</h3>
                <div className="contact-row d-flex-r">
                    <div className="circle d-flex-r">
                        <img id='homeIcons' src={linkedin} alt="linkedin" />
                    </div>
                    <Link
                        to={"https://www.linkedin.com/in/ren-jastine-timajo-936b56346"}
                        className='color-2 poppins-regular'
                        target='_blank'
                        style={{ textDecoration: "none" }}
                    >
                        Ren Jastine Timajo
                    </Link>
                </div>
                <div className="contact-row d-flex-r">
                    <div className="circle d-flex-r">
                        <img id='homeIcons' src={gmail} alt="gmail" />
                    </div>
                    <Link
                        to={"https://mail.google.com/mail/u/0/#search/rnjstntmj%40gmail.com"}
                        className='color-2 poppins-regular'
                        target='_blank'
                        style={{ textDecoration: "none" }}
                    >
                        rnjstntmj@gmail.com
                    </Link>
                </div>
            </div>
            <div className="tagline d-flex-c">
                <h3 className='color-1 poppins-regular-italic'>"Let's build something together.."</h3>
            </div>
        </div>
    )
}
