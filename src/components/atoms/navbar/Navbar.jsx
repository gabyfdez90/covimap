import "../navbar/navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../img/logo.png";

function Navbar() {
  return (
    <div className="container">
      <div>
        <img src={Logo} className="logo" />
      </div>
      <div>
        <nav>
          <ul className="nav">
            <NavLink to="/home" claseName>
              <li>Home</li>
            </NavLink>
            <NavLink to="/prevention">
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
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
