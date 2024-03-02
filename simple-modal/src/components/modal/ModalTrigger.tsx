import React, { useEffect } from "react";
import useModalContext from "../../hooks/useModalContext";
import Button from "../Button";
import { RegisterModal } from "../RegisterModal";

const ModalTrigger = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { isOpen, openModal } = useModalContext();
  const handleClick = () => {
    openModal();
  };

  useEffect(() => {
    if (isOpen && inputRef) {
      inputRef?.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      <Button onClick={handleClick}>Register</Button>
      <RegisterModal firstInputRef={inputRef} />
    </>
  );
};

export default ModalTrigger;
