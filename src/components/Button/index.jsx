import React from "react";

const Button = ({ className, children, onClick }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${className ? className : ""} button`}
    >
      {children}
    </button>
  );
};

export default Button;