import React from "react";
import { Modal } from "./modal/Modal";
import Form from "./Form";

type RegisterModalProps = {
  firstInputRef: React.RefObject<HTMLInputElement>;
};

export const RegisterModal: React.FC<RegisterModalProps> = ({
  firstInputRef,
}) => {
  return (
    <div>
      <Modal>
        <h1 className="font-bold text-2xl">Register</h1>
        <Form firstInputRef={firstInputRef} />
      </Modal>
    </div>
  );
};
