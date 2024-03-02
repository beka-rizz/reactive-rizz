import React from "react";
import { ModalContext } from "../../context/modalContext";
import useModal from "../../hooks/useModal";

type ModalProviderProps = {
  children?: React.ReactNode;
};

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { modal: modalObject } = useModal();
  return (
    <ModalContext.Provider value={modalObject}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
