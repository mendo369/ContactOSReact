import { useContext, useCallback } from "react";
//import { Navigate, Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
// import UserContext from "../context/userContext";
import loginService from "../services/login";

function useUser() {
    let navigate = useNavigate()
    // const { user, setUser, contacts, setContacts } = useContext(UserContext)

    const Login = useCallback(
        ({ user, password }) => {
            loginService({ user, password }).then(res => {
                // alert(res.token)
                // return < Redirect to={'/'} />}}
                navigate('/')
                if (res.token) {
                    window.history.pushState({}, undefined, '/')
                    // return redirect("/")
                }

            })
                // .then(res => alert(res.token))
                .catch(err => alert(err))
            // console.log("hook", user, password)
        }, []
    );

    return { Login }
}

export default useUser;

