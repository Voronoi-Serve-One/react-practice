import React, { useEffect, useState } from "react";

const ExampleThree = () => {
  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem("name");
    return savedName ? JSON.parse(savedName) : "";
  });
  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h1>EXAMPLE</h1>
      <h1>{name}</h1>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleChange}
        value={name}
      />
    </div>
  );
};

export default ExampleThree;
