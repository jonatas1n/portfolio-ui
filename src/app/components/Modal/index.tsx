import { PropsWithChildren } from "react";
import { Card } from "../Card";
import { FaTimes } from "react-icons/fa";
import * as motion from "motion/react-client";

type ModalProps = {
  onClose?: VoidFunction;
  title?: string;
};

export const Modal = ({
  title,
  onClose,
  children,
}: PropsWithChildren<ModalProps>) => {
  return (
    <div className="z-50 absolute">
      <div
        onClick={onClose}
        className="fixed w-dvw h-dvh bottom-0 top-0 left-0 right-0 z-50 backdrop-brightness-50"
      />
      <motion.div
        initial={{ translateY: "-55%", opacity: 0 }}
        animate={{ translateY: "-50%", opacity: 1 }}
        exit={{ transform: "translateY(3rem)", opacity: 0 }}
        className="w-3/4 lg:w-1/2 h-1/2 z-50 min-h-60 fixed top-1/2 left-[12.5%] lg:left-1/4 -translate-y-1/2 -translate-x-[12.5%] lg:-translate-x-1/2"
      >
        <div className="grid grid-cols-6">
          <Card className="col-span-5">
            <div className="grid gap-4 col">
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
      </motion.div>
    </div>
  );
};
