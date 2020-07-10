import React, { useState } from "react"
import CardComponent from "../Card/CardComponent"
import BigCardComponent from "../Card/BigCardComponent"

import { CardDeck, Col } from "react-bootstrap"
import prev from "../../images/prev.png"
import next from "../../images/next.png"
import "./BottomCardBox.css"

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
    <div className="container">
      <CardDeck style={{ position: "relative" }}>
        <img
          className="prev-button"
          disabled={lastIndex < 7 ? true : false}
          onClick={handlePrevGames}
          src={prev}
          alt="Previous"
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
          className="next-button"
          src={next}
          alt="next"
        />
      </CardDeck>
    </div>
  )
}

export default BottomCardBox
