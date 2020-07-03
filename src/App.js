import React from "react"

import "./App.css"
import MainNav from "./components/Navbars/MainNav"
import LoginNav from "./components/Navbars/LoginNav"
import SearchNav from "./components/Navbars/SearchNav"
import Banner from "./components/Banner/Banner"
import CardBox from "./components/CardBox/CardBox"

import logo from "./images/roulette.png"
import secondLogo from "./images/path.png"

function App() {
  return (
    <>
      <LoginNav />
      <MainNav />
      <Banner />
      <SearchNav name="TOP SLOT GAMES" logo={logo} />
      <br />
      <CardBox />
      <br />
      <SearchNav name="VIDEO POKER" logo={secondLogo} />
    </>
  )
}

export default App
