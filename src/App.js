import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SideNavbar from "./components/atoms/sideNavbar/SideNavbar";
import Tracker6 from "./pages/Tracker/tracker6/Tracker6";
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./applications/Router";
function App() {
  return (
    <div className="App">
      <Router>
      <Home />
      <Routes/>
      </Router>
    </div>
  );
}

export default App;
