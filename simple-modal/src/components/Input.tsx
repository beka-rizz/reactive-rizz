import React from "react";
import useInput from "../hooks/useInput";

type InputProps = React.ComponentProps<"input"> & {
};

const Input: React.FC<InputProps> = ({
  className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
  ...props
}) => {
  const {value, handleChange: onChange} = useInput();
  return <input className={className} {...props} value={value} onChange={onChange} />;
};

export default Input;
