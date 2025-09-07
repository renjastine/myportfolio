import React from 'react'
import attendance from '../videos/Attendance Facial Recognition.mp4'
import forecasting from '../videos/Forecasting Computer Status.mp4'

export default function CapstoneModal() {
    return (
        <div className='capstone-content color-2 poppins-regular d-flex-c'>
            <div className='facial d-flex-c'>
                <h2>Predictive Analytics</h2>
                <video controls muted src={forecasting} />
            </div>
            <div className='facial d-flex-c'>
                <h2>Facial Recognition</h2>
                <video controls muted src={attendance} />
            </div>
        </div>
    )
}
