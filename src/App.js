import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideNavbar from "./components/atoms/sideNavbar/SideNavbar"
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter> 
    <div className="App">
      <SideNavbar/>
    </div>
    </BrowserRouter>
  );
}

export default App;
