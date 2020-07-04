import React from "react"
import { Card } from "react-bootstrap"

import cardImage from "../../images/test.jpg"

const CardComponent = props => {
  return (
    <>
      <Card
        className="mb-4"
        style={{
          height: `${props.height}`,
          // width: `${props.width}`,
          backgroundColor: `${props.backgroundColor}`,
          borderRadius: "30px",
          border: "none"
          // position: "relative"
        }}
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          src={cardImage}
          style={{
            borderRadius: "23px",
            width: "93%",
            height: `${props.imageHeight}`,
            // position: "absolute",
            // left: "4.5%",
            // top: "2%",
            border: `${props.border}`,
            // margin: "6px 6px -9px 6px"
            margin: "5px auto -15px auto"
          }}
        />
        <Card.Body>
          <Card.Title
            style={{
              color: "white",
              // position: "absolute",
              // bottom: "2px",
              // left: "15%",
              fontSize: "16px",
              textAlign: "center"
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
