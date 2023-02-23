const BASE_URL = "http://localhost:5600/api/"

export default function AddNote({ parche, token }) {
    return fetch(`${BASE_URL}notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            city: parche.city,
            place: parche.place,
            category: parche.category,
            description: parche.description,
            media: parche.media,
        }),
    }).then((res) => {
        if (!res.ok) {
            throw new Error("Response is no OK");
        }
        return res.json();
    });
}
