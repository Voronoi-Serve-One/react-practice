import React from "react";

const Form = ({ handleSubmit, handleChange, state, btn, modetype }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e, modetype)}>
      <label htmlFor="">Title</label>
      <br />
      <input
        onChange={handleChange}
        value={state.title}
        name="title"
        type="text"
        placeholder="Title..."
      />
      <br />
      <label htmlFor="">Note</label>
      <br />
      <textarea
        onChange={handleChange}
        value={state.content}
        name="content"
        type="text"
        placeholder="Note here..."
      />
      <br />
      <button>{btn}</button>
    </form>
  );
};

export default Form;
