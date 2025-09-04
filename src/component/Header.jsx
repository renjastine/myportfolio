import React from 'react'

export default function Header({ title, tagline }) {
    return (
        <header className='d-flex-c'>
            <h1 className='oxanium-heading color-2'>{title}</h1>
            <h4 className='poppins-regular-italic color-1'>"{tagline}"</h4>
        </header>
    )
}
