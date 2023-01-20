import React from "react";
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideNavbar from "./components/atoms/sideNavbar/SideNavbar";

function App() {
  return (
    <div className="App">
    <Router> 
    <SideNavbar/>
      <Routes>

      </Routes>
    </Router>
    </div>
  );
}

export default App;
