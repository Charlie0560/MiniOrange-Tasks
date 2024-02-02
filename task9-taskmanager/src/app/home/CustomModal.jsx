// components/Modal.js
import React from 'react';
import Modal from 'react-modal';

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '300px',
          margin: 'auto',
          borderRadius: '8px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          height: 'max-content   '
        },
      }}
    >
      {children}
      <button onClick={onClose} style={{float: "right"}}>Close</button>
    </Modal>
  );
};

export default CustomModal;
