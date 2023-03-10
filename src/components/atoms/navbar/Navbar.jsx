import "../navbar/navbar.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../../../img/logo.png";
/*import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";*/
import ButtonDownload from "../buttonDownload/ButtonDownload";

function Navbar() {
  return (
    <div className="container">
      <nav>
        <img src={Logo} className="logo" />

        <div className="nav-list  ">
          <NavLink to="/home" class="nav-item  dropdown ">
            <a
              class="nav-link dropdown-toggle "
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              Home
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Home One
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Home Two
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Home Three
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Home Four
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Home Five
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Home Six
                </a>
              </li>
            </ul>
          </NavLink>
          <NavLink to="/preventión" class="nav-item ">
            <a>Prevention</a>
          </NavLink>
          <NavLink to="/Quarentine">
            <a>Qurantine</a>
          </NavLink>
          <NavLink to="/Pages" class="nav-item  dropdown">
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
                  Page One
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Page Two
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Page Three
                </a>
              </li>
            </ul>
          </NavLink>
          <NavLink to="/abaut" class="nav-item">
            <a>About</a>
          </NavLink>
          <NavLink to="/help" class="nav-item">
            <a>Help</a>
          </NavLink>
          <Link to="/tracker6" class="nav-item">
            <ButtonDownload
              className="btnOne"
              action="/tracker6"
              text="Tracker"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
