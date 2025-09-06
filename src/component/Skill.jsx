import React from 'react'
import Header from './Header'
import Tech from './tech'


export default function Skill() {
    return (
        <div className='skills d-flex-c' id='skills'>
            <Header title={"My Skills"} tagline={"How I bring ideas to life"} />
            <div className="skills-box d-flex-r">
                <div className="row">
                    <h4 className='color-2 oxanium-300'>Frontend</h4>
                    <div className='tech-stack d-flex-r'>
                        <Tech techName={"HTML"} />
                        <Tech techName={"CSS"} />
                        <Tech techName={"ReactJS"} />
                        <Tech techName={"jQuery"} />
                    </div>
                </div>
                <div className="row">
                    <h4 className='color-2 oxanium-300'>Backend</h4>
                    <div className='tech-stack d-flex-r'>
                        <Tech techName={"NodeJS"} />
                        <Tech techName={"PHP"} />
                        <Tech techName={"MySQL"} />
                        <Tech techName={"Spring Boot"} />
                        <Tech techName={"Flask"} />
                        <Tech techName={"PostgreSQL"} />
                    </div>
                </div>
                <div className="row">
                    <h4 className='color-2 oxanium-300'>Languages</h4>
                    <div className='tech-stack d-flex-r'>
                        <Tech techName={"PHP"} />
                        <Tech techName={"JavaScript"} />
                        <Tech techName={"Python"} />
                        <Tech techName={"Java"} />
                        <Tech techName={"C#"} />
                    </div>
                </div>
                <div className="row">
                    <h4 className='color-2 oxanium-300'>Tools</h4>
                    <div className='tech-stack d-flex-r'>
                        <Tech techName={"Figma"} />
                        <Tech techName={"Git"} />
                        <Tech techName={"Github"} />
                        <Tech techName={"Photoshop"} />
                        <Tech techName={"Illustrator"} />
                        <Tech techName={"VS Code"} />
                        <Tech techName={"IntelliJ"} />
                        <Tech techName={"Postman"} />
                    </div>
                </div>
            </div>
        </div>
    )
}
