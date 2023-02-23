import React from 'react'

function ListNotes({ notes }) {
    return (
        <div className="notes-list">
            <h2>Notes</h2>
            <ul>
                {
                    notes.map(note => {
                        return <li className="note">
                            <p>{note.content}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListNotes