import React from "react";
import Form from "./Form";
import { createPortal } from "react-dom";
const FormModal = ({ handleSubmit, handleChange, state, handleCloseModal }) => {
  const ui =
    state.mode === "edit"
      ? {
          title: "Edit Note",
          btn: "Save Changes",
          modetype: "edit_note",
        }
      : {
          title: "Add Note",
          btn: "Add Note",
          modetype: "add_note",
        };
  return createPortal(
    <div>
      <button onClick={() => handleCloseModal()}>Close</button>
      <h3>{ui.title}</h3>
      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        state={state}
        btn={ui.btn}
        modetype={ui.modetype}
      />
    </div>,
    document.querySelector("#modal-div"),
  );
};

export default FormModal;
