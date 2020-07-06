import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck, Col } from "react-bootstrap"

import prev from "../../images/prev.png"
import next from "../../images/next.png"

const MidCardBox = props => {
  return (
    <div className="container">
      <CardDeck style={{ position: "relative" }}>
        <img
          src={prev}
          alt="Previous"
          style={{
            width: "23px",
            height: "38px",
            position: "absolute",
            left: "-50px",
            top: "50%",
            cursor: "pointer"
          }}
        />

        {props.items.map(item => {
          return (
            <Col key={item.id} style={{ padding: "0" }} xs={12} sm={6} md={4} lg={4} xl={2}>
              <CardComponent
                newItem={true}
                playButton={true}
                midCardBox={true}
                cardImage={item.icon}
                cardTitle={item.description}
                alt={item.description}
              />
            </Col>
          )
        })}
        <Col style={{ padding: "0" }} xs={12} sm={6} md={4} lg={4} xl={2}>
          <CardComponent
            midCardBox={true}
            playButton={true}
            tagColor={"#262626"}
            backgroundColor={"#0A0A0A"}
            border={"2.72px solid #F4C042"}
            fontColor={"white"}
            imageHeight={"75%"}
            height={"250px"}
          />
        </Col>
        <img
          className="next"
          src={next}
          alt="next"
          style={{
            width: "23px",
            height: "38px",
            position: "absolute",
            right: "-50px",
            top: "50%",
            cursor: "pointer"
          }}
        />
      </CardDeck>
    </div>
  )
}

export default MidCardBox
