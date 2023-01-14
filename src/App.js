import React from "react";
import "../src/components/atoms/navbar/navbar.css";
import Navbar from "../src/components/atoms/navbar/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandingContent1 from "./components/molecules/landingContent1/LandingContent1";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <LandingContent1 />
      </Router>
    </div>
  );
}

export default App;
