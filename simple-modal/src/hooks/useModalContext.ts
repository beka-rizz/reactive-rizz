import React from "react";
import { ModalContext } from "../context/modalContext";

export default function useModalContext() {
  const context = React.useContext(ModalContext);

  if (context === undefined) {
    throw new Error("useModalContext must be used within a modalProvider.");
  }

  return context;
}
