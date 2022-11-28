import React from "react";
import "./App.css";
import AddCounter from "./components/AddCounter";

const App = () => {
  return (
    <div className="App">
      <h1>Hello World! 이제 성공함!</h1>
      <h2>How to you?</h2>
      <AddCounter />
    </div>
  );
};

export default App;
