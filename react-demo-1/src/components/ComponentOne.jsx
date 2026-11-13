import React from "react";

const ComponentOne = ({ handleIncrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>Component One Increment</button>
    </div>
  );
};

export default ComponentOne;
