import React, { Component } from "react"
import axios from "axios"

import "./App.css"
import MainNav from "./components/Navbars/MainNav"
import LoginNav from "./components/Navbars/LoginNav"
import SearchNav from "./components/Navbars/SearchNav"
import Banner from "./components/Banner/Banner"
import TopCardBox from "./components/TopCardBox/TopCardBox"
import MidCardBox from "./components/MidCardBox/MidCardBox"
import BottomCardBox from "./components/BottomCardBox/BottomCardBox"

import logo from "./images/roulette.png"
import secondLogo from "./images/path.png"

class App extends Component {
  state = {
    items: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })
    const res = await axios.get("https://staging.altechlab.com/backend/api/casino/games")

    this.setState({ items: res.data, loading: false })
  }
  render() {
    return (
      <>
        <LoginNav />
        <MainNav />
        <Banner />
        <TopCardBox loading={this.state.loading} items={this.state.items} />
        <br />
        <SearchNav name=" TOP SLOT GAMES" logo={logo} showStars={true} />
        <br />
        <MidCardBox loading={this.state.loading} items={this.state.items} />
        <br />
        <SearchNav name=" VIDEO POKER" logo={secondLogo} showDiamond={true} />
        <br />
        <br />
        <BottomCardBox loading={this.state.loading} items={this.state.items} />
        <br />
      </>
    )
  }
}
export default App
