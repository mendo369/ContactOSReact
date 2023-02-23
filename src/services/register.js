const BASE_URL = "http://localhost:5600/api/"

export default function Register({ user }) {
    return fetch(`${BASE_URL}auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, phone: user.phone, password: user.password }),
    }).then((res) => {
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        return res.json();
    });
}
