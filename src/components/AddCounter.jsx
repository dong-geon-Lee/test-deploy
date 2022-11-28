import React, { useState } from "react";

const AddCounter = () => {
  const [counter, setCounter] = useState(0);

  const handler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <label>Number is </label>
      <button onClick={handler}>
        <h3>버튼</h3>
      </button>
      <h1>{counter}</h1>
    </div>
  );
};

export default AddCounter;
