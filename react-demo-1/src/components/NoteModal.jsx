import React from "react";
import NoteForm from "./NoteForm";

const NoteModal = ({ noteModal }) => {
  if (noteModal) {
    return (
      <div>
        <NoteForm type={}/>
      </div>
    );
  }
};

export default NoteModal;
