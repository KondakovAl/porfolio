import React from "react";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`modal ${isModalOpen ? "--open" : ""}`}
      onClick={() => setIsModalOpen(false)}
    >
      <div
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Modal;
