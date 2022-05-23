import React from "react";

/*Widget Icons*/
import { ReactComponent as WidgetIcon } from "../../assets/images/widget-icon.svg";
//*Folders Icons*/
import { ReactComponent as Folder } from "../../assets/images/folder.svg";

const index = ({ title, active, setActive }) => {
  return (
    <div className="widget">
      <button className="widget__header" onClick={() => setActive(title)}>
        <WidgetIcon className="widget__header-icon" fill="white" />
        <span className="widget__header-text">{title}</span>
      </button>
      <div className={(active === title ? "--show" : "") + " widget__content"}>
        <ul className="folder">
          <li className="folder__item">
            <button className="folder__item-btn">
              <Folder
                className="folder__item-btn-icon"
                width="16"
                height="14"
                fill="#E99287"
              />
              <span className="folder__item-btn-pic">bio</span>
            </button>
          </li>
          <li className="folder__item">
            <button className="folder__item-btn">
              <Folder
                className="folder__item-btn-icon"
                width="16"
                height="14"
                fill="#43D9AD"
              />
              <span className="folder__item-btn-pic">education</span>
            </button>
          </li>
          <li className="folder__item">
            <button className="folder__item-btn">
              <Folder
                className="folder__item-btn-icon"
                width="16"
                height="14"
                fill="#3A49A4"
              />
              <span className="folder__item-btn-pic">interests</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default index;
