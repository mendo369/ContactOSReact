import React from 'react'
import {
    Outlet, Link, NavLink
} from 'react-router-dom'
import './style.css'

function Index() {
    return (
        <section className="auth">
            <div className="container">
                <div className="render">
                    <div className='options-auth'>
                        <NavLink to={'register'} className={({ isActive }) =>
                            isActive ? 'active-route' : undefined
                        }
                        >Register</NavLink>
                        |
                        <NavLink to={'login'} className={({ isActive }) =>
                            isActive ? 'active-route' : undefined
                        }>Login</NavLink>
                    </div>
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

export default Index