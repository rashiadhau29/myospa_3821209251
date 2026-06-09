import React from "react";
import Contact from "./Contact";

const ContactPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black text-2xl hover:text-red-500"
        >
          &times;
        </button>
        <Contact />
      </div>
    </div>
  );
};

export default ContactPopup;
