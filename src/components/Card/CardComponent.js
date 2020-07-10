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
    <Card
      className="mb-4"
      style={{
        height: "250px",
        backgroundColor: `${
          props.topCardBox && props.cardTitle === "LIDO"
            ? "yellow"
            : null || props.bottomCardBox
            ? "transparent"
            : "#0A0A0A"
        }`,
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
          width: "94%",
          height: `${props.topCardBox ? "83%" : "75%"}`,
          border: `${
            props.topCardBox && props.cardTitle === "LIDO"
              ? "1px solid #707070"
              : null || props.midCardBox || props.bottomCardBox
              ? "2.72px solid #F4C042"
              : "3.4px solid #808080"
          }`,
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
            visibility: `${
              props.cardTitle === "Lido" || props.cardTitle === "3 Genie Wishes"
                ? "visible"
                : "hidden"
            }`,
            width: "80px"
          }}
        />
      )}

      <Card.Body>
        <Card.Title
          style={{
            width: `${props.midCardBox ? "97%" : "100%"}`,
            fontSize: "16px",
            textAlign: "center",
            fontFamily: "Source Sans Pro",
            margin: "0 -2%", //space for float: right for the span,
            color: `${props.topCardBox && props.cardTitle === "LIDO" ? "black" : "white"}`
          }}
        >
          {props.cardTitle || "Poker"}
          <div
            style={{
              fontFamily: "FontAwesome",
              color: `${props.cardTitle === "Moon Princess" ? "#FFDB45" : "#262626"}`,
              fontSize: "22px",
              display: `${props.midCardBox ? "block" : "none"}`,
              // visibility: `${props.midCardBox ? "visible" : "hidden"}`,    // using display instead
              float: "right",
              position: "absolute",
              bottom: "12%",
              right: "5%"
            }}
          >
            &#xf02e;
          </div>
        </Card.Title>
        <Card.Text
          style={{
            textAlign: "center",
            color: "#F4C042",
            visibility: `${
              props.midCardBox && (props.cardTitle === "Lido" || props.cardTitle === "Carnaval")
                ? "visible"
                : "hidden" && props.bottomCardBox && props.cardTitle === "Blood Suckers"
                ? "visible"
                : "hidden"
            }`
          }}
        >
          {" "}
          € 32,785.35{" "}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardComponent
