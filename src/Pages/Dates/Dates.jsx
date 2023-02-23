import React, { useState } from 'react'
import ListDates from '../../Components/Dates/ListDates'
import useUser from '../../Hooks/useUser'
import Modal from '../../Components/modal/modal'

import './style.css'

function Dates() {
    const { user, isLogged } = useUser()
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className="header-page">
                <h2>Dates</h2>
                <button onClick={() => setOpenModal(true)}>🖊️</button>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} >
                Dates
            </Modal>
            {
                isLogged ?
                    <ListDates dates={user.dates} />
                    :
                    <p>Logeate para comenzar a guardar tus fechas importantes</p>
            }
        </>
    )
}

export default Dates