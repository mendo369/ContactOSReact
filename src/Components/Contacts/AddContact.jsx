import React from 'react'

function AddContact({ onClose }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Añadiendo contacto desde modal")
        onClose ? onClose() : null
    }
    return (
        <form onSubmit={handleSubmit} className="modal-form">
            <div className="input-group">
                <input type="text" placeholder='Name' />
            </div>
            <div className="input-group">
                <input type="text" placeholder='Phone' />
            </div>
            <div className="input-group">
                <input type="text" placeholder='Address' />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
}

export default AddContact