import React, { useEffect, useRef, FunctionComponent } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal: FunctionComponent = ({ children }) => {
  const elRef = useRef(document.createElement("div"));

  useEffect(() => {
    if (!modalRoot) {
      return;
    }

    modalRoot.appendChild(elRef.current);
    
    // the call should return on nothing
    return () => {
      modalRoot.removeChild(elRef.current);
    };
    // it will only run this when modal root gets closed
  }, []); // this makes it run only for one time
  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
