import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useUser from '../../../Hooks/useUser';

function Login() {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const { Login } = useUser()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ user, password })
        Login({ user, password });
        // navigate("/");
    };
    return (
        <>
            <section className="login">
                <form className='form-auth' onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="user">Phone/Email</label>
                        <input type="text" name='phone' placeholder='e.x. 300000000' value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' placeholder='******' value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </section>
        </>
    )
}

export default Login