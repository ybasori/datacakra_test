import { createContext } from "react";
import { ModalContextProps } from "../types";

const modalContext: ModalContextProps = {
  setModal: () => null,
  closeNewestModal: () => null,
};

const ModalContext = createContext(modalContext);

export default ModalContext;
