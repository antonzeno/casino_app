import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck } from "react-bootstrap"

const TopCardBox = props => {
  return (
    <>
      <div className="container">
        <CardDeck style={{ position: "relative" }}>
          <CardComponent
            backgroundColor={"#D1D114"}
            displayTag={"none"}
            style={{ position: "absolute", top: "200px" }}
          />
          <CardComponent backgroundColor={"#0A0A0A"} displayTag={"none"} />
          <CardComponent backgroundColor={"#0A0A0A"} displayTag={"none"} />
          <CardComponent backgroundColor={"#0A0A0A"} displayTag={"none"} />
          <CardComponent backgroundColor={"#0A0A0A"} displayTag={"none"} />
        </CardDeck>
      </div>
    </>
  )
}

export default TopCardBox
