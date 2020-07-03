import React from "react"

import { Form, FormControl, Nav, Navbar } from "react-bootstrap"
import "./SearchNav.css"

const SearchNav = props => {
  return (
    <>
      <Navbar style={{ height: "62px", backgroundColor: "#333333" }}>
        <div className="container">
          <Navbar.Brand
            href="#home"
            style={{ fontSize: "30px", color: "gray", position: "relative" }}
          >
            <img src={props.logo} alt="icon"></img>
            {props.diamond && (
              <img
                src={props.diamond}
                alt="diamond"
                style={{ position: "absolute", top: "38px", left: "45px" }}
              />
            )}

            {props.name}
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="&#xF002;"
              className="search-text mr-sm-2"
              style={{
                width: "204px",
                padding: "17px",
                fontFamily: "FontAwesome"
              }}
            />
          </Form>
        </div>
      </Navbar>
    </>
  )
}

export default SearchNav
