import React from "react";

const Form = () => {
  return (
    <form className="form">
      <div className="form__group">
        <label className="form__label">_name:</label>
        <input type="text" className="form__input" />
      </div>
      <div className="form__group">
        <label className="form__label">_email:</label>
        <input type="email" className="form__input" />
      </div>
      <div className="form__group">
        <label className="form__label">_message:</label>
        <textarea type="text" className="form__textarea"></textarea>
      </div>
      <input type="submit" value="submit-message" className="form__submit" />
    </form>
  );
};

export default Form;
