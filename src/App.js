import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
      <Router>
        <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      </Router>
  );
}

export default App;