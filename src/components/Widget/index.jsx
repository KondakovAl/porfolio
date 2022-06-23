import { React, useState } from "react";

/*Widget Icons*/
import { ReactComponent as WidgetIcon } from "../../assets/images/widget-icon.svg";

const Folder = ({ setActiveInfo, link }) => {
  const [isActiveInfo, setIsActiveInfo] = useState(false);

  return (
    <li
      className={`folder__item ${isActiveInfo ? "--active" : " "}`}
      onClick={() => {
        setActiveInfo(link.name);
        setIsActiveInfo(!isActiveInfo);
      }}
    >
      {link.withCheckBox && (
        <label className="folder__checkbox checkbox">
          <input type="checkbox" className="checkbox__field" />
          <div className="checkbox__inner">
            <div className="checkbox__inner-container">{link.pic}</div>
            <span className="checkbox__inner-text">{link.name}</span>
          </div>
        </label>
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
  );
};

const Widget = ({ title, links, setActiveInfo, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`widget ${isOpen ? "--show" : " "}`}>
      <div
        className="widget__header"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <WidgetIcon className="widget__header-icon" fill="white" />

        <span className="widget__header-text">{title}</span>
      </div>
      <div
        className="widget__content"
        onClick={() => {
          title !== "contacts" && setActiveTab(title);
        }}
      >
        <ul className="folder">
          {links.map((link, index) => (
            <Folder key={index} link={link} setActiveInfo={setActiveInfo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Widget;
