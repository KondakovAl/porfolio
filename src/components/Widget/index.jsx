import { React, useState } from "react";

/*Widget Icons*/
import { ReactComponent as WidgetIcon } from "../../assets/images/widget-icon.svg";
//*Folders Icons*/
import { ReactComponent as Folder } from "../../assets/images/folder.svg";

const Widget = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCheckboxActive, setIsCheckboxActive] = useState([]);

  return (
    <div className={`widget ${isOpen ? "--show" : " "}`}>
      <div className="widget__header" onClick={() => setIsOpen(!isOpen)}>
        <WidgetIcon className="widget__header-icon" fill="white" />
        {/* <span className="widget__header-icon"></span> */}
        <span className="widget__header-text">{title}</span>
      </div>
      <div className="widget__content">
        <ul className="folder">
          {links.map((link, index) => (
            <li className="folder__item" key={index}>
              {link.withCheckBox && (
                <div
                  className="folder__item-checkbox item-checkbox"
                  onClick={() => setIsCheckboxActive([...isCheckboxActive])}
                >
                  <input
                    type="checkbox"
                    id={link.id}
                    className="item-checkbox__input"
                  />
                  <label className="item-checkbox__label" htmlFor={link.id}>
                    <div className="item-checkbox__label-container">
                      {link.pic}
                    </div>
                    <span className="item-checkbox__label-text">
                      {link.name}
                    </span>
                  </label>
                </div>
              )}
              {!link.withCheckBox && (
                <>
                  {link.pic}
                  {link.linkType === "phone" && (
                    <a href="tel:+79224170901" className="folder__item-text">
                      {link.name}
                    </a>
                  )}
                  {link.linkType === "email" && (
                    <a
                      href="mailto:kondakovalse99@gmail.com"
                      className="folder__item-text"
                    >
                      {link.name}
                    </a>
                  )}
                  {!link.linkType && (
                    <span className="folder__item-text">{link.name}</span>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Widget;
