// import React from "react";
// import { useState, useEffect } from "react";
// import Box from "../Box/Box";
// import withGameLogic from "../withGameLogic";

// const PlayerVsPlayer = () => {
//   const [current, setCurrent] = useState("X");
//   const [winner, setWinner] = useState();
//   const [state, setState] = useState([
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//     undefined,
//   ]);
//   const toggleCurrent = () =>
//     setCurrent((prevCurrent) => (prevCurrent === "X" ? "O" : "X"));

//   const createPPHandler = (index) => () => {
//     setState((prevState) => {
//       if (winner || !state.includes(undefined)) {
//         return prevState;
//       }
//       const newState = [...prevState];
//       newState[index] = current;
//       toggleCurrent();
//       return newState;
//     });
//   };
//   return <Box onClick={createPPHandler(index)}>{value}</Box>;
// };

// export default withGameLogic(PlayerVsPlayer);
