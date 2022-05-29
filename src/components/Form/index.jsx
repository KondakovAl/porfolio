import React from "react";
import { useForm } from "react-hook-form";
import Input from "../Input";
import Textarea from "../Textarea";
import SendButton from "../SendButton";

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Input
        title="name"
        name="name"
        register={register}
        errors={errors}
        errorText="Enter your name"
        validationType="name"
      />
      <Input
        title="email"
        name="email"
        register={register}
        errors={errors}
        errorText="Enter your email"
        validationType="email"
      />

      <Textarea />
      <SendButton />
    </form>
  );
};

export default Form;
