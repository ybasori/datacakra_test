import { useContext } from "react";
import { ModalProvider, ModalContext } from "./context/ModalProvider";

const useModal = () => {
  const { setModal, closeNewestModal } = useContext(ModalContext);

  return { setModal, closeNewestModal };
};

export { ModalProvider, useModal };
