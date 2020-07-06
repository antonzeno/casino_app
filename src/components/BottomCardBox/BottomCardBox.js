import React from "react"
import CardComponent from "../Card/CardComponent"
import BigCardComponent from "../Card/BigCardComponent"

import { CardDeck, Col } from "react-bootstrap"
import prev from "../../images/prev.png"
import next from "../../images/next.png"

const BottomCardBox = props => {
  return (
    <>
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
              top: "40%",
              cursor: "pointer"
            }}
          />
          <Col style={{ padding: "0" }} sm={12} md={8} lg={8} xl={4}>
            <BigCardComponent />
          </Col>
          {props.items.slice(0, 4).map(item => {
            return (
              <Col key={item.id} style={{ padding: "0" }} sm={6} md={4} lg={4} xl={2}>
                <CardComponent
                  newItem={true}
                  bottomCardBox={true}
                  cardImage={item.icon}
                  cardTitle={item.description}
                  alt={item.description}
                />
              </Col>
            )
          })}

          <img
            src={next}
            alt="next"
            style={{
              width: "23px",
              height: "38px",
              position: "absolute",
              right: "-50px",
              top: "40%",
              cursor: "pointer"
            }}
          />
        </CardDeck>
      </div>
    </>
  )
}

export default BottomCardBox
