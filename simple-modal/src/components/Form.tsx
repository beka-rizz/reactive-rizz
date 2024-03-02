import React from "react";
import Button from "./Button";
import InputGroup from "./InputGroup";
import { TInputGroup, useForm } from "../hooks/useForm";

type FormProps = {
  firstInputRef?: React.RefObject<HTMLInputElement>;
};

const fields: TInputGroup[] = [
  {
    name: "username",
  },
  {
    name: "password",
    type: "password",
  },
];

const Form: React.FC<FormProps> = ({ firstInputRef }) => {
  const { formState } = useForm(fields);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formState.getValues());
      }}
    >
      {formState.fields.map((field) => {
        if (field.name === "username") {
          return (
            <InputGroup
              key={field.name}
              forInput={field.name}
              type={field.type}
              firstInputRef={firstInputRef}
              onChange={field.onChange}
            />
          );
        }
        return (
          <InputGroup
            key={field.name}
            forInput={field.name}
            type={field.type}
            onChange={field.onChange}
          />
        );
      })}

      <Button type="submit">Register</Button>
    </form>
  );
};

export default Form;
