import React, { useState } from 'react'
import useUser from '../../../Hooks/useUser'
import './style.css'

function Register() {
    const { Register } = useUser()

    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        Register({ user: { email, phone, password } })
    }

    return (
        <>
            <section className="register">
                <form className="form-auth" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' placeholder='example@example.com' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name='phone' placeholder='e.x. 300000000' value={phone} onChange={e => setPhone(e.target.value)} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='******' value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                    {/* <div className="input-group">
                        <label htmlFor="user">Confirm Password</label>
                        <input type="password" name='confirm-password' placeholder='******' />
                    </div> */}
                    <button>Submit</button>
                </form>
            </section>
        </>
    )
}

export default Register