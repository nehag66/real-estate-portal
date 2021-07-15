import React, { useState } from "react";

import Footer from "../components/footer";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import logo from "../assets/background.jpeg";
import pic1 from "../assets/house1.jpeg";
import pic2 from "../assets/house2.jpeg";
import pic3 from "../assets/house3.png";
import pic4 from "../assets/house4.jpeg";
import pic5 from "../assets/house5.jpeg";
import pic6 from "../assets/house6.jpeg";
import pic7 from "../assets/house7.jpeg";
import pic8 from "../assets/house8.jpeg";
import pic9 from "../assets/house9.jpeg";
import pic10 from "../assets/house10.jpeg";
import pic11 from "../assets/house11.jpeg";
import pic12 from "../assets/house12.jpeg";
import Realestatetext from "../components/real-estate-text";

const Main = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">real-estate</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/about/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactus/">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div class="centered">TO EACH THEIR HOME!</div>
      </header>
      <div className="text1">New Listings in New Zealand</div>
      <div className="grid">
        <img src={pic1} alt="pic1" />
        <img src={pic2} alt="pic2" />
        <img src={pic3} alt="pic3" />
        <img src={pic4} alt="pic4" />
        <img src={pic5} alt="pic5" />
        <img src={pic6} alt="pic6" />
        <img src={pic7} alt="pic7" />
        <img src={pic8} alt="pic8" />
        <img src={pic9} alt="pic9" />
        <img src={pic10} alt="pic10" />
        <img src={pic11} alt="pic11" />
        <img src={pic12} alt="pic12" />
      </div>
      <Realestatetext />
      <Footer />
    </div>
  );
};

export default Main;
