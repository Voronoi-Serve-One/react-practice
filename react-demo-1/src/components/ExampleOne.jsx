import React, { useState } from "react";

const ExampleOne = () => {
  const [counter, setCounter] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });
  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Example One</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ExampleOne;
