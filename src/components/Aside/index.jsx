import React from "react";
import Widget from "../Widget/index";

const Aside = ({
  variant,
  widgets,
  className,
  setActiveInfo,
  activeInfo,
  setActiveTab,
}) => {
  return (
    <aside className={`${className}__aside aside`}>
      <div className="aside__content">
        {widgets[variant].map((widget, index) => (
          <Widget
            key={index}
            title={widget.title}
            links={widget.links}
            setActiveInfo={setActiveInfo}
            activeInfo={activeInfo}
            setActiveTab={setActiveTab}
          />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
