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
    ],
    notes: [
        {
            id: 1,
            content: "esta es una nota creada para pruebas"
        },
        {
            id: 2,
            content: "esta es una nota creada para pruebas sfsasg ssga gsf fg r rgrg"
        },
        {
            id: 3,
            content: "esta es una nota creada para pruebas sfgrr rere gr greg regg"
        }
    ],
    dates: [
        {
            id: 1,
            date: "10/02/2023",
            info: "Fecha importante de prueba"
        },
        {
            id: 2,
            date: "10/02/2023",
            info: "Fecha importante de prueba #2"
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