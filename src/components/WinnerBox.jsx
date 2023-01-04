import React from "react";
import withGameLogic from "./withGameLogic";

const WinnerBox = ({ winner }) => {
  console.log(winner, "winner");
  return <div className="winner_container">{winner}</div>;
};

export default withGameLogic(WinnerBox);
