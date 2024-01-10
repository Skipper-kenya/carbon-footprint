import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import "./styles/body.css";
import Home from "./pages/Home";
import GlobalStates from "./context/GlobalStates";

import CalculateFootprints from "./pages/CalculateFootprints";
import CompareFootprints from "./pages/CompareFootprints";
function App() {
//footprint emitter
  return (
    <div className="body-wrapper">
      <GlobalStates>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="calculate" element={<CalculateFootprints />} />
          <Route path="compare" element={<CompareFootprints />} />
        </Routes>
      </GlobalStates>
    </div>
  );
}

export default App;
