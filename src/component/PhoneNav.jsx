import React, { useState } from 'react'
import Links from './Links'


export default function PhoneNav({ form }) {
    const [navStyle, setNavStyle] = useState({
        burger: {
            transform: "translateX(20rem)"
        },
        close: {
            transform: "translateX(0)"
        }
    })

    const { burger, close } = navStyle

    return (
        <div className='phone-nav d-flex-c'
            style={form === "burger" ? burger : close}
        >
            <Links />
        </div>
    )
}
