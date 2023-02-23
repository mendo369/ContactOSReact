import React from 'react'

function Contacts({ contacts }) {
    console.log(contacts)
    return (
        <div className='contacts'>
            <ul>
                {
                    contacts.map(contact => {
                        return <li key={contact.id} className="contact">
                            <div>
                                {contact.name}
                            </div>
                            <div>
                                {contact.phone}
                            </div>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Contacts