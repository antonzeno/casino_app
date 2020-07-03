import React from "react"
import CardComponent from "../Card/CardComponent"

import { CardDeck, Card } from "react-bootstrap"

const CardBox = () => {
  return (
    <div className="container">
      <CardDeck>
        <CardComponent />
        <CardComponent />
        <div class="w-100 d-none d-sm-block d-md-none"></div>
        <CardComponent />
        <div class="w-100 d-none d-md-block d-lg-none"></div>
        <CardComponent />
        <div class="w-100 d-none d-sm-block d-md-none"></div>
        <div class="w-100 d-none d-lg-block d-xl-none"></div>
        <CardComponent />

        <CardComponent />
      </CardDeck>
    </div>
  )
}

export default CardBox
