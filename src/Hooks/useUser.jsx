import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/userContext";
import loginService from "../services/loginProd";

function useUser() {
    let navigate = useNavigate()
    const { user, setUser, contacts, setContacts } = useContext(Context)

    const Login = useCallback(
        ({ user }) => {
            console.log("Este es el usuario que pasamos", user)
            loginService({ user }).then(res => {
                const { email, phone, password, token, contacts, notes, dates } = res
                console.log(res)
                const userRes = { email, password, phone, token, contacts, notes, dates }
                setUser(userRes)
                localStorage.setItem("user", JSON.stringify(userRes));
                navigate('/')
            })
                .catch(err => alert(err))
        }, [setUser]
    );

    const LogOut = () => {
        setUser(null)
        localStorage.removeItem("user")
        console.log("usurio cerró sesion")
        navigate('/')
    }

    return {
        Login,
        LogOut,
        isLogged: Boolean(user),
        user
    }
}

export default useUser;

