import { PropsWithChildren } from "react";
import { Card } from "../Card";
import { FaTimes } from "react-icons/fa";

type ModalProps = {
  isOpen: boolean;
  onClose?: VoidFunction;
  title?: string;
};

export const Modal = ({ isOpen, title, onClose, children }: PropsWithChildren<ModalProps>) => {
  return (
    <div className={`${isOpen ? "grid" : "hidden"} z-20`}>
      <div
        onClick={onClose}
        className={`${
          isOpen ? "fixed" : "hidden"
        } w-dvw h-dvh bottom-0 top-0 left-0 right-0 z-30 backdrop-brightness-50`}
      />
      <div className="w-1/2 h-1/2 z-50 min-h-60 fixed top-1/2 -translate-y-1/2">
        <Card>
          <div className="grid gap-4">
            <div className="flex w-full justify-between items-center">
              <h1 className="text-lg font-bold font-display">{title}</h1>
              <button onClick={onClose}>
                <FaTimes />
              </button>
            </div>
            {children}
          </div>
        </Card>
      </div>
    </div>
  );
};
