import React from "react";

const Tabs = ({ activeTab, activeInfo }) => {
  return (
    <div className="file-tabs">
      <div className="file-tabs__tab">
        <span className="file-tabs__tab-title">{activeTab}</span>
        <span className="file-tabs__tab-slash">/</span>
        <span className="file-tabs__tab-title">{activeInfo}</span>
      </div>
    </div>
  );
};

export default Tabs;
