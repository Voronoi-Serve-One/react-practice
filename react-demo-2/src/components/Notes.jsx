import React, { act, useEffect, useReducer, useState } from "react";
import FormModal from "./FormModal";
import UseToggle from "./UseToggle";
import ConfModal from "./ConfModal";
import NotifModal from "./NotifModal";
import NoteContents from "./NoteContents";
const initialState = {
  title: "",
  content: "",
  data: [],
  mode: "",
  editId: null,
  notif: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "notify": {
      return { ...state, notif: action.value };
    }
    case "clear_notif": {
      return { ...state, notif: "" };
    }
    case "field_change": {
      return { ...state, [action.name]: [action.value] };
    }
    case "add_note": {
      const id = Date.now();
      const date = new Date(id).toLocaleString();
      const note = {
        id: id,
        title: state.title,
        content: state.content,
        date: date,
        edited: null,
      };
      return { ...state, data: [...state.data, note] };
    }
    case "clear_field": {
      return { ...state, mode: "", title: "", content: "" };
    }
    case "edit_mode": {
      return {
        ...state,
        title: action.title_value,
        content: action.content_value,
      };
    }
    case "toggle_mode": {
      return { ...state, mode: action.mode, editId: action.note_id };
    }
    case "edit_note": {
      const date = new Date(Date.now()).toLocaleString();
      const arr = state.data.map((each) =>
        each.id === state.editId
          ? {
              ...each,
              title: state.title,
              content: state.content,
              edited: date,
            }
          : each,
      );
      return { ...state, data: arr, editId: null, mode: "" };
    }
    case "delete_note": {
      const arr = state.data.filter((each) => each.id != action.note_id);
      return { ...state, data: arr };
    }
    default: {
      return state;
    }
  }
};
const init = (state) => {
  const data = localStorage.getItem("notes");
  return { ...state, data: data ? JSON.parse(data) : [] };
};
const Notes = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(state.data));
  }, [state.data]);

  const [formModal, setFormModal] = UseToggle();
  const [confModal, setConfModal] = UseToggle();
  const [notifModal, setNotifModal] = UseToggle();
  const [confUi, setConfUi] = useState(null);
  const handleSubmit = (e, modetype) => {
    e.preventDefault();
    modetype === "add_note"
      ? dispatch({ type: "notify", value: "Note Successfully Added" })
      : dispatch({ type: "notify", value: "Changes Saved" });
    dispatch({ type: modetype });
    dispatch({ type: "clear_field" });
    setFormModal();
  };
  useEffect(() => {
    if (!state.notif) return;
    setNotifModal(true);
    const id = setTimeout(() => {
      dispatch({ type: "clear_notif" });
      setNotifModal(false);
    }, 2000);
    return () => clearTimeout(id);
  }, [state.notif]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({ type: "field_change", name, value });
  };
  const handleCloseModal = () => {
    dispatch({ type: "clear_field" });
    setFormModal();
  };
  const handleDeleteModal = (id) => {
    setConfUi({
      title: "Delete this Note?",
      buttons: [
        {
          title: "Delete",
          onclick: () => {
            dispatch({ type: "delete_note", note_id: id });
            dispatch({ type: "notify", value: "Delete Successful" });
            setConfModal(false);
            setConfUi(null);
          },
        },
        {
          title: "Cancel",
          onclick: () => {
            setConfModal(false);
            setConfUi(null);
          },
        },
      ],
    });
    setConfModal(true);
  };
  const handleAddNoteModal = () => {
    dispatch({ type: "clear_field" });
    dispatch({ type: "toggle_mode", mode: "add", note_id: null });
    setFormModal();
  };
  const handleEditNoteModal = (id, title, content) => {
    console.log(id);
    dispatch({ type: "edit_mode", title_value: title, content_value: content });
    dispatch({ type: "toggle_mode", mode: "edit", note_id: id });
    setFormModal();
  };
  return (
    <>
      {notifModal && <NotifModal title={state.notif} />}
      <h1>Note Taker</h1>
      {state.data && state.data.length ? (
        <NoteContents
          state={state}
          handleDeleteModal={handleDeleteModal}
          handleEditNoteModal={handleEditNoteModal}
        />
      ) : (
        <p>No Notes Yet</p>
      )}

      <button onClick={handleAddNoteModal}>Add Note</button>
      {formModal && (
        <FormModal
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleCloseModal={handleCloseModal}
          state={state}
        />
      )}
      {confModal && <ConfModal ui={confUi} />}
    </>
  );
};

export default Notes;
