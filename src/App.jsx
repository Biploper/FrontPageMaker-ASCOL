import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Generator from "./pages/Generator";


const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generator/>} />

      </Routes>
    
  );
};

export default App;
