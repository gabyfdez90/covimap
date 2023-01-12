import "../navbar/navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../../img/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  return (
    <div className="container">
      <div>
        <img src={Logo} className="Logo" />
      </div>
      <div>
        <nav>
          <NavLink to="/home" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Home
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  1 link
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  2 link
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  3 link
                </a>
              </li>
            </ul>
          </NavLink>
          <NavLink to="/preventión">
            <a>Prevention</a>
          </NavLink>
          <NavLink to="/Quarentine">
            <a>Quarentine</a>
          </NavLink>
          <NavLink to="/Pages" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Pages
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  1 link
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  2 link
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  3 link
                </a>
              </li>
            </ul>
          </NavLink>
          <NavLink to="/abaut">
            <a>Abaut</a>
          </NavLink>
          <NavLink to="/help">
            <a>Help</a>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
