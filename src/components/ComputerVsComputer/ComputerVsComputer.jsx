import React from "react";
import Box from "../Box/Box";
import withGameLogic from "../withGameLogic";

const ComputerVsComputer = ({ state, createCCHandler, winner }) => {
  return (
    <>
      <div className="grid_container">
        {state.map((value) => (
          <>
            <Box onClick={createCCHandler()}>{value}</Box>
          </>
        ))}
      </div>
      <div className="winner_container">{winner}</div>
    </>
  );
};

export default withGameLogic(ComputerVsComputer);
