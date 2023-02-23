import React from 'react'

function Modal({ open, onClose, children }) {
    if (!open) return null
    return (
        <div className="overlay" style={{ backgroundColor: "red" }}>
            <button onClick={onClose}>X</button>
            <div className="modal-container">
                {children}
            </div>
        </div>
    )
}

export default Modal