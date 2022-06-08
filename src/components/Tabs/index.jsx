import React from "react";
import { ReactComponent as Close } from "../../assets/images/close.svg";

const Tabs = () => {
  return (
    <div className="file-tabs">
      <div className="file-tabs__tab">
        <div className="file-tabs__tab-title">personal-info</div>
        <button className="file-tabs__tab-close">
          <Close
            className="file-tabs__tab-close-icon"
            width="11"
            height="10"
            fill="#607B96"
          />
        </button>
      </div>
    </div>
  );
};

export default Tabs;
