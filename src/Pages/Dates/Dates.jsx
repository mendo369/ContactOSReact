import React from 'react'
import ListDates from '../../Components/Dates/ListDates'
import useUser from '../../Hooks/useUser'

import './style.css'

function Dates() {
    const { user, isLogged } = useUser()
    return (
        <>
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