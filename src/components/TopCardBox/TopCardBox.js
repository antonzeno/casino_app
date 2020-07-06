import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck, Col } from "react-bootstrap"

const TopCardBox = props => {
  return (
    <div className="container" style={{ marginTop: "-55px" }}>
      <CardDeck>
        {props.items.map(item => {
          return (
            <Col key={item.id} style={{ padding: "0" }} xs={12} sm={6} md={4} lg={4} xl>
              <CardComponent
                topCardBox={true}
                cardImage={item.icon}
                cardTitle={item.description.toUpperCase()}
                alt={item.description}
              />
            </Col>
          )
        })}
      </CardDeck>
    </div>
  )
}

export default TopCardBox
