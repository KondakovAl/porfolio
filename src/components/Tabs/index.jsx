import React from "react";

const Tabs = ({ variant, activeTab, activeInfo, stateWithCheckbox }) => {
  return (
    <div className="file-tabs">
      <div className="file-tabs__tab">
        {variant === "about-me" && (
          <>
            <span className="file-tabs__tab-title">{activeTab}</span>
            <span className="file-tabs__tab-slash">/</span>
            <span className="file-tabs__tab-title">{activeInfo}</span>
          </>
        )}
        {variant === "projects" && (
          <>
            <span className="file-tabs__tab-title">
              {stateWithCheckbox.join(", ")}
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
