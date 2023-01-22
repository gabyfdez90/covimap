import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracker5 from "./pages/Tracker/tracker5/Tracker5";
import Tracker2 from "./pages/Tracker/tracker2/Tracker2";
import TrackerLayout from "./components/templates/trackerLayout/TrackerLayout";
import TrackerCardsCountries from "./components/molecules/trackerCardsCountries/TrackerCardsCountries";
import Tracker6 from "./pages/Tracker/tracker6/Tracker6";

function App() {
  return (
    <Router>
      <div className="App">
        <Tracker6 />
      </div>
    </Router>
  );
}

export default App;
