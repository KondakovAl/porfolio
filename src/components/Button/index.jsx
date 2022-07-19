import React from "react";
import { useState } from "react";

const Button = ({ className, children, onClick, disabled }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`${className ? className : ""} ${
        !disabled ? "" : "--disabled"
      } button`}
    >
      {children}
    </button>
  );
};

export default Button;
