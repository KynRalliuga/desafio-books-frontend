import { XIcon } from "@heroicons/react/outline";
import React from "react";
import styles from "../../styles/Books.module.css";

interface modalInterface {
  showModal: boolean;
  onClickClose: (event: React.FormEvent<HTMLButtonElement>) => void;
}

const Modal: React.FC<modalInterface> = (props) => {
  const { children, showModal, onClickClose } = props;
  return (
    <div
      className={`fixed top-0 left-0 p-4 pt-16 flex justify-center items-center md:pt-20 md:p-20 w-screen h-screen bg-black/[0.4] overflow-hidden trasition-all ${
        showModal ? " block opacity-100" : " hidden opacity-0"
      }`}
    >
      <button
        className={`absolute top-0 left-0 w-screen h-screen overflow-hidden ${
          showModal ? " block opacity-100" : " hidden opacity-0"
        }`}
        onClick={onClickClose}
      />
      <button
        className={`close-modal text-xs border bg-white h-8 w-8 p-1.5 mr-4 mt-4 absolute top-0 right-0 rounded-full ${styles.borderColor33333302}`}
        onClick={onClickClose}
      >
        <XIcon />
      </button>

      <div
        className={`bg-white p-6 md:p-12 rounded relative ${styles.frameModal}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
