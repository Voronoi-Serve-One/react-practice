import React from "react";

const ComponentTwo = ({ handleIncrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>Component two Increment</button>
    </div>
  );
};

export default ComponentTwo;
