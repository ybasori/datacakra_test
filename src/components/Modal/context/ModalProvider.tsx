import React, { ReactChild, useState } from "react";
import Modal from "../Modal";
import { ModalDataProps, SetModalDataProps } from "../types";
import ModalContext from "./ModalContext";

interface ModalProviderProps {
  children: ReactChild;
}

const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  ...props
}) => {
  const [modalData, setModalData] = useState<ModalDataProps[]>([]);

  const setModal = (data: SetModalDataProps) => {
    const dt = new Date();
    const newData = {
      id: `modal-${dt.getTime()}`,
      ...data,
    };

    setModalData((modal) => [...modal, newData as ModalDataProps]);
  };

  const removeModal = (id: string) => {
    setModalData((modal) => [
      ...modal.filter((item: ModalDataProps) => item.id !== id),
    ]);
  };

  const closeNewestModal = () => {
    setModalData((modal) => [
      ...modal.filter((_, index, self) => index !== self.length - 1),
    ]);
  };

  return (
    <ModalContext.Provider value={{ setModal, closeNewestModal }} {...props}>
      {children}
      {modalData.map((item: ModalDataProps, index: number) => (
        <Modal
          key={`modal-${index + 1}`}
          onClose={() => removeModal(item.id)}
          {...item}
        />
      ))}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalProvider };
