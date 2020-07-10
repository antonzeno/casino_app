import React from "react"
import { Card } from "react-bootstrap"

import cardImage from "../../images/test.jpg"
import playButton from "../../images/playbutton.png"
import newItem from "../../images/newItem.png"
import "./CardComponent.css"

const CardComponent = props => {
  const addDefaultSrc = e => {
    e.target.src =
      "https://cdn.neonslots.com/content/thumbs/948x712/New_4_screenshots/Pragmatic_Play/3_Genie_Wishes/00.jpg"
  }

  return (
    <Card
      className="mb-4 card-component"
      style={{
        backgroundColor: `${
          props.topCardBox && props.cardTitle === "LIDO"
            ? "yellow"
            : null || props.bottomCardBox
            ? "transparent"
            : "#0A0A0A"
        }`
      }}
    >
      <Card.Img
        onError={addDefaultSrc}
        className="img-fluid card-image"
        variant="top"
        src={props.cardImage || cardImage}
        style={{
          height: `${props.topCardBox ? "83%" : "75%"}`,
          border: `${
            props.topCardBox && props.cardTitle === "LIDO"
              ? "1px solid #707070"
              : null || props.midCardBox || props.bottomCardBox
              ? "2.72px solid #F4C042"
              : "3.4px solid #808080"
          }`
        }}
      />

      {props.playButton && <Card.Img className="img-fluid play-button" src={playButton} />}

      {props.newItem && (
        <Card.Img
          alt={props.alt}
          className="img-fluid new-item"
          src={newItem}
          style={{
            visibility: `${
              props.cardTitle === "Lido" || props.cardTitle === "3 Genie Wishes"
                ? "visible"
                : "hidden"
            }`
          }}
        />
      )}

      <Card.Body>
        <Card.Title
          className="card-title"
          style={{
            width: `${props.midCardBox ? "97%" : "100%"}`,
            color: `${props.topCardBox && props.cardTitle === "LIDO" ? "black" : "white"}`
          }}
        >
          {props.cardTitle || "Poker"}
          <div
            className="save-tag"
            style={{
              color: `${props.cardTitle === "Moon Princess" ? "#FFDB45" : "#262626"}`,
              display: `${props.midCardBox ? "block" : "none"}`
            }}
          >
            &#xf02e;
          </div>
        </Card.Title>
        <Card.Text
          clasName="card-text"
          style={{
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
