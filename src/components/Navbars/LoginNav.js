import React from "react"
import { FormControl, Form, Button, Navbar, InputGroup, Nav } from "react-bootstrap"
import UkFlag from "../../images/uk.png"

import "./LoginNav.css"

const LoginNav = () => {
  return (
    <Navbar className="justify-content-between login-nav" style={{ backgroundColor: "#333333" }}>
      <Form inline>
        <InputGroup style={{ width: "271px" }} className="mb-1">
          <FormControl
            className="text-css"
            placeholder="&#xf007;    Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <FormControl
            className="text-css"
            placeholder="&#xf084;   Password"
            aria-label="Password"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <a className="mb-1 help-link" href="#help">
          ?
        </a>

        <div className="mb-1">
          <Button className="login-button" variant="warning">
            LOGIN
          </Button>
          <Button className="register-button" variant="warning">
            REGISTER
          </Button>
        </div>
      </Form>

      <Nav className="mr-auto"></Nav>
      <div className="mb-1">
        <i className="fa fa-facebook-square facebook-icon"></i>
        <i className="fa fa-instagram instagram-icon"></i>
      </div>

      <img src={UkFlag} alt="UK" className="mb-1" />
      <select className="mb-1" name="Eng" id="eng">
        <option value="uk">Eng</option>
      </select>
    </Navbar>
  )
}

export default LoginNav
