import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopCountry from "./components/atoms/TopCountry/TopCountry";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopCountry />
      </Router>
    </div>
  );
}

export default App;
