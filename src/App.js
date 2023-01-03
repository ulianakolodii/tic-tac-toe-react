import React, { useState, useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
// import { PlayerVsComputer } from "./routes";
// import { PlayerVsPlayer } from "./routes";
// import { ComputerVsComputer } from "./routes";
import {} from "../src/App.css";
import Button from "./components/Button/Button";
import Box from "./components/Box/Box";
import { useCallback } from "react";
const getRandomNumberTo = (to = 8) => Math.floor(Math.random() * to + 1) - 1;

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

const matchHorizontal = (arr, value = "X") => {
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

  // const toggleCurrent = () =>
  //   setCurrent((prevCurrent) => (prevCurrent === "X" ? "O" : "X"));

  // const createPPHandler = (index) => () => {
  //   setState((prevState) => {
  //     if (winner || !state.includes(undefined)) {
  //       return prevState;
  //     }
  //     const newState = [...prevState];
  //     newState[index] = current;
  //     toggleCurrent();
  //     return newState;
  //   });
  // };

  // const createCCHandler = () => () => {
  //   setState((prevState) => {
  //     const newState = [...prevState];
  //     const availableBoxes = newState
  //       .map((value, index) => ({ value, index }))
  //       .filter(({ value }) => value === undefined);
  //     if (winner || !availableBoxes.length) {
  //       return prevState;
  //     }
  //     const randomIndex = getRandomNumberTo(availableBoxes.length - 1);
  //     const superIndex = availableBoxes[randomIndex].index;
  //     newState[superIndex] = current;
  //     toggleCurrent();
  //     return newState;
  //   });
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     createCCHandler()();
  //   }, 500);
  //   return () => clearInterval(interval);
  // }, [createCCHandler]);

  const createPCHandler = useCallback(
    (index) => () => {
      setState((prevState) => {
        const newState = [...prevState];
        newState[index] = "X";
        const availableBoxes = newState
          .map((value, index) => ({ value, index }))
          .filter(({ value }) => value === undefined);
        if (winner || !availableBoxes.length) {
          return prevState;
        }
        const randomIndex = getRandomNumberTo(availableBoxes.length - 1);
        const superIndex = availableBoxes[randomIndex].index;
        newState[superIndex] = "O";
        return newState;
      });
    },
    [winner]
  );

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
      {/* <Routes>
        <Route path="/" element={<PlayerVsComputer />} />
        <Route path="/" element={<PlayerVsPlayer />} />
        <Route path="/" element={<ComputerVsComputer />} />
      </Routes> */}
      <div className="buttons_container">
        <Button>Computer VS Computer</Button>
        <Button>Player VS Computer</Button>
        <Button>Player VS Player</Button>
      </div>
      <div className="grid_container">
        {state.map((value, index) => (
          <>
            {/* <Box onClick={createPPHandler(index)}>{value}</Box>
            <Box onClick={createCCHandler()}>{value}</Box> */}
            <Box onClick={createPCHandler(index)}>{value}</Box>
          </>
        ))}
      </div>
      <div className="winner_container">{winner}</div>
    </div>
  );
}

export default App;
