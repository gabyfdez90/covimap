import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracker2 from "./pages/Tracker/tracker2/Tracker2";
import Tracker6 from "./pages/Tracker/tracker6/Tracker6";

function App() {
  return (
    <Router>
      <div className="App">
        <Tracker2 />
      </div>
    </Router>
  );
}

export default App;
