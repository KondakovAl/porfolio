import React from "react";
import Button from "../Button";

const Modal = ({ isModalOpen, setIsModalOpen, modalInfo }) => {
  return (
    <div
      className={`modal ${isModalOpen ? "--open" : ""}`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h1 className="modal__title">{modalInfo.name}</h1>
          <span className="modal__close" onClick={() => setIsModalOpen(false)}>
            ×
          </span>
        </div>
        <div className="modal__main">
          <div className="modal__image-container">
            <img src={modalInfo.src} alt="project" className="modal__image" />
          </div>
          <div className="modal__description">
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">
                About:{" "}
              </span>
              {modalInfo.about}
            </div>
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">
                Stack:{" "}
              </span>
              {modalInfo.stack}
            </div>
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">Date: </span>
              {modalInfo.date}
            </div>
            <a
              href={modalInfo.vercel}
              target="_blank"
              rel="noreferrer"
              className="modal__button-link"
            >
              <Button className={"modal__button"}>visit-website</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
