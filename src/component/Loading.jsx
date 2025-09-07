import React, { useEffect, useState } from 'react'

export default function Loading({ modal }) {
    const [loading, setLoading] = useState({
        width: "0%"
    })

    useEffect(() => {
        if(modal === "flex"){
            setTimeout(() => {
                setLoading({ width: "100%" })
            }, 100)
        } else {
                setLoading({ width: "0%" })
        }

    }, [modal])

    return (
        <div className='loading d-flex-c'>
            <h2 className='color-1 oxanium-heading'>Loading...</h2>
            <div className="loading-box">
                <div className="loading-bar"
                    style={loading}
                ></div>
            </div>
        </div>
    )
}
