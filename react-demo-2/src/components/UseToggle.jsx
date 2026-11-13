import React, { useState } from "react";

const UseToggle = (initialState = false) => {
  const [toggle, setToggle] = useState(initialState);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return [toggle, handleToggle];
};

export default UseToggle;
