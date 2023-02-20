const user = {
    email: "user@mail.com",
    phone: "3000000000",
    password: "contraseña"
}

export default function login({ user: userprop, password }) {
    if ((userprop == user.email || userprop == user.phone) && password == user.password) {
        return user
    }
    else {
        return new Error('user or password invalid')
    }
}