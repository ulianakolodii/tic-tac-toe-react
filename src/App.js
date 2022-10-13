import React, { useState, useEffect } from "react";
import {} from "../src/App.css";
import Button from "./components/Button/Button";
import Box from "./components/Box/Box";

const matchDiagonalLeft = (arr, value = "X") => {
  return arr[0] === value && arr[4] === value && arr[8] === value;
};

const matchDiagonalRight = (arr, value = "X") => {
  return arr[2] === value && arr[4] === value && arr[6] === value;
};

const matchVertical = (arr, value = "X") => {
  return (
    (arr[0] === value && arr[3] === value && arr[6] === value) ||
    (arr[1] === value && arr[4] === value && arr[7] === value) ||
    (arr[2] === value && arr[5] === value && arr[8] === value)
  );
};

const matchHorizontal = (arr, row, value = "X") => {
  return (
    (arr[0] === value && arr[1] === value && arr[2] === value) ||
    (arr[3] === value && arr[4] === value && arr[5] === value) ||
    (arr[6] === value && arr[7] === value && arr[8] === value)
  );
};

const isWinner = (arr, value) =>
  matchHorizontal(arr, value) ||
  matchVertical(arr, value) ||
  matchDiagonalLeft(arr, value) ||
  matchDiagonalRight(arr, value);

function App() {
  const [current, setCurrent] = useState("X");
  const [winner, setWinner] = useState();
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
    const magicFn = (prevState) => {
      const newState = [...prevState];
      newState[index] = current;
      toggleCurrent();
      return newState;
    };
    setState(magicFn);
  };

  useEffect(() => {
    if (isWinner(state, "X")) {
      setWinner("The winner is X.");
    }
    if (isWinner(state, "O")) {
      setWinner("The winner is O.");
    }
  }, [state, setWinner]);

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
      <div className="winner_container">{winner}</div>
    </div>
  );
}

export default App;
