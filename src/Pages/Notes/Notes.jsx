import React from 'react'
import useUser from '../../Hooks/useUser'
import ListNotes from '../../Components/Notes/ListNotes'

import './style.css'

function Notes() {
    const { user, isLogged } = useUser()
    return (
        <>
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