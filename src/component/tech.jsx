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
