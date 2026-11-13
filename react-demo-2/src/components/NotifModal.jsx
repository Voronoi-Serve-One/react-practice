import React from "react";
import { createPortal } from "react-dom";

const NotifModal = ({ title }) => {
  if (!title) return null;
  return createPortal(
    <div>
      <p>!!</p>
      <p>{title}</p>
    </div>,
    document.querySelector("#modal-div"),
  );
};

export default NotifModal;
