import React, { useState } from "react";

const AddCounter = () => {
  const [counter, setCounter] = useState(0);

  return <h1>Number is {counter}</h1>;
};

export default AddCounter;
