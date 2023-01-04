import React from "react";
import Box from "../Box/Box";
import withGameLogic from "../withGameLogic";

const PlayerVsPlayer = ({ state, createPPHandler, winner }) => {
  return (
    <>
      <div className="grid_container">
        {state.map((value, index) => (
          <>
            <Box onClick={createPPHandler(index)}>{value}</Box>
          </>
        ))}
      </div>
      <div className="winner_container">{winner}</div>
    </>
  );
};

export default withGameLogic(PlayerVsPlayer);
