import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarItems,
  NavbarItem,
  LastItem,
  Rotate,
  NavbarIcon,
} from "../sideNavbar/SideNavbarStyledComponents.jsx";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Coronavirus from "../../../img/coronavirus.png";
import SideNavbar1 from "../../../img/sideNavbar1.png";
import SideNavbar2 from "../../../img/sideNavbar2.png";
import SideNavbar3 from "../../../img/sideNavbar3.png";
import SideNavbar4 from "../../../img/sideNavbar4.png";
import SideNavbar5 from "../../../img/sideNavbar5.png";
import SideNavbar6 from "../../../img/sideNavbar6.png";
import SideNavbar7 from "../../../img/sideNavbar7.png";
import SideNavbar8 from "../../../img/sideNavbar8.png";
import SideNavbar9 from "../../../img/sideNavbar9.png";
const SideNavbar = () => (
  <Container>
    <Navbar>
      <NavbarBrand>
        <Link to="/">
          <Rotate src={Coronavirus} alt="Coronavirus" />
        </Link>
      </NavbarBrand>
      <NavbarItems>
        <NavbarItem>
          <Link to="/tracker2">
            <NavbarIcon src={SideNavbar1} alt="SideNavbar1" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/tracker6">
            <NavbarIcon src={SideNavbar2} alt="SideNavbar2" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/tracker4">
            <NavbarIcon src={SideNavbar3} alt="SideNavbar3" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/tracker5">
            <NavbarIcon src={SideNavbar4} alt="SideNavbar4" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <NavbarIcon
            src={SideNavbar5}
            alt="SideNavbar5"
            onClick={() => console.log("image clicked")}
          />
        </NavbarItem>
        <NavbarItem>
          <Link to="/tracker6">
            <NavbarIcon src={SideNavbar6} alt="SideNavbar6" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/tracker7">
            <NavbarIcon src={SideNavbar7} alt="SideNavbar7" />
          </Link>
        </NavbarItem>
        <NavbarItem>
          <NavbarIcon src={SideNavbar8} alt="SideNavbar8" />
        </NavbarItem>
        <LastItem>
          <NavbarIcon src={SideNavbar9} alt="SideNavbar9" />
        </LastItem>
      </NavbarItems>
    </Navbar>
  </Container>
);

export default SideNavbar;
