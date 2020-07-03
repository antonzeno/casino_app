import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck } from "react-bootstrap"
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
              width: "30px",
              height: "30px",
              position: "absolute",
              left: "-50px",
              top: "50%",
              cursor: "pointer"
            }}
          />
          <CardComponent backgroundColor={"transparent"} displayTag={"none"} />

          <CardComponent backgroundColor={"transparent"} displayTag={"none"} />
          <div class="w-100 d-none d-sm-block d-md-none"></div>
          <CardComponent backgroundColor={"transparent"} displayTag={"none"} />
          <CardComponent backgroundColor={"transparent"} displayTag={"none"} />
          <CardComponent backgroundColor={"transparent"} displayTag={"none"} />

          <img
            src={next}
            alt="next"
            style={{
              width: "30px",
              height: "30px",
              position: "absolute",
              right: "-50px",
              top: "50%",
              cursor: "pointer"
            }}
          />
        </CardDeck>
      </div>
    </>
  )
}

export default BottomCardBox
