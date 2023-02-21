import React from "react";
import { Link } from "react-router-dom";
import ContactsC from "../../Components/Contacts/Contacts";
import useUser from "../../Hooks/useUser";

import './style.css'

function Contacts() {
  const { user, isLogged } = useUser()
  return (
    <>
      {
        isLogged ?
          <ContactsC contacts={user.contacts} />
          :
          <p>Logeate y comienza a guardar tus contactos</p>
      }
    </>
  );
}

export default Contacts;
