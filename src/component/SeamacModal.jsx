import React from 'react'
import arrow from '../icons/arrow.svg'

export default function SeamacModal() {
    return (
        <div className='seamac-content color-2 poppins-regular d-flex-c'>
            <a className='color-2 poppins-regular d-flex-r'
                href="https://seamactraining.com"
                target='_blank'
            >
                <h3>Visit Page</h3>
                <img src={arrow} alt="arrow" />
            </a>
        </div>
    )
}
