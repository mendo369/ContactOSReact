import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <div>404</div>
            <Link to={'/'}>Volvamos a casa</Link>
        </>
    )
}

export default NotFound