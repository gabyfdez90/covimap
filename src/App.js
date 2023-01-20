import React from "react";
import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
    <Router> 
    <SideNavbar/>
    </Router>
    </div>
  );
}

export default App;
