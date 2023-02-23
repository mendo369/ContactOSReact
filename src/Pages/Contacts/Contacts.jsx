import React from "react";
import ContactsC from "../../Components/Contacts/Contacts";
import useUser from "../../Hooks/useUser";

import './style.css'

function Contacts() {
  const { user, isLogged } = useUser()
  return (
    <>
      {
        isLogged ?
          user.contacts ?
            <ContactsC contacts={user.contacts} />
            :
            <p>Vaya! aún no has guardado ningún contacto</p>
          :
          <p>Logeate y comienza a guardar tus contactos</p>
      }
    </>
  );
}

export default Contacts;
