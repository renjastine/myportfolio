import React, { useEffect, useState } from 'react'
import close from '../icons/close.svg'
import SeamacModal from '../component/SeamacModal'
import CapstoneModal from '../component/CapstoneModal'
import TicketingModal from '../component/TicketingModal'
import Loading from '../component/Loading'



export default function ViewModal({ modal, setModal, button }) {
    const [modalStyle, setModalStyle] = useState({
        transform: "translateY(5rem)",
        opacity: "30%"
    })
    const [startLoading, setStartLoading] = useState(false)

    const loading = () => {
        setStartLoading(true)

        setTimeout(() => {
            setStartLoading(false)
        }, 1500)
    }

    useEffect(() => {
        if (modal === "flex") {
            setTimeout(() => {
                setModalStyle({
                    transform: "translateY(0)",
                    opacity: "1"
                })

                loading()
            }, 50)
        }
        else {
            setModalStyle({
                transform: "translateY(5rem)",
                opacity: "30%"
            })
        }
    }, [modal])

    return (
        <div className='view-modal d-flex-c'
            style={{
                display: modal,
            }}
        >
            <div className="modal-box d-flex-c"
                style={modalStyle}
            >
                <div className="close d-flex-c"
                    onClick={() => setModal("none")}
                >
                    <img src={close} alt="line" />
                </div>

                <h2 className='color-2 oxanium-heading'>
                    {
                        button === "seamac" ? "SEAMAC Website" :
                            button === "capstone" ? "Capstone Project" :
                                button === "ticketing" ? "Ticketing System" : "Title"
                    }
                </h2>

                <div className="modal-content d-flex-c">
                    {
                        startLoading ? <Loading modal={modal} /> :
                            (
                                button === "seamac" ? <SeamacModal /> :
                                    button === "capstone" ? <CapstoneModal /> :
                                        button === "ticketing" ? <TicketingModal /> : "Title"
                            )
                    }
                </div>
            </div>
        </div>
    )
}
