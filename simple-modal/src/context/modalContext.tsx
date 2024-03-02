import React from "react";
import { TModal } from "../models/modal";

export const ModalContext = React.createContext<
  TModal | undefined
>(undefined);
