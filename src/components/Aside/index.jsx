import React from "react";
import Widget from "../Widget/index";

const Aside = ({ variant, widgets, className }) => {
  return (
    <aside className={`${className}__aside aside`}>
      <div className="aside__content">
        {widgets[variant].map((widget, index) => (
          <Widget
            key={index}
            title={widget.title}
            links={widget.links}
            withCheckBox
            withEmailLink
            withPhoneLink
          />
        ))}
      </div>
    </aside>
  );
};

export default Aside;
