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
              top: "40%",
              cursor: "pointer"
            }}
          />
          <CardComponent
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            fontColor={"white"}
            imageHeight={"75%"}
          />
          {/* {small screen} */}
          <div class="w-100 d-none d-sm-block d-md-none"></div>

          <CardComponent
            newItem={true}
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            fontColor={"white"}
            imageHeight={"75%"}
          />

          {/* {medium screen} */}
          <div class="w-100 d-none d-md-block d-lg-none"></div>
          <div class="w-100 d-none d-lg-block d-xl-none"></div>

          <CardComponent
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            fontColor={"white"}
            imageHeight={"75%"}
          />
          {/* {small   screen} */}
          <div class="w-100 d-none d-sm-block d-md-none"></div>

          <CardComponent
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            fontColor={"white"}
            imageHeight={"75%"}
          />
          <CardComponent
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            fontColor={"white"}
            imageHeight={"75%"}
          />

          <img
            src={next}
            alt="next"
            style={{
              width: "30px",
              height: "30px",
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
