import React from "react"
import { Card } from "react-bootstrap"

import cardImage from "../../images/test.jpg"

const CardComponent = () => {
  return (
    <>
      <Card
        className="mb-4"
        style={{
          height: "250px",
          backgroundColor: "#0A0A0A",
          borderRadius: "25px",
          position: "relative"
        }}
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          src={cardImage}
          style={{
            borderRadius: "15px",
            width: "91%",
            height: "80%",
            position: "absolute",
            left: "4.5%",
            top: "2%",
            border: "2px solid #F4C042"
          }}
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardComponent
