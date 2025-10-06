import { use, useRef } from "react";
import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef(function Modal(
  { children, ButtonCaption, ButtonAction },
  ref
) {
  const DialogRef = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      DialogRef.current.showModal();
    },
    close() {
      DialogRef.current.close();
    },
  }));

  return createPortal(
    <dialog onClose={ButtonAction} ref={DialogRef}
    className="backdrop:bg-stone-900/90 backdrop:backdrop-blur-sm p-4 rounded-md shadow-md w-1/6 md:w-1/4"
    >
      {children}
      <form method="dialog"
      className="mt-4 text-right"
      >
        <Button>{ButtonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
