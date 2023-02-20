import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Register() {
    return (
        <>
            <section className="register">
                <form className="form-auth">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='example@example.com' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name='phone' placeholder='e.x. 300000000' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='******' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="user">Confirm Password</label>
                        <input type="password" name='confirm-password' placeholder='******' />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Register