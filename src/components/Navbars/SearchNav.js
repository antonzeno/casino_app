import React from "react"
import { Form, FormControl, Nav, Navbar } from "react-bootstrap"

import diamond from "../../images/diamond.png"
import bigStar from "../../images/star1.png"
import mediumStar from "../../images/star2.png"
import smallStar from "../../images/star3.png"
import "./SearchNav.css"

const SearchNav = props => {
  return (
    <>
      <Navbar className="search-navbar">
        <div className="container">
          <Navbar.Brand className="search-navbar-brand" href="#home">
            <img src={props.logo} alt="logo"></img>
            {props.showDiamond && <img src={diamond} alt="diamond" className="diamond-icon" />}

            {props.showStars && (
              <>
                <img src={bigStar} alt="Star" className="big-star" />
                <img src={mediumStar} alt="Star" className="medium-star" />
                <img src={smallStar} alt="Star" className="small-star" />
              </>
            )}

            <span className="search-nav-name">{props.name}</span>
          </Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <FormControl type="text" placeholder="&#xF002;" className="search-text mr-sm-2" />
          </Form>
        </div>
      </Navbar>
    </>
  )
}

export default SearchNav
