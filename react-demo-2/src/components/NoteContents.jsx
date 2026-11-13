import React from "react";

const NoteContents = ({ state, handleDeleteModal, handleEditNoteModal }) => {
  return (
    <div>
      {state.data.map(({ id, title, content, date, edited }, index) => (
        <div key={id}>
          <p>{index + 1}.</p>
          <p>{title ? title : "(No Title)"}</p>
          <p>{content ? content : "(Empty Note)"}</p>
          <p>Created: {date}</p>
          {edited && <p>Edited: {edited}</p>}
          <button onClick={() => handleDeleteModal(id)}>Delete</button>
          <button onClick={() => handleEditNoteModal(id, title, content)}>
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteContents;
