import React from "react";

const Input = ({
  title,
  name,
  required,
  register,
  errors,
  errorText,
  validationType,
}) => {
  const regExpName = /^[?!,.а-яА-ЯёЁ0-9a-zA-Z\s]+$/;
  const regExpEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validationFunction = (value, validationType, required) => {
    if (required === false) if (value.length < 1) return true;
    switch (validationType) {
      case "name":
        return regExpName.test(value);

      case "email":
        return regExpEmail.test(value);

      default:
        return true;
    }
  };
  return (
    <div className="form__group">
      <label className="form__label">_{title}:</label>
      <input
        className="form__input"
        {...register(name, {
          required: required,
          validate: (value) =>
            validationFunction(value, validationType, required),
        })}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <div className="form__label-error">{errorText}</div>
      )}
    </div>
  );
};

export default Input;
