import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  console.log(useState());
  const [name, setName] = useState("Abhilash");
  const [flag, setFlag] = useState(false);
  const [steps, setSteps] = useState(0);

  function changeName() {
    return setFlag(!flag);
    // return setName("Abhilash Jay");
  }

  function increment() {
    setSteps((prevState) => prevState + 1);
    setSteps((prevState) => prevState + 1);
    console.log("Steps Now is: " + steps);
  }

  function decrement() {
    setSteps(steps - 1);
  }
  return (
    <div className="App">
      <div>Hello, {flag ? name : ""}</div>
      <button onClick={changeName}>Change Name</button>
      <hr></hr>
      <button onClick={increment}>+</button>
      <h1>{steps}</h1>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
