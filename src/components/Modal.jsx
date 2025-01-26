import React from 'react';
import { useHistory } from 'react-router-dom';

const Modal = ({ isOpen, onClose, children }) => {
  const history = useHistory();

  const handleClose = () => {
    onClose();
    history.push('/');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 relative z-10 w-full max-w-md">
        <button className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer" onClick={handleClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;