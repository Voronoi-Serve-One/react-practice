import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default Counter;
