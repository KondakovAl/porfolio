import React from "react";

const Input = ({ label, type, name }) => {
  return (
    <div className="form__group">
      <label className="form__label">_{label}:</label>
      <input type={type} className="form__input" name={name} />
    </div>
  );
};

export default Input;
