const user = {
    email: "user@mail.com",
    phone: "3000000000",
    password: "contraseña",
    token: "34p"
}

export default function login({ user: userprop, password }) {
    return new Promise((res, rej) => {

        if ((userprop == user.email || userprop == user.phone) && password == user.password) {
            res(
                user
                // console.log("login succesfull")
            )
        }
        else {
            rej(
                console.log("Erro login")
            )
        }
    })
}