import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const MainNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{
        borderTop: "1px solid  #302e2e",
        boxShadow: "inset 0 1px 0 #3e3e3e",
        backgroundColor: "#333333",
      }}
    >
      <Navbar.Brand href="#">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link className="text-white" href="#">
            SPORT
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            LIVEBETTING
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            CASINO
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            CASINO LIVE
          </Nav.Link>
          <Nav.Link className="text-white" href="#">
            PROMOTIONS
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
