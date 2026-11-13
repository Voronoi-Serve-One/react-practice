import React, { useContext } from "react";
import { Data } from "../App";

const CompC = () => {
  const { name, age, course } = useContext(Data);
  return (
    <div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{course}</p>
    </div>
  );
};

export default CompC;
