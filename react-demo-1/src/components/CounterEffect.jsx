import React, { useEffect, useState } from "react";

const CounterEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Website Counter State: ${count}`;
  }, [count]);
  return (
    <div>
      <h1>Title Changes Through useEffect</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export default CounterEffect;
