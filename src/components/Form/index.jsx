import React from "react";
import Input from "../Input";
import Textarea from "../Textarea";

const Form = ({ inputs, textarea }) => {
  return (
    <form className="form">
      {inputs.map((input, index) => (
        <Input
          key={index}
          label={input.label}
          type={input.type}
          name={input.name}
        />
      ))}
      <Textarea
        label={textarea.label}
        type={textarea.type}
        name={textarea.name}
      />
      <input type="submit" value="submit-message" className="form__submit" />
    </form>
  );
};

export default Form;
