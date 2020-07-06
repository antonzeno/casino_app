import React from "react"
import { Card } from "react-bootstrap"
import game from "../../images/game.png"
import gameLogo from "../../images/image.png"

const BigCardComponent = () => {
  return (
    <Card
      className="mb-4"
      style={{
        height: "250px",
        background: "transparent",
        borderRadius: "30px",
        cursor: "pointer",
        border: "none",
        padding: "0 100px",
        position: "relative"
      }}
    >
      <Card.Img
        variant="top"
        src={game}
        style={{
          height: "75%",
          position: "absolute",
          width: "100%",
          left: "0",
          border: "3px solid #F4C042",
          borderRadius: "20px",
          margin: "5px auto -15px auto"
        }}
      />

      <img
        src={gameLogo}
        alt="Logo"
        style={{
          position: "absolute",
          top: "-20px",
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
          border: "2px solid #F5BE47",
          borderRadius: "15px"
        }}
      />
      <Card.Body>
        <Card.Title
          style={{
            position: "absolute",
            top: "80%",
            left: "5%",
            fontSize: "16px",
            color: "white",
            fontFamily: "Source Sans Pro, sans-serif"
          }}
        >
          <span>Daily JACKPOT</span>{" "}
        </Card.Title>

        <Card.Text
          style={{
            position: "absolute",
            top: "79%",
            right: "5%",
            fontSize: "16px",
            color: "white",
            fontFamily: "Source Sans Pro, sans-serif"
          }}
        >
          <span style={{ fontSize: "9px" }}>MUST PAY WITHIN: </span>

          <span style={{ color: "#B7BC11" }}> 12:32:07</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BigCardComponent
