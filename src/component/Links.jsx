import { HashLink } from 'react-router-hash-link'
import React from 'react'

export default function Links() {
    return (
        <ul className='n-ul d-flex-r'>
            <li className='poppins-light color-2'>
                <HashLink smooth
                    className='color-2'
                    to="#home"
                    style={{
                        textDecoration: "none",
                    }}
                >
                    Home
                </HashLink>
            </li>
            <li className='poppins-light color-2'>
                <HashLink smooth
                    className='color-2'
                    to="#about"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    About
                </HashLink>
            </li>
            <li className='poppins-light color-2'>
                <HashLink smooth
                    className='color-2'
                    to="#skills"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    Skills
                </HashLink>
            </li>
            <li className='poppins-light color-2'>
                <HashLink smooth
                    className='color-2'
                    to="#project"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    Projects
                </HashLink>
            </li>
            <li className='poppins-light color-2'>
                <HashLink smooth
                    className='color-2'
                    to="#contact"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    Contact
                </HashLink>
            </li>
        </ul>
    )
}
