import React from "react";
import "../src/components/atoms/navbar/navbar.css";
import Navbar from "../src/components/atoms/navbar/Navbar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
