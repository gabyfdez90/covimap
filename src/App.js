import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracker2 from "./pages/Tracker/tracker2/Tracker2";
import Tracker6 from "./pages/Tracker/tracker6/Tracker6";
import Tracker3 from "./pages/Tracker/tracker3/Tracker3";

function App() {
  return (
    <Router>
      <div className="App">
        <Tracker3 />
      </div>
    </Router>
  );
}

export default App;
