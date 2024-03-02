import React from "react";

export default function useInput() {
  const [value, setValue] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  }

  return {
    value, handleChange
  }
}