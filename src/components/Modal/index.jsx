import React from "react";
import Button from "../Button";

/*Images*/
import project1 from "../../assets/images/project1.png";

const Modal = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`modal ${isModalOpen ? "--open" : ""}`}
      onClick={() => setIsModalOpen(false)}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <h1 className="modal__title">Ava App website</h1>
          <span className="modal__close" onClick={() => setIsModalOpen(false)}>
            ×
          </span>
        </div>
        <div className="modal__main">
          <div className="modal__image-container">
            <img src={project1} alt="" className="modal__image" />
          </div>
          <div className="modal__description">
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">
                About:{" "}
              </span>
              In this project I used HTML + CSS without preprocessors and try to
              use JS just a little. Also I make some CSS animations.
            </div>
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">
                Stack:{" "}
              </span>
              HTML, CSS (+animations), JS
            </div>
            <div className="modal__feature">
              <span className="modal__feature modal__feature_bold">Date: </span>
              May, 2022
            </div>
            <a
              href=""
              className="modal__button-link"
              onClick={(e) => e.preventDefault()}
            >
              <Button
                className={"modal__button"}
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                visit-website
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
