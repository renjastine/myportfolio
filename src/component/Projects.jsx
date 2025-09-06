import React from 'react'
import Header from './Header'
import seamac from '../images/seamac.jpg'
import capstone from '../images/capstone.jpg'
import ticketing from '../images/ticketing_system.jpg'
import Tech from './tech'

export default function Projects() {
    return (
        <div className='projects d-flex-c' id='project'>
            <Header title={"My Projects"} tagline={"Turning ideas into reality"} />
            <div className="project-box d-flex-r">
                <div className="project-row d-flex-c">
                    <div className="project-image d-flex-r">
                        <img src={seamac} alt="seamac" />
                    </div>
                    <div className="project-info d-flex-r">
                        <div className="exp-box-wrap">
                            <h4 className='oxanium-subtitle color-2'>SEAMAC Website</h4>
                        </div>
                        <div className="date">
                            <p className='color-2 oxanium-200'>Feb 2025 - May 2025</p>
                        </div>
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
                            <Tech techName={"PHP"} />
                            <Tech techName={"MySQL"} />
                        </div>
                        <div className="project-button d-flex-r">
                            <a className="button color-2 oxanium-200 d-flex-r"
                                href='https://seamactraining.com'
                                style={{
                                    textDecoration: "none"
                                }}
                            >
                                View
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-row d-flex-c">
                    <div className="project-image d-flex-r">
                        <img src={capstone} alt="seamac" />
                    </div>
                    <div className="project-info d-flex-r">
                        <div className="exp-box-wrap">
                            <h4 className='oxanium-subtitle color-2'>Capstone Project</h4>
                        </div>
                        <div className="date">
                            <p className='color-2 oxanium-200'>July 2024 - Dec 2024</p>
                        </div>
                        <div className="tech-stack d-flex-r">
                            <Tech techName={"HTML"} />
                            <Tech techName={"CSS"} />
                            <Tech techName={"JavaScript"} />
                            <Tech techName={"jQuery"} />
                            <Tech techName={"VS Code"} />
                            <Tech techName={"Python"} />
                            <Tech techName={"Flask"} />
                            <Tech techName={"MySQL"} />
                            <Tech techName={"PHP"} />
                        </div>
                        <div className="project-button d-flex-r">
                            <div className="button color-2 oxanium-200 d-flex-r">View</div>
                        </div>
                    </div>
                </div>
                <div className="project-row d-flex-c">
                    <div className="project-image d-flex-r">
                        <img src={ticketing} alt="seamac" />
                    </div>
                    <div className="project-info d-flex-r">
                        <div className="exp-box-wrap">
                            <h4 className='oxanium-subtitle color-2'>Ticketing System</h4>
                        </div>
                        <div className="date">
                            <p className='color-2 oxanium-200'>Oct 2024 - Dec 2024</p>
                        </div>
                        <div className="tech-stack d-flex-r">
                            <Tech techName={"ReactJS"} />
                            <Tech techName={"NodeJS"} />
                            <Tech techName={"HTML"} />
                            <Tech techName={"CSS"} />
                            <Tech techName={"JavaScript"} />
                            <Tech techName={"Figma"} />
                            <Tech techName={"VS Code"} />
                            <Tech techName={"MySQL"} />
                        </div>
                        <div className="project-button d-flex-r">
                            <div className="button color-2 oxanium-200 d-flex-r">View</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
