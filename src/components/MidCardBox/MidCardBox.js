import React, { useState } from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck, Col } from "react-bootstrap"
import "./MidCardBox.css"

import prev from "../../images/prev.png"
import next from "../../images/next.png"

const MidCardBox = props => {
  let [firstIndex, setFirstIndex] = useState(118)
  let [lastIndex, setLastIndex] = useState(124)

  const handleNextGames = e => {
    setFirstIndex((firstIndex += 6))
    setLastIndex((firstIndex += 6))
  }

  const handlePrevGames = e => {
    setFirstIndex((firstIndex -= 6))
    setLastIndex((lastIndex -= 6))
  }

  return (
    <div className="container">
      <CardDeck style={{ position: "relative" }}>
        <img
          className="prev"
          disabled={firstIndex === 4 ? true : false}
          onClick={handlePrevGames}
          src={prev}
          alt="Previous"
        />

        {props.items.slice(`${firstIndex}`, `${lastIndex}`).map(item => {
          return (
            <Col key={item.id} style={{ padding: "0" }} xs={12} sm={6} md={4} lg={4} xl={2}>
              <CardComponent
                newItem={true}
                playButton={true}
                midCardBox={true}
                cardImage={item.previewImage}
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
        />
      </CardDeck>
    </div>
  )
}

export default MidCardBox
