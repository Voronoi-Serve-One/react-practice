import React, { useEffect } from "react";

const BasicEffect = () => {
  useEffect(() => {
    console.log("USE EFFECT EVERY RENDER");
  });
  return (
    <div>
      <h1>Check Console</h1>
    </div>
  );
};

export default BasicEffect;
