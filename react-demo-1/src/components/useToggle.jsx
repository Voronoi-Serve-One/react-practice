import React, { useState } from "react";

const useToggle = (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);
  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return [toggle, handleToggle];
};

export default useToggle;
