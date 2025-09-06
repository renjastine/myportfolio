import React, { useState } from 'react'
import line from '../icons/single_line.svg'

export default function Burger() {

    const [form, setForm] = useState("burger")
    const [style, setStyle] = useState({
        burger: {
            upperLine: {
                transform: "translateY(0%) rotate(0deg)",
            },
            bottomLine: {
                transform: "translateY(-0%) rotate(-0deg)"
            },
        },
        close: {
            upperLine: {
                transform: "translateY(150%) rotate(45deg)",
            },
            bottomLine: {
                transform: "translateY(-150%) rotate(-45deg)"
            },
        }
    })

    const changeForm = (e) => {
        let form = e.target.id

        if (form === "burger") {
            setForm("close")
        } else {
            setForm("burger")
        }
    }

    const handleEvent = (e) => {
        if(e.target.id !== "close" && form === "close"){
            setForm('burger')
        }
    }

    document.addEventListener("click", (e) => handleEvent(e))
    document.addEventListener("scroll", (e) => handleEvent(e))

    

    const { burger, close } = style

    return (
        <div className='burger d-flex-c'
            id={form}
            onClick={e => changeForm(e)}
        >
            <img src={line}
                style={form==="burger"?burger:close.upperLine}
                alt="line"
            />
            <img src={line}
                style={form==="burger"?burger:close.bottomLine}
                alt="line"
            />
        </div>
    )
}
