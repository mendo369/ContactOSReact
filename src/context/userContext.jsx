import React, { useState } from "react";
const Context = React.createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(
        JSON.parse(window.localStorage.getItem("user"))
    )

    const [contacts, setContacts] = useState([])
    const [notes, setNotes] = useState([])
    const [dates, setDates] = useState([])

    return (
        <Context.Provider value={{
            user,
            setUser,
            contacts,
            setContacts,
            notes,
            setNotes,
            dates,
            setDates
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context
