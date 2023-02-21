import { useContext, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Context from "../context/userContext";
import loginService from "../services/login";

function useUser() {
    let navigate = useNavigate()
    const { user, setUser, contacts, setContacts } = useContext(Context)

    const Login = useCallback(
        ({ user, password }) => {
            loginService({ user, password }).then(res => {
                const { email, phone, password, token, contacts } = res
                console.log(res)
                const userRes = { email, password, phone, token, contacts }
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

