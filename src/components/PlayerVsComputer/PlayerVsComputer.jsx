import React from "react";
import Box from "../Box/Box";
import withGameLogic from "../withGameLogic";

const PlayerVsComputer = ({ state, createPCHandler, winner}) => {
  return (
    <>
      <div className="grid_container">
        {state.map((value, index) => (
          <>
            <Box onClick={createPCHandler(index)}>{value}</Box>
          </>
        ))}
      </div>
      <div className="winner_container">{winner}</div>
    </>
  );
};

export default withGameLogic(PlayerVsComputer);
