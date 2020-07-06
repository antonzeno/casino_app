import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck } from "react-bootstrap"
import slotraces from "../../images/slotraces.png"

const TopCardBox = props => {
  return (
    <>
      <div className="container" style={{ marginTop: "-55px" }}>
        <CardDeck>
          <CardComponent
            backgroundColor={"#D1D114"}
            displayTag={"none"}
            border={"1px solid #707070"}
            height={"250px"}
            imageHeight={"83%"}
            fontColor={true}
            cardTitle={"LIVE CASINO"}
            cardImage="https://www.1clickgames.com/resources/images/content/live_casino_big.jpg"
          />
          <CardComponent
            backgroundColor={"#0A0A0A"}
            displayTag={"none"}
            border={"3.44px solid #808080"}
            height={"250px"}
            imageHeight={"83%"}
            cardTitle={"SLOTS & JACKPOTS"}
            cardImage="https://www.stayful.com/wp-content/uploads/2019/08/jackpot-slot.jpg"
          />

          {/* {Small and medium screens} */}
          <div className="w-100 d-none d-md-block d-lg-none"></div>
          <div className="w-100 d-none d-sm-block d-md-none"></div>
          <CardComponent
            backgroundColor={"#0A0A0A"}
            displayTag={"none"}
            border={"3.44px solid #808080"}
            height={"250px"}
            imageHeight={"83%"}
            cardTitle={"CASINO GAMES"}
            cardImage="https://images.theconversation.com/files/147757/original/image-20161128-22748-1couruj.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
          />
          <CardComponent
            backgroundColor={"#0A0A0A"}
            displayTag={"none"}
            border={"3.44px solid #808080"}
            height={"250px"}
            imageHeight={"83%"}
            cardTitle={"SLOT RACES"}
            cardImage={slotraces}
          />
          <CardComponent
            backgroundColor={"#0A0A0A"}
            displayTag={"none"}
            border={"3.44px solid #808080"}
            height={"250px"}
            imageHeight={"83%"}
            cardTitle={"JACKPOTS"}
            cardImage="https://casinochiefs.com/wp-content/uploads/2019/09/casumo-3-mil.png"
          />
        </CardDeck>
      </div>
    </>
  )
}

export default TopCardBox
