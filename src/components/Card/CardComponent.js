import React from "react"
import { Card } from "react-bootstrap"

import cardImage from "../../images/test.jpg"
import playButton from "../../images/playbutton.png"
import newItem from "../../images/newItem.png"

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
          cursor: "pointer",
          border: "none"
        }}
      >
        <Card.Img
          className="img-fluid"
          variant="top"
          src={cardImage}
          style={{
            position: "relative",
            borderRadius: "23px",
            width: "93%",
            height: `${props.imageHeight}`,
            border: `${props.border}`,
            margin: "5px auto -15px auto"
          }}
        />

        {props.playButton && (
          <Card.Img
            className="img-fluid"
            src={playButton}
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "65px",
              right: "0",
              margin: "auto",
              width: "85px"
            }}
          />
        )}

        {props.newItem && (
          <Card.Img
            className="img-fluid"
            src={newItem}
            style={{
              position: "absolute",
              top: "-10px",
              right: "-20px",

              width: "80px"
            }}
          />
        )}

        <Card.Body>
          <Card.Title
            style={{
              fontSize: "16px",
              textAlign: "center",
              fontFamily: "Source Sans Pro",
              margin: "0 3%", //space for float: right for the span,
              color: `${props.fontColor}`
            }}
          >
            Ray of light{" "}
            <span
              style={{
                fontFamily: "FontAwesome",
                color: `${props.tagColor}`,
                fontSize: "22px",
                display: `${props.displayTag}`,
                float: "right"
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
