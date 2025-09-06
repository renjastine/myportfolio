import React from 'react'
import Header from './Header'
import Tech from './tech'


export default function AboutMe() {
    return (
        <div className='aboutme d-flex-c' id='about'>
            <Header title="About Me" tagline="This is who I am" />
            <div className="about-box d-flex-r">
                <div className="about-box-1">
                    <h3 className='oxanium-subtitle color-2'>Who I Am</h3>
                    <p className='poppins-light color-2'>I’m an aspiring full-stack developer passionate about building websites that are both functional and visually engaging. I enjoy working on both the front-end and back-end, bringing together design and code to create seamless user experiences. With skills in web design, UI/UX, and development, I aim to craft digital solutions that are clean, responsive, and meaningful. </p>

                    <div className="myinfo">
                        <div className="row d-flex-r">
                            <div className='row-info'>
                                <label className='color-2 oxanium-300'>Name</label>
                                <p className='color-1 oxanium-200'>Ren Jastine Timajo</p>
                            </div>
                            <div className='row-info'>
                                <label className='color-2 oxanium-300'>Email</label>
                                <p className='color-1 oxanium-200'>rnjstntmj@gmail.com</p>
                            </div>
                        </div>
                        <div className="row d-flex-r">
                            <div className='row-info'>
                                <label className='color-2 oxanium-300 center'>Location</label>
                                <p className='color-1 oxanium-200'>Cubao, Quezon City</p>
                            </div>
                            <div className='row-info'>
                                <label className='color-2 oxanium-300 center'>Availability</label>
                                <p className='color-1 oxanium-200'>Full-time</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-box-2">
                    <h3 className='oxanium-subtitle color-2'>My Experience</h3>
                    <div className="exp-box">
                        <div className="exp-box-wrap">
                            <h4 className='oxanium-subtitle color-2'>Frontend Developer Intern</h4>
                            <p className='color-1 oxanium-200'>SEAMAC International Institute</p>
                        </div>
                        <div className="date">
                            <p className='color-2 oxanium-200'>Feb 2025 - May 2025</p>
                        </div>

                        <p className='poppins-light color-2'>Worked on the user interface of the institute’s website, focusing on layout design, responsiveness, and user-friendly navigation to improve overall user experience.</p>

                        <p className='poppins-light color-2 tech-used'>Tech I Used: </p>

                        <div className="tech-stack d-flex-r">
                            <Tech techName={"HTML"} />
                            <Tech techName={"CSS"} />
                            <Tech techName={"JavaScript"} />
                            <Tech techName={"jQuery"} />
                            <Tech techName={"Git"} />
                            <Tech techName={"Github"} />
                            <Tech techName={"Figma"} />
                            <Tech techName={"Photoshop"} />
                            <Tech techName={"VS Code"} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
