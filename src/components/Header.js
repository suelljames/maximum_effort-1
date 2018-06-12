import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//import Beard from "./Beard.js";

const Header = props => {
  return (
    <Navbar inverse fluid>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/" style={{ display: "flex" }}>
            Maximum_Effort
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <LinkContainer exact to="/signup">
          <NavItem eventKey={2}>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={3}>Log in</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
