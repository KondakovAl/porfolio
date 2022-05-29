import React from "react";

const Input = ({
  title,
  name,

  register,
  errors,
  errorText,
  validationType,
}) => {
  return (
    <div className="form__group">
      <label className="form__label">_{title}:</label>
      <input
        className="form__input"
        {...register(name, {
          required: true,
        })}
      />
      {errors[name] && <div className="form__label-error">{errorText}</div>}
    </div>
  );
};

export default Input;
