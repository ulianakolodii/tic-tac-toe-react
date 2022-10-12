import React, { useState } from "react";
import {} from "../src/App.css";
import Button from "./components/Button/Button";
import Box from "./components/Box/Box";

function App() {
  const [current, setCurrent] = useState("X");
  const [state, setState] = useState([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);

  const toggleCurrent = () =>
    setCurrent((prevCurrent) => (prevCurrent === "X" ? "O" : "X"));

  const createHandler = (index) => () => {
    setState((prevState) => {
      const newState = [...prevState];
      newState[index] = current;
      toggleCurrent();
      return newState;
    });
  };
  return (
    <div className="App">
      <div className="buttons_container">
        <Button>Computer VS Computer</Button>
        <Button>Player VS Computer</Button>
        <Button>Player VS Player</Button>
      </div>
      <div className="grid_container">
        {state.map((value, index) => (
          <Box onClick={createHandler(index)}>{value}</Box>
        ))}
      </div>
      <div id="winner_box"></div>
    </div>
  );
}

export default App;
