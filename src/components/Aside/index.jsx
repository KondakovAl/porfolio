import { React, useState } from "react";
import Widget from "../Widget/index";

const Aside = ({
  variant,
  widgets,
  className,
  activeInfo,
  setActiveInfo,
  setActiveTab,
  stateWithCheckbox,
  setStateWithCheckbox,
}) => {
  return (
    <aside className={`${className}__aside aside`}>
      <div className="aside__content">
        {widgets[variant].map((widget, index) => (
          <Widget
            key={index}
            title={widget.title}
            links={widget.links}
            activeInfo={activeInfo}
            setActiveInfo={setActiveInfo}
            setActiveTab={setActiveTab}
            stateWithCheckbox={stateWithCheckbox}
            setStateWithCheckbox={setStateWithCheckbox}
          />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
