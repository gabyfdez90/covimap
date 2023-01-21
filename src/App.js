import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracker2 from "./pages/Tracker/tracker2/Tracker2";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Tracker2 />
      </div>
    </BrowserRouter>
  );
}

export default App;
