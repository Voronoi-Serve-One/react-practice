import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ message, state }) => {
  if (!state) return null;
  return createPortal(
    <section
      style={{
        position: "absolute",
        top: 30,
        left: "50%",
        transform: "translateX(-50%)",
        border: "1px solid black",
      }}
    >
      {state && <h1>{message}</h1>}
    </section>,
    document.querySelector("#modal-root"),
  );
};

export default Modal;
