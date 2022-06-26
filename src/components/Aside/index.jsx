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
  setCheckbox,
  checkbox,
}) => {
  console.log(checkbox);

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
            checkbox={checkbox}
            setCheckbox={setCheckbox}
          />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
