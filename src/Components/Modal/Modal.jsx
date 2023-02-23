import React from 'react'
import './style.css'

function Modal({ open, onClose, children }) {
    if (!open) return null
    return (
        <div className="overlay">
            <button onClick={onClose} className="close">X</button>
            <div className="modal-container">
                {children}
            </div>
        </div>
    )
}

export default Modal