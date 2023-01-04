import React from "react";
import { useState, useEffect, useCallback } from "react";

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

const withGameLogic = (WrappedComponent) => {
  return () => {
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
    const [winner, setWinner] = useState();

    const toggleCurrent = () =>
      setCurrent((prevCurrent) => (prevCurrent === "X" ? "O" : "X"));

    const createPPHandler = (index) => () => {
      setState((prevState) => {
        if (winner || !state.includes(undefined)) {
          return prevState;
        }
        const newState = [...prevState];
        newState[index] = current;
        toggleCurrent();
        return newState;
      });
    };

    const createCCHandler = () => () => {
      setState((prevState) => {
        const newState = [...prevState];
        const availableBoxes = newState
          .map((value, index) => ({ value, index }))
          .filter(({ value }) => value === undefined);
        if (winner || !availableBoxes.length) {
          return prevState;
        }
        const randomIndex = getRandomNumberTo(availableBoxes.length - 1);
        const superIndex = availableBoxes[randomIndex].index;
        newState[superIndex] = current;
        toggleCurrent();
        return newState;
      });
    };

    useEffect(() => {
      const interval = setInterval(() => {
        createCCHandler()();
      }, 500);
      return () => clearInterval(interval);
    }, [createCCHandler]);

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
      <WrappedComponent
        getRandomNumberTo={getRandomNumberTo}
        state={state}
        createPPHandler={createPPHandler}
        createPCHandler={createPCHandler}
        createCCHandler={createCCHandler}
        winner={winner}
      />
    );
  };
};

export default withGameLogic;
