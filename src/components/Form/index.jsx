import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";

const Form = ({ setFormInner }) => {
  const [formIsSubmit, setFormIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    setTimeout(() => {
      console.log(data);
      setFormIsSubmit(true);
    }, 600);
  };

  useEffect(() => {
    setFormInner({
      name: watch("name"),
      email: watch("email"),
      message: watch("message"),
    });
  }, [watch("name"), watch("email"), watch("message")]);

  if (formIsSubmit) {
    return (
      <div className="form-submited">
        <h1 className="form-submited__title">Thank you! &#129311;</h1>
        <p className="form-submited__text">
          Your message has been accepted. You will recieve answer really soon!
        </p>
        <Button
          className={"form-submited__button"}
          onClick={() => {
            setFormInner(null);
            setFormIsSubmit(false);
            reset(null);
          }}
        >
          send-new-message
        </Button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        title="name"
        name="name"
        required
        register={register}
        errors={errors}
        errorText="Enter your name"
        validationType="name"
      />
      <Input
        title="email"
        name="email"
        required
        register={register}
        errors={errors}
        errorText="Enter the email address in the format example@example.com"
        validationType="email"
      />

      <Textarea
        title="message"
        name="message"
        required
        register={register}
        errors={errors}
        errorText="Enter your message"
      />
      <Button className={"form__button"}>submit-message</Button>
    </form>
  );
};

export default Form;
