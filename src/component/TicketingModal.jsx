import React from 'react'
import crud from '../videos/CRUD.mp4'
import chatbot from '../videos/Chatbot.mp4'

export default function TicketingModal() {
    return (
        <div className='ticketing-content color-2 poppins-regular d-flex-c'>
            <div className='facial d-flex-c'>
                <h2>Full CRUD Functionality</h2>
                <video controls muted src={crud} />
            </div>
            <div className='facial d-flex-c'>
                <h2>Chatbot</h2>
                <video controls muted src={chatbot} />
            </div>
        </div>
    )
}
