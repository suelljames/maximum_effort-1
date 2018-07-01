import React from "react";
import { Navbar, NavItem, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Appcss from "./app.css";

const Header = props => {
  return (
    <Navbar
      inverse
      style={{
        background: "#7F7E6E"
      }}
    >
      <Navbar.Header>
        <Navbar.Brand>
          {/* Changed app name from "Maximum_effort" to "Travocal" and also changed  text color from "Blue" to "Blacl" */}
          <a href="/" style={{ display: "flex", color: "black" }}>
            Travocal
          </a>
          {/* Added Image Logo and linked Logo to Homepage  */}
          <a href="/">
            <img
              src="http://www.mauya.info/wp-content/uploads/2016/04/33021717-travel1.jpg"
              style={{
                height: "50px",
                width: "100px",
                position: "relative",
                right: "120px",
                top: "-35px",
                border: "100px"
              }}
            />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav
        pullRight
        style={{
          background: "Black"
        }}
      >
        <LinkContainer to="/about">
          <NavItem eventKey={1}>About</NavItem>
        </LinkContainer>
        <LinkContainer exact to="/signup">
          <NavItem eventKey={1}>Sign Up</NavItem>
        </LinkContainer>
        <LinkContainer to="/login">
          <NavItem eventKey={2}>Log in</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
};

export default Header;
