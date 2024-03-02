import React from "react";
import { TModal } from "../models/modal";

export default function useModal() {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    modal: {
      isOpen,
      openModal,
      closeModal,
    } as TModal,
  };
}
