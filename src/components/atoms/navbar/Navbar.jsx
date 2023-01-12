import "../navbar/navbar.css";
import React from "react";
//import { NavLink } from "react-router-dom";
import Logo from "../../../img/logo.png";

function Navbar() {
  return (
    <div class="container">
      <div>
        <img src={Logo} class="logo" />
      </div>
      <div>
        <nav>
          <a href="#home">Home</a>
          <a href="#prevention">Prevention</a>
          <a href="#quarentine">Quarentine</a>
          <a href="#pages">Pages</a>
          <a href="#about">About</a>
          <a href="#help">Help</a>
          <button>Tracker</button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
/*<div className="container">
      <div>
        <img src={Logo} className="Logo" />
      </div>
      <div>
        <ul>
          <NavLink to="/home">
            <li>Home</li>
          </NavLink>
          <NavLink to="/preventión">
            <li>Prevention</li>
          </NavLink>
          <NavLink to="/Quarentine">
            <li>Quarentine</li>
          </NavLink>
          <NavLink to="/Pages">
            <li>Pages</li>
          </NavLink>
          <NavLink to="/abaut">
            <li>Abaut</li>
          </NavLink>
          <NavLink to="/help">
            <li>Help</li>
          </NavLink>
        </ul>
      </div>
    </div>*/
