import React from 'react'

import html from "../icons/html.svg"
import css from "../icons/css.svg"
import javascript from "../icons/JavaScript.svg"
import jQuery from "../icons/jQuery.svg"
import figma from "../icons/figma.svg"
import git from "../icons/git.svg"
import photoshop from "../icons/photoshop.svg"
import vscode from "../icons/vscode.svg"
import github from "../icons/Github-black.svg"
import reactjs from "../icons/reactjs.svg"
import nodejs from "../icons/nodejs.svg"
import php from "../icons/php.svg"
import mysql from "../icons/mysql.svg"
import springboot from "../icons/springboot.svg"
import flask from "../icons/Flask.svg"
import postgre from "../icons/PostgresSQL.svg"
import python from "../icons/python.svg"
import java from "../icons/Java.svg"
import csharp from "../icons/csharp.svg"
import illustrator from "../icons/illustrator.svg"
import intellij from "../icons/intellij.svg"
import postman from "../icons/Postman.svg"

export default function Tech({ techName }) {
    return (
        <div className='tech d-flex-r'>
            <img
                className='tech-logo'
                src={
                    techName == "HTML" ? html :
                        techName == "CSS" ? css : 
                        techName == "JavaScript" ? javascript : 
                        techName == "Figma" ? figma : 
                        techName == "Git" ? git : 
                        techName == "Photoshop" ? photoshop : 
                        techName == "VS Code" ? vscode : 
                        techName == "Github" ? github : 
                        techName == "ReactJS" ? reactjs : 
                        techName == "NodeJS" ? nodejs : 
                        techName == "PHP" ? php : 
                        techName == "MySQL" ? mysql : 
                        techName == "Spring Boot" ? springboot : 
                        techName == "Flask" ? flask : 
                        techName == "PostgreSQL" ? postgre : 
                        techName == "Python" ? python : 
                        techName == "Java" ? java : 
                        techName == "C#" ? csharp : 
                        techName == "Illustrator" ? illustrator : 
                        techName == "IntelliJ" ? intellij : 
                        techName == "Postman" ? postman : 

                        techName == "jQuery" ? jQuery : ""
                }
                alt={techName}
            />
            <p
                className='poppins-semibold color-2'
                style={{ fontSize: "0.8rem" }}
            >
                {techName}
            </p>
        </div>
    )
}
