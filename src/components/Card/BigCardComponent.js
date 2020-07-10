import React from "react"
import { Card } from "react-bootstrap"
import game from "../../images/game.png"
import gameLogo from "../../images/image.png"
import "./BigCardComponent.css"

const BigCardComponent = () => {
  return (
    <Card className="mb-4 big-card">
      <Card.Img variant="top" src={game} className="big-card-image" />

      <img src={gameLogo} alt="Logo" className="logo-image" />
      <Card.Body>
        <Card.Title className="big-card-title">
          <span>Daily JACKPOT</span>
        </Card.Title>

        <Card.Text className="big-card-right-text">
          <span id="payment-text">MUST PAY WITHIN: </span>

          <span id="time-left"> 12:32:07</span>
        </Card.Text>

        <Card.Text className="big-card-centered-text">
          <span>€ </span> <span id="jackpot-amount">5,646.88</span>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BigCardComponent
