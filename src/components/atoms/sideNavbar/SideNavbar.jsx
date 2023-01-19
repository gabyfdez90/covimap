import React from 'react';
import { Container, Navbar, NavbarBrand, NavbarItems, NavbarItem } from '../sideNavbar/SideNavbarStyledComponents.jsx';
import { Link } from "react-router-dom";
import Coronavirus from "../../../img/coronavirus.png"
import SideNavbar1 from "../../../img/sideNavbar1.png"
import SideNavbar2 from "../../../img/sideNavbar2.png"
import SideNavbar3 from "../../../img/sideNavbar3.png"
import SideNavbar4 from "../../../img/sideNavbar4.png"
import SideNavbar5 from "../../../img/sideNavbar5.png"
import SideNavbar6 from "../../../img/sideNavbar6.png"
import SideNavbar7 from "../../../img/sideNavbar7.png"
import SideNavbar8 from "../../../img/sideNavbar8.png"
import SideNavbar9 from "../../../img/sideNavbar9.png"
const SideNavbar = () => (
    <Container>
      <Navbar>
        <NavbarBrand>
          <Link to="/">
            <img src={Coronavirus} alt="Coronavirus"/>
          </Link>
        </NavbarBrand>
        <NavbarItems>
          <NavbarItem>
          <img src={SideNavbar1} alt="SideNavbar1"/>
          </NavbarItem>
          <NavbarItem>
          <img src={SideNavbar2} alt="SideNavbar2"/>
          </NavbarItem>
          <NavbarItem>
          <img src={SideNavbar3} alt="SideNavbar3"/>
          </NavbarItem>
          <NavbarItem>
          <img src={SideNavbar4} alt="SideNavbar4"/>
          </NavbarItem>
          <NavbarItem>
          <img src={SideNavbar5} alt="SideNavbar5"/>
          </NavbarItem>
          <NavbarItem>
          <img src={SideNavbar6} alt="#1F1C6D"/>
          </NavbarItem>
          <NavbarItem>
          <img src={SideNavbar7} alt="SideNavbar7"/>
          </NavbarItem>
          <NavbarItem>
          <img src={SideNavbar8} alt="SideNavbar8"/>
          </NavbarItem>
          <NavbarItem>
          <img src={SideNavbar9} alt="SideNavbar9"/>
          </NavbarItem>
        </NavbarItems>
      </Navbar>
    </Container>
  );
  
  export default SideNavbar;

  