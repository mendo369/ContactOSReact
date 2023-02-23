import React, { useState } from 'react'
import useUser from '../../Hooks/useUser'
import ListNotes from '../../Components/Notes/ListNotes'
import Modal from '../../Components/modal/modal'

import './style.css'

function Notes() {
    const { user, isLogged } = useUser()
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <div className="header-page">
                <h2>Notes</h2>
                <button onClick={() => setOpenModal(true)}>🖊️</button>
            </div>
            <Modal open={openModal} onClose={() => setOpenModal(false)} >
                Notes
            </Modal>
            {
                isLogged ?
                    <ListNotes notes={user.notes} />
                    :
                    <p>Logeate para comenzar a guardar tus notas</p>
            }
        </>
    )
}

export default Notes