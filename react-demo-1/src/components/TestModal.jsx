import React from "react";
import { createPortal } from "react-dom";

const TestModal = ({ isopen, children, type }) => {
  const modalTypes = {
    notif: {
      style: {
        position: "fixed",
        backgroundColor: "lightgreen",
        top: 50,
        left: "50%",
        transform: "translateX(-50%)",
        paddingInline: "2rem",
      },
    },
    conf: {
      style: {
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      },
    },
  };
  const modalStyle = modalTypes[type]?.style;
  const modalRoot = document.querySelector("#modal-root");
  if (!modalRoot) return null;
  if (!isopen) return null;
  return createPortal(<div style={modalStyle}>{children}</div>, modalRoot);
};

export default TestModal;
