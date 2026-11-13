import React from "react";
import { createPortal } from "react-dom";
const ConfModal = ({ ui }) => {
  if (ui) {
    return createPortal(
      <div>
        <p>{ui.title}</p>
        <div>
          {ui.buttons.map((each) => (
            <button key={each.title} onClick={each.onclick}>
              {each.title}
            </button>
          ))}
        </div>
      </div>,
      document.querySelector("#modal-div"),
    );
  }
};

export default ConfModal;
