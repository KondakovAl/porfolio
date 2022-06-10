import React from "react";

/*Images*/
import project1 from "../../assets/images/project1.png";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`modal ${isModalOpen ? "--open" : ""}`}
      onClick={() => setIsModalOpen(true)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h1 className="modal__title">Ava App website</h1>
          <span className="modal__close">×</span>
        </div>
        <div className="modal__main">
          <div className="modal__description">
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">
                About:{" "}
              </span>
              In this project I used HTML + CSS without preprocessors and try to
              use jQuery just a little. Also I make some CSS animations
            </div>
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">
                Stack:{" "}
              </span>
              HTML, CSS (+animations), JS
            </div>
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">Date: </span>
              May, 2021
            </div>
            <a
              href=""
              className="modal__button-link"
              onClick={(e) => e.preventDefault()}
            >
              <span className="modal__button form__button">visit-website</span>
            </a>
          </div>
          <div className="modal__image-container">
            <img src={project1} alt="" className="modal__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
