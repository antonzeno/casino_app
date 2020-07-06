import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck } from "react-bootstrap"

import prev from "../../images/prev.png"
import next from "../../images/next.png"
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"
import image4 from "../../images/4.png"
import image5 from "../../images/5.png"
import image6 from "../../images/6.png"

const CardBox = () => {
  return (
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

        <CardComponent
          playButton={true}
          newItem={true}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          imageHeight={"75%"}
          height={"250px"}
          cardTitle={"Ray of light"}
          cardImage={image1}
        />
        <CardComponent
          playButton={true}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          imageHeight={"75%"}
          height={"250px"}
          cardTitle={"Starburst"}
          cardImage={image2}
        />

        {/* {wrap every 2 on sm} */}
        <div className="w-100 d-none d-sm-block d-md-none"></div>

        <CardComponent
          playButton={true}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          imageHeight={"75%"}
          height={"250px"}
          cardTitle={"Ray of light"}
          cardImage={image3}
        />
        {/* {wrap every 3 on md} */}
        <div className="w-100 d-none d-md-block d-lg-none"></div>
        {/* {wrap every 3 on lg} */}
        <div className="w-100 d-none d-lg-block d-xl-none"></div>

        <CardComponent
          playButton={true}
          yellowTag={true}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          imageHeight={"75%"}
          height={"250px"}
          cardTitle={"Starburst"}
          cardImage={image4}
        />
        {/* {wrap every 2 on sm} */}
        <div className="w-100 d-none d-sm-block d-md-none"></div>

        <CardComponent
          newItem={true}
          playButton={true}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          imageHeight={"75%"}
          height={"250px"}
          cardTitle={"Ray of light"}
          cardImage={image5}
        />

        <CardComponent
          playButton={true}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          imageHeight={"75%"}
          height={"250px"}
          cardTitle={"Starburst"}
          cardImage={image6}
        />
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
  )
}

export default CardBox
