import { React, useState } from "react";

/*Widget Icons*/
import { ReactComponent as WidgetIcon } from "../../assets/images/widget-icon.svg";
//*Folders Icons*/
import { ReactComponent as Folder } from "../../assets/images/folder.svg";

const Widget = ({ title, links }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`widget ${isOpen ? "--show" : " "}`}>
      <div className="widget__header" onClick={() => setIsOpen(!isOpen)}>
        <WidgetIcon className="widget__header-icon" fill="white" />
        <span className="widget__header-text">{title}</span>
      </div>
      <div className="widget__content">
        <ul className="folder">
          {links.map((link, index) => (
            <li className="folder__item" key={index}>
              <Folder
                className="folder__item-icon"
                width="16"
                height="14"
                fill={link.color}
              />
              <span className="folder__item-text">{link.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Widget;
