import React, { useState } from "react";
import ContactsC from "../../Components/Contacts/Contacts";
import useUser from "../../Hooks/useUser";
import Modal from "../../Components/modal/modal";

import './style.css'

function Contacts() {
  const { user, isLogged } = useUser()
  const [openModal, setOpenModal] = useState(false)
  return (
    <>
      <div className="header-page">
        <h2>Contacts</h2>
        <button onClick={() => setOpenModal(true)}>🖊️</button>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)} >
        hola
      </Modal>
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
