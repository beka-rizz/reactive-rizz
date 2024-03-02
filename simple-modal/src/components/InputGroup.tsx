import React from "react";
import Label from "./Label";
import toUpperCase from "../utils/utils";

type InputGroupProps = {
  forInput: string;
  firstInputRef?: React.RefObject<HTMLInputElement>;
  type?: string;
  onChange?: () => void;
};

const InputGroup: React.FC<InputGroupProps> = ({ forInput, firstInputRef, onChange, type = "text" }) => {
  return (
    <div className="mb-4">
      <Label htmlFor={forInput}>{toUpperCase(forInput)}</Label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={forInput}
        type={type}
        placeholder={toUpperCase(forInput)}
        ref={firstInputRef ? firstInputRef : null}
        onChange={onChange}
      />
    </div>
  );
};

export default InputGroup;
