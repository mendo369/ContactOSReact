import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <section className="login">
                <form className='form-auth'>
                    <div className="input-group">
                        <label htmlFor="phone">Phone/Email</label>
                        <input type="text" name='phone' placeholder='e.x. 300000000' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='******' />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login