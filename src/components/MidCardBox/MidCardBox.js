import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck } from "react-bootstrap"

import prev from "../../images/prev.png"
import next from "../../images/next.png"

const MidCardBox = props => {
  return (
    <div
      className="container"
      // style={{ display: "grid", gridTemplateColumns: "repeat(3,1 fr)", gridGap: "10px" }}
    >
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
        {props.items.map(item => {
          return (
            <CardComponent
              newItem={true}
              playButton={true}
              tagColor={"#262626"}
              backgroundColor={"#0A0A0A"}
              border={"2.72px solid #F4C042"}
              fontColor={"white"}
              imageHeight={"75%"}
              height={"250px"}
              cardImage={item.icon}
              cardTitle={item.description}
              alt={item.description}
            />
          )
        })}

        <CardComponent
          playButton={true}
          tagColor={"#262626"}
          backgroundColor={"#0A0A0A"}
          border={"2.72px solid #F4C042"}
          fontColor={"white"}
          imageHeight={"75%"}
          height={"250px"}
        />
        <img
          className="next"
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

export default MidCardBox
