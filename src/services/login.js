const user = {
    email: "user@mail.com",
    phone: "3000000000",
    password: "contraseña",
    token: "34p",
    contacts: [
        {
            id: 1,
            name: "Daniel",
            phone: "3001112222"
        },
        {
            id: 2,
            name: "Soto",
            phone: "3001112233"
        },
        {
            id: 3,
            name: "Darien",
            phone: "3001112244"
        },
    ]
}

export default function login({ user: userprop, password }) {
    return new Promise((res, rej) => {

        if ((userprop == user.email || userprop == user.phone) && password == user.password) {
            res(
                user
            )
        }
        else {
            rej(
                console.log("Erro login")
            )
        }
    })
}