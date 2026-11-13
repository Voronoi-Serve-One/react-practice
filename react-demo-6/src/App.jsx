import React, { useReducer, useState } from "react";

import Banner from "./components/Banner";
import States from "./components/States";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      {/* <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>Decrement</button> */}
      <States />
    </div>
  );
};

export default App;
