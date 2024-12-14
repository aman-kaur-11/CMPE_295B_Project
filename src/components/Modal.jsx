import React from "react";
import "./Modal.css"; 

const Modal = ({ isOpen, onClose, log }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Log Details</h2>
        <p><strong>Timestamp:</strong> {log.timestamp}</p>
        <p><strong>App Name:</strong> {log.appName}</p>
        <p><strong>Log Level:</strong> {log.level}</p>
        <p><strong>Message:</strong> {log.message}</p>
        <p><strong>Size:</strong> {log.size}</p>
      </div>
    </div>
  );
};

export default Modal;
