import React, { useRef } from "react";

const FocusInput = () => {
  const inputElement = useRef(null);
  const handleFocus = () => {
    inputElement.current.focus();
  };
  return (
    <div>
      <input type="text" placeholder="Click the Button" ref={inputElement} />
      <button onClick={() => handleFocus()}>Click to Focus</button>
    </div>
  );
};

export default FocusInput;
