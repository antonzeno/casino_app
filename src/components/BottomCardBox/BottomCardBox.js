import React, { useState } from "react"
import CardComponent from "../Card/CardComponent"
import BigCardComponent from "../Card/BigCardComponent"

import { CardDeck, Col } from "react-bootstrap"
import prev from "../../images/prev.png"
import next from "../../images/next.png"

const BottomCardBox = props => {
  let [firstIndex, setFirstIndex] = useState(6)
  let [lastIndex, setLastIndex] = useState(10)

  const handleNextGames = e => {
    setFirstIndex((firstIndex += 4))
    setLastIndex((firstIndex += 4))
  }

  const handlePrevGames = e => {
    setFirstIndex((firstIndex -= 4))
    setLastIndex((lastIndex -= 4))
  }

  return (
    <>
      <div className="container">
        <CardDeck style={{ position: "relative" }}>
          <img
            className="prev"
            disabled={lastIndex < 7 ? true : false}
            onClick={handlePrevGames}
            src={prev}
            alt="Previous"
            style={{
              width: "23px",
              height: "38px",
              position: "absolute",
              left: "-50px",
              top: "40%",
              cursor: "pointer"
              // visibility: `${firstIndex === 6 ? "hidden" : "visible"}`
            }}
          />
          <Col style={{ padding: "0" }} sm={12} md={8} lg={8} xl={4}>
            <BigCardComponent />
          </Col>
          {props.items.slice(`${firstIndex}`, `${lastIndex}`).map(item => {
            return (
              <Col key={item.id} style={{ padding: "0" }} sm={6} md={4} lg={4} xl={2}>
                <CardComponent
                  newItem={true}
                  bottomCardBox={true}
                  cardImage={item.icon}
                  cardTitle={item.name}
                  alt={item.description}
                />
              </Col>
            )
          })}

          <img
            onClick={handleNextGames}
            disabled={lastIndex > 120 ? true : false}
            className="next"
            src={next}
            alt="next"
            style={{
              width: "23px",
              height: "38px",
              position: "absolute",
              right: "-50px",
              top: "40%",
              cursor: "pointer"
              // visibility: `${lastIndex < 124 ? "visible" : "hidden"}`
            }}
          />
        </CardDeck>
      </div>
    </>
  )
}

export default BottomCardBox
