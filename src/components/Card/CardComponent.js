import React from "react"
import { Card } from "react-bootstrap"

import cardImage from "../../images/test.jpg"
import playButton from "../../images/playbutton.png"
import newItem from "../../images/newItem.png"

const CardComponent = props => {
  const addDefaultSrc = e => {
    e.target.src =
      "https://cdn.neonslots.com/content/thumbs/948x712/New_4_screenshots/Pragmatic_Play/3_Genie_Wishes/00.jpg"
  }
  return (
    <>
      <Card
        className="mb-4"
        style={{
          height: `${props.height}`,
          // width: "500px ",
          backgroundColor: `${props.backgroundColor}`,
          borderRadius: "30px",
          cursor: "pointer",
          border: "none"
        }}
      >
        <Card.Img
          onError={addDefaultSrc}
          className="img-fluid"
          variant="top"
          src={props.cardImage || cardImage}
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
            alt={props.alt}
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
            {props.cardTitle || "Poker"}
            <span
              style={{
                fontFamily: "FontAwesome",
                color: `${props.cardTitle === "Moon Princess" ? "Yellow" : "#707070"}`,
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
