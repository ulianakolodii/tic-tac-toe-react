import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {} from "../src/App.css";
import Button from "./components/Button/Button";
import PlayerVsComputer from "./components/PlayerVsComputer/PlayerVsComputer";
import PlayerVsPlayer from "./components/PlayerVsPlayer/PlayerVsPlayer";
import ComputerVsComputer from "./components/ComputerVsComputer/ComputerVsComputer";
// import WinnerBox from "./components/WinnerBox";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="buttons_container">
          <Link to="/cvc"><Button>Computer VS Computer</Button></Link>
          <Link to="/pvc"><Button>Player VS Computer</Button></Link>
          <Link to="/pvp"><Button>Player VS Player</Button></Link>
        </div>
        <Routes>
          <Route path="/cvc" element={<ComputerVsComputer />} />
          <Route path="/pvc" element={<PlayerVsComputer />} />
          <Route path="/pvp" element={<PlayerVsPlayer />} />
        </Routes>
        {/* <WinnerBox /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
