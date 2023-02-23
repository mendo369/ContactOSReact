const BASE_URL = "http://localhost:5600/api/"

export default function Login({ user }) {
    return fetch(`${BASE_URL}auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ phone: user.phone, password: user.password })
    }).then(
        res => {
            if (!res.ok) {
                throw new Error(res.statusText)
            }
            return res.json()
        }
    )
}
