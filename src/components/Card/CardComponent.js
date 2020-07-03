import React from "react"
import { Card } from "react-bootstrap"

import cardImage from "../../images/test.jpg"

const CardComponent = props => {
  return (
    <>
      <Card
        className="mb-4"
        style={{
          height: "240px",
          width: `${props.width}`,
          backgroundColor: `${props.backgroundColor}`,
          borderRadius: "25px",
          position: "relative"
        }}
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          src={cardImage}
          style={{
            borderRadius: "18px",
            width: "91%",
            height: "80%",
            position: "absolute",
            left: "4.5%",
            top: "2%",
            border: "2.72px solid #F4C042"
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              color: "white",
              position: "absolute",
              bottom: "2px",
              left: "15%",
              fontSize: "16px"
            }}
          >
            Title of game{" "}
            <span
              style={{
                fontFamily: "FontAwesome",
                color: `${props.tagColor}`,
                fontSize: "22px",
                display: `${props.displayTag}`
              }}
            >
              &#xf02e;
            </span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  )
}

export default CardComponent
