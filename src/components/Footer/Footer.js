import React from "react"
import { FormControl, Form, Button, Navbar, InputGroup, Nav } from "react-bootstrap"
import UkFlag from "../../images/uk.png"

const Footer = () => {
  return (
    <div>
      <Navbar className=" justify-content-between " style={{ backgroundColor: "#333333" }}>
        <div className="container">
          <Form inline>
            <InputGroup style={{ width: "271px" }} className="mb-1">
              <FormControl
                className="text-css"
                style={{
                  padding: "13px",
                  borderRadius: "2px",
                  fontFamily: "FontAwesome"
                }}
                placeholder="&#xf007;    Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <FormControl
                className="text-css"
                style={{
                  padding: "13px",
                  borderRadius: "2px",
                  fontFamily: "FontAwesome"
                }}
                placeholder="&#xf084;   Password"
                aria-label="Password"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <a
              className="mb-1"
              href="#help"
              style={{
                display: "block",
                width: "27px",
                height: "26px",
                border: "1px solid black",
                color: "white",
                margin: "0 10px",
                textAlign: "center"
              }}
            >
              ?
            </a>
            <div className="mb-1">
              <Button
                style={{
                  width: "81px",
                  height: "26px",
                  marginLeft: "5px",
                  padding: "5px",
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "2px",
                  fontWeight: "bold",
                  paddingLeft: "13px"
                }}
                variant="warning"
              >
                LOGIN
              </Button>
              <Button
                style={{
                  width: "107px",
                  height: "26px",
                  marginLeft: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: "2px",
                  fontWeight: "bold"
                }}
                variant="warning"
              >
                REGISTER
              </Button>
            </div>
          </Form>

          <Nav className="mr-auto"></Nav>
          <div style={{}}>
            <i className="fa fa-facebook-square facebook-icon"></i>
            <i className="fa fa-instagram instagram-icon"></i>
          </div>
          <img src={UkFlag} alt="UK" />
          <select
            name="Eng"
            id="Eng"
            style={{
              backgroundColor: "transparent",
              color: "#AEAFB4",
              border: "none",
              outline: "none",
              display: "inline-block"
            }}
          >
            <option value="uk">Eng</option>
          </select>
        </div>
      </Navbar>
    </div>
  )
}

export default Footer
