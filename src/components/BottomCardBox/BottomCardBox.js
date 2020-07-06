import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck } from "react-bootstrap"
import prev from "../../images/prev.png"
import next from "../../images/next.png"
import img2 from "../../images/img2.png"
import img3 from "../../images/img3.png"
import img4 from "../../images/img4.png"
import img5 from "../../images/img5.png"
import BiggerCardComponent from "../Card/BiggerCardComponent"

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

          <BiggerCardComponent />

          {/* <CardComponent
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            imageHeight={"75%"}
            cardTitle={"Daily JACKPOT"}
            cardImage={img2}
            paddingLeft={"200px"}
          /> */}
          {/* {small screen} */}
          <div className="w-100 d-none d-sm-block d-md-none"></div>

          <CardComponent
            newItem={true}
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            imageHeight={"75%"}
            cardTitle={"Ray of light"}
            cardImage={img2}
          />

          {/* {medium screen} */}
          <div className="w-100 d-none d-md-block d-lg-none"></div>
          <div className="w-100 d-none d-lg-block d-xl-none"></div>

          <CardComponent
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            imageHeight={"75%"}
            cardTitle={"Starburst"}
            cardImage={img3}
          />
          {/* {small   screen} */}
          <div className="w-100 d-none d-sm-block d-md-none"></div>

          <CardComponent
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            imageHeight={"75%"}
            cardTitle={"Ray of light"}
            cardImage={img4}
          />
          <CardComponent
            backgroundColor={"transparent"}
            displayTag={"none"}
            border={"2.72px solid #F4C042"}
            height={"250px"}
            imageHeight={"75%"}
            cardTitle={"Starburst"}
            cardImage={img5}
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
