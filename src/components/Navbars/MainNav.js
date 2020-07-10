import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import "./MainNav.css"

const MainNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="main-nav">
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
  )
}

export default MainNav
