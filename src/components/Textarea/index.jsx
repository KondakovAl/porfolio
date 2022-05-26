import React from "react";

const Textarea = ({ label, type, name }) => {
  return (
    <div className="form__group">
      <label className="form__label">_{label}:</label>
      <textarea type={type} className="form__textarea" name={name}></textarea>
    </div>
  );
};

export default Textarea;
