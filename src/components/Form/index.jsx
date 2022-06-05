import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Textarea from "../Textarea";
import SendButton from "../SendButton";

const Form = () => {
  const [formIsSubmit, setFormIsSubmit] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    setTimeout(() => {
      console.log(data);
      setFormIsSubmit(true);
    }, 600);
  };

  // const [currentName, setCurrentName] = useState();
  // const [currentEmail, setCurrentEmail] = useState();
  // const [currentMessage, setCurrentMessage] = useState();

  if (formIsSubmit) {
    return (
      <div className="form-submited">
        <h1 className="form-submited__title">Thank you! &#129311;</h1>
        <p className="form-submited__text">
          Your message has been accepted. You will recieve answer really soon!
        </p>
      </div>
    );
  }

  const CurrentName = watch("name");
  const CurrentEmail = watch("email");
  const CurrentMessage = watch("message");

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
        // setCurrentState={setCurrentName}
      />
      <Input
        title="email"
        name="email"
        required
        register={register}
        errors={errors}
        errorText="Enter the email address in the format example@example.com"
        validationType="email"
        // setCurrentState={setCurrentEmail}
      />

      <Textarea
        title="message"
        name="message"
        required
        register={register}
        errors={errors}
        errorText="Enter your message"
        // setCurrentState={setCurrentMessage}
      />
      <SendButton />
      <div>{CurrentName}</div>
      <div>{CurrentEmail}</div>
      <div>{CurrentMessage}</div>
    </form>
  );
};

export default Form;
