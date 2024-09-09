import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-box bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h3 className="text-lg font-bold">Hello!</h3>
        <p className="py-4">This is your modal content.</p>
        <div className="modal-action flex justify-end">
          <button onClick={onClose} className="btn btn-primary">
            Close!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
