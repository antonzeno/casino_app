import React from "react"
import { Card } from "react-bootstrap"
import game from "../../images/game.png"

const BigCardComponent = () => {
  return (
    <Card
      className="mb-4"
      style={{
        height: "250px",
        background: "blue",
        borderRadius: "30px",
        cursor: "pointer",
        border: "none",
        padding: "0 100px",
        display: "relative"
      }}
    >
      <Card.Img
        className="img-fluid"
        variant="top"
        src={game}
        style={{ height: "75%", display: "absolute", width: "200%" }}
      />
      <Card.Body>
        <Card.Title>Jackpot DAY</Card.Title>
      </Card.Body>
    </Card>
  )
}

export default BigCardComponent
