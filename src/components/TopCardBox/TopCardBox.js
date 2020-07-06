import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck } from "react-bootstrap"

const TopCardBox = props => {
  return (
    <>
      <div className="container" style={{ marginTop: "-55px" }}>
        <CardDeck>
          {props.items.map(item => {
            return (
              <CardComponent
                topBackgroundColor={"#D1D114"}
                displayTag={"none"}
                border={"1px solid #707070"}
                height={"250px"}
                imageHeight={"83%"}
                fontColor={"black"}
                cardImage={item.icon}
                cardTitle={item.description}
                alt={item.description}
              />
            )
          })}
        </CardDeck>
      </div>
    </>
  )
}

export default TopCardBox

// <CardComponent
//   backgroundColor={"#D1D114"}
//   displayTag={"none"}
//   border={"1px solid #707070"}
//   height={"250px"}
//   imageHeight={"83%"}
//   fontColor={"black"}
// />
// <CardComponent
//   backgroundColor={"#0A0A0A"}
//   displayTag={"none"}
//   border={"3.44px solid #808080"}
//   height={"250px"}
//   imageHeight={"83%"}
//   fontColor={"white"}
// />

// {/* {Small and medium screens} */}
// <div className="w-100 d-none d-md-block d-lg-none"></div>
// <div className="w-100 d-none d-sm-block d-md-none"></div>
// <CardComponent
//   backgroundColor={"#0A0A0A"}
//   displayTag={"none"}
//   border={"3.44px solid #808080"}
//   height={"250px"}
//   imageHeight={"83%"}
//   fontColor={"white"}
// />
// <CardComponent
//   backgroundColor={"#0A0A0A"}
//   displayTag={"none"}
//   border={"3.44px solid #808080"}
//   height={"250px"}
//   imageHeight={"83%"}
//   fontColor={"white"}
// />
// <CardComponent
//   backgroundColor={"#0A0A0A"}
//   displayTag={"none"}
//   border={"3.44px solid #808080"}
//   height={"250px"}
//   imageHeight={"83%"}
//   fontColor={"white"}
// />
