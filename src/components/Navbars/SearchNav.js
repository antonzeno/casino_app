import React from "react"

import { Form, FormControl, Nav, Navbar } from "react-bootstrap"
import "./SearchNav.css"

import diamond from "../../images/diamond.png"
import bigStar from "../../images/star1.png"
import mediumStar from "../../images/star2.png"
import smallStar from "../../images/star3.png"

const SearchNav = props => {
  return (
    <>
      <Navbar style={{ height: "62px", backgroundColor: "#333333" }}>
        <div className="container">
          <Navbar.Brand
            href="#home"
            style={{ fontSize: "30px", color: "#A7A6A4", position: "relative" }}
          >
            <img src={props.logo} alt="logo"></img>
            {props.showDiamond && (
              <img
                src={diamond}
                alt="diamond"
                style={{ position: "absolute", top: "38px", left: "45px" }}
              />
            )}

            {props.showStars && (
              <>
                <img
                  src={bigStar}
                  alt="Star"
                  style={{ position: "absolute", top: "-3px", left: "-15px" }}
                />
                <img
                  src={mediumStar}
                  alt="Star"
                  style={{ position: "absolute", top: "20px", left: "-20px" }}
                />
                <img
                  src={smallStar}
                  alt="Star"
                  style={{ position: "absolute", top: "40px", left: "-14px" }}
                />
              </>
            )}

            <span style={{ fontFamily: "Oswald, sans-serif" }}>{props.name}</span>
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl
              type="text"
              placeholder="&#xF002;"
              className="search-text mr-sm-2"
              style={{
                width: "160px",
                padding: "17px",
                fontFamily: "FontAwesome, Open Sans, sans-serif"
              }}
            />
          </Form>
        </div>
      </Navbar>
    </>
  )
}

export default SearchNav
